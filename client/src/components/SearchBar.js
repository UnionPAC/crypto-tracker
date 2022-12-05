import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center p-8">
      <Input
        placeholder="search by name or symbol ..."
        sx={{
          width: "400px",
          color: "rgba(0, 0, 0, 0.6)",
          fontSize: "1rem",
          backgroundColor: "#F1F1F1",
          padding: "8px 16px",
          borderRadius: "6px",
          position: "relative",
        }}
        disableUnderline
      />
    </div>
  );
};

export default SearchBar;
