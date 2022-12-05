const express = require("express");
const fetch = require("node-fetch");
require("dotenv").config();
const app = express();
const port = 5000;

const COINMARKETCAP_SANDBOX_URL = process.env.COINMARKETCAP_SANDBOX_URL;
const COINMARKETCAP_SANDBOX_API_KEY = process.env.COINMARKETCAP_SANDBOX_API_KEY;
const COINMARKETCAP_URL = process.env.COINMARKETCAP_URL;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

app.get("/hi", (req, res) => {
  res.send("Hello!");
});

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

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
