import AppBar from "./components/AppBar";
import BasicTable from "./components/Table";

const App = () => {
  return (
    <div className="flex flex-col">
      <AppBar />
      <BasicTable />
    </div>
  );
};

export default App;
