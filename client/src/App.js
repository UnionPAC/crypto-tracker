import BasicTable from "./components/BasicTable";
import Header from "./components/Header";
import useFetch from "./hooks/useFetch";
import { useState } from "react";

const App = () => {
  const { data, loading } = useFetch("/api");
  const [searchVal, setSearchVal] = useState("");

  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div>
        <input
          className="bg-gray-100 w-[350px] mt-6 mb-6 px-3 py-2 rounded text-md text-[14px] focus:outline-none"
          placeholder="search by name, symbol or rank"
          type="text"
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </div>
      <BasicTable
        data={data}
        loading={loading}
        searchVal={searchVal}
      />
    </div>
  );
};

export default App;
