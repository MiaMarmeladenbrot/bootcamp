import { useContext, useState } from "react";
import { FetchMoviesContext } from "../../context/Context";
import "./AddMovie.css";

const AddMovie = () => {
  // global context for fetched movies
  const { movies, setMovies } = useContext(FetchMoviesContext);

  // states for input fields
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [runtime, setRuntime] = useState("");
  const [plot, setPlot] = useState("");

  // function to save edited movie details
  const addMovie = (e) => {
    e.preventDefault();

    const newMovieInfo = {
      title,
      year,
      director,
      genres: genre.split(","),
      imdb: { rating },
      plot,
      runtime,
    };

    fetch(`http://localhost:3007/api/v1/movies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMovieInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => console.log(err));

    setTitle("");
    setYear("");
    setDirector("");
    setGenre("");
    setRating("");
    setPlot("");
  };

  return (
    <form className="addMovie">
      <h2>Add your own movies</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />

      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Year"
      />

      <input
        type="text"
        value={director}
        onChange={(e) => setDirector(e.target.value)}
        placeholder="Director"
      />

      <input
        type="text"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder="Genres (separated by comma)"
      />

      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Rating (0-10)"
      />

      <input
        type="number"
        value={runtime}
        onChange={(e) => setRuntime(e.target.value)}
        placeholder="Duration (in minutes)"
      />

      <textarea
        name="plot"
        id="plot"
        cols="30"
        rows="10"
        value={plot}
        onChange={(e) => setPlot(e.target.value)}
        placeholder="Description"
      >
        {plot}
      </textarea>

      <button className="green-btn" onClick={addMovie}>
        Submit changes
      </button>
    </form>
  );
};

export default AddMovie;
