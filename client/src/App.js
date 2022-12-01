import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchApiData = async () => {
      setLoading(true);
      const res = await fetch("/api");
      const json = await res.json();
      setData(json.data);
      setLoading(false);
    };
    fetchApiData();
  }, []);

  return (
    <div className="p-4">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="text-3xl font-bold">Crypto Tracker</div>
      {loading ? (
        "loading data ..."
      ) : (
        <div>
          {data.map((data, index) => {
            const {
              cmc_rank,
              id,
              name,
              symbol,
              circulating_supply,
              total_supply,
              max_supply,
              quote: {
                USD: {
                  price,
                  percent_change_1h,
                  percent_change_24h,
                  percent_change_7d,
                  market_cap,
                  volume_24h,
                },
              },
            } = data;
            return (
              <div className="m-6" key={cmc_rank}>
                <div>{cmc_rank}</div>
                <img
                  src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`}
                  alt={`${name} Logo`}
                  width="64px"
                />
                <div>{name}</div>
                <div>{symbol}</div>

                <div>price: {price}</div>
                <div>1hr %: {percent_change_1h}</div>
                <div>24hr %: {percent_change_24h}</div>
                <div>7d %: {percent_change_7d}</div>
                <div>market cap: {market_cap}</div>
                <div>24hr volume: {volume_24h}</div>
                <div>circulating supply: {circulating_supply}</div>
                <div>total supply: {total_supply}</div>
                <div>max supply: {max_supply}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
