import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchApiData = async () => {
      setLoading(true);
      const res = await fetch(url);
      const json = await res.json();
      setData(json.data);
      setLoading(false);
    };
    fetchApiData();
  }, [url]);
  return { data, loading };
};

export default useFetch;
