const express = require("express");
const app = express();
const fetch = require("node-fetch");
require("dotenv").config();
const path = require("path");
const PORT = process.env.PORT || 5000;

const COINMARKETCAP_SANDBOX_URL = process.env.COINMARKETCAP_SANDBOX_URL;
const COINMARKETCAP_SANDBOX_API_KEY = process.env.COINMARKETCAP_SANDBOX_API_KEY;
const COINMARKETCAP_URL = process.env.COINMARKETCAP_URL;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

app.get("/api", async (req, res) => {
  let fetch_response = await fetch(COINMARKETCAP_URL, {
    method: "GET",
    headers: {
      // note: fake API key for sandbox
      "X-CMC_PRO_API_KEY": COINMARKETCAP_API_KEY,
    },
  });
  const json = await fetch_response.json();
  res.json(json);
});

app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve("client", "build", "index.html"));
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`App listening on port ${PORT}`);
});
