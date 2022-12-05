import BasicTable from "./components/BasicTable";
import useFetch from "./hooks/useFetch";

const App = () => {
  const { data, loading } = useFetch("/api");
  return (
    <div className="flex flex-col">
      <BasicTable data={data} loading={loading} />
    </div>
  );
};

export default App;
