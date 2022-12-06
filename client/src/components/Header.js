const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <a href="/">
        <h1 className="text-5xl font-bold p-4">Crypto Tracker</h1>
      </a>

      <p className="p-2 text-md italic">
        keep up with information on the top 100 cryptocurrencies 🚀
      </p>
    </div>
  );
};

export default Header;
