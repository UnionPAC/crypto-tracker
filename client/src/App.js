import BasicTable from "./components/BasicTable";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import useFetch from "./hooks/useFetch";

const App = () => {
  const { data, loading } = useFetch("/api");
  return (
    <div className="flex flex-col">
      <Header />
      <SearchBar />
      <BasicTable data={data} loading={loading} />
    </div>
  );
};

export default App;
