import { useContext, useState } from "react";
import "./SearchBar.css";
import { FetchMoviesContext } from "../../context/Context";

const SearchBar = () => {
  // global context for all fetched movies
  const { movies, setMovies } = useContext(FetchMoviesContext);

  // state for userInput
  const [userInput, setUserInput] = useState("");

  // function to find and save movie from userInput
  const findMovie = (e) => {
    e.preventDefault();

    setMovies(
      movies?.filter((movie) =>
        movie.title.toLowerCase().includes(userInput.toLowerCase())
      )
    );
  };

  return (
    <section className="searchbar">
      <input
        type="text"
        placeholder="e.g. The Godfather"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
      />
      <button className="green-btn" onClick={findMovie}>
        Submit
      </button>
    </section>
  );
};

export default SearchBar;
