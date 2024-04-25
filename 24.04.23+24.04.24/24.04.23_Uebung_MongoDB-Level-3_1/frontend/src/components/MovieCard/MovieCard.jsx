import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FetchFavoritesContext } from "../../context/Context";
import Heart from "../Heart";

const MovieCard = ({ singleMovie }) => {
  // global state for all fetched favorites
  const { favoriteMovies, setFavoriteMovies } = useContext(
    FetchFavoritesContext
  );

  // state to fill fav-heart depending on status
  const [fav, setFav] = useState(false);

  // add a movie to favorites
  const addMovie = () => {
    const newFavorite = {
      movieId: singleMovie._id,
    };

    // # Abfrage ergännzen, damit kein Film zweimal auf der Fav-Liste landen kann

    fetch(`http://localhost:3007/api/v1/movies/${singleMovie._id}/favorites`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFavorite),
    })
      .then((res) => res.json())
      .then((data) => setFavoriteMovies([...favoriteMovies, singleMovie]))
      .catch((err) => console.log(err));
  };

  // delete a movie from favorites and show updated favorites
  const removeMovie = () => {
    fetch(`http://localhost:3007/api/v1/favorites/${singleMovie._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((deletedId) =>
        setFavoriteMovies(
          favoriteMovies.filter(
            (deletedId) => singleMovie._id !== deletedId._id
          )
        )
      )
      .catch((err) => console.log(err));

    setFav(false);
  };

  return (
    <div>
      <Link to={`/movies/${singleMovie._id}`}>
        <img src="/img/placeholder-poster.jpeg" alt={singleMovie.title} />
        <p>{singleMovie.title}</p>
        <p>{singleMovie.director}</p>
      </Link>
      <button className="yellow-btn" onClick={removeMovie}>
        Remove from Favorites
      </button>
      <button className="transparent-green-btn" onClick={addMovie}>
        Add to Favorites
      </button>
      {/* <button onClick={removeMovie}>
        <Heart fav={fav} />
      </button> */}
      {/* <Heart onClick={removeMovie} fav={fav} /> */}
    </div>
  );
};

export default MovieCard;
