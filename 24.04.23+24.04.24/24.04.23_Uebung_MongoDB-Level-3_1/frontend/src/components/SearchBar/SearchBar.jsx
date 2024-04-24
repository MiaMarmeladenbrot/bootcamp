import "./SearchBar.css";

const SearchBar = () => {
  return (
    <section className="searchbar">
      <input type="text" placeholder="e.g. The Godfather" />
      <button className="btn">Submit</button>
    </section>
  );
};

export default SearchBar;
