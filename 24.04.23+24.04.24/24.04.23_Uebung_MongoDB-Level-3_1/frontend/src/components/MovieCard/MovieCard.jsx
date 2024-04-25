import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FetchFavoritesContext } from "../../context/Context";

const MovieCard = ({ singleMovie, favorite }) => {
  // global state for all fetched favorites
  const { favoriteMovies, setFavoriteMovies } = useContext(
    FetchFavoritesContext
  );

  //# richtige Herzen auf HomePage anzeigen funzt noch nicht
  // state to toggle add/remove-Buttons
  const [fav, setFav] = useState(favorite || false);

  // add a movie to favorites
  const addMovie = () => {
    const newFavorite = {
      movieId: singleMovie._id,
    };

    fetch(`http://localhost:3007/api/v1/movies/${singleMovie._id}/favorites`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFavorite),
    })
      .then((res) => res.json())
      .then((data) => setFavoriteMovies([...favoriteMovies, singleMovie]))
      .catch((err) => console.log(err));

    setFav(true);
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

  console.log(fav);

  return (
    <div className="moviecard">
      <Link to={`/movies/${singleMovie._id}`}>
        <img src="/img/placeholder-poster.jpeg" alt={singleMovie.title} />
        <p>{singleMovie.title}</p>
        <p>{singleMovie.director}</p>
      </Link>
      {/* <button className="yellow-btn" onClick={removeMovie}>
        Remove from Favorites
      </button>
      <button className="transparent-green-btn" onClick={addMovie}>
        Add to Favorites
      </button> */}

      {fav ? (
        <svg
          onClick={removeMovie}
          xmlns="http://www.w3.org/2000/svg"
          height="25"
          viewBox="0 0 30 27"
          fill="none"
        >
          <path
            d="M27.0881 1.78373C23.8772 -0.93555 19.1019 -0.446428 16.1547 2.57564L15.0004 3.75769L13.8462 2.57564C10.9048 -0.446428 6.12365 -0.93555 2.91277 1.78373C-0.766844 4.90479 -0.9602 10.5064 2.33271 13.8895L13.6704 25.5236C14.4028 26.2747 15.5922 26.2747 16.3246 25.5236L27.6623 13.8895C30.9611 10.5064 30.7677 4.90479 27.0881 1.78373Z"
            stroke="none"
            fill="#2a9d8f"
          />
        </svg>
      ) : (
        <svg
          onClick={addMovie}
          xmlns="http://www.w3.org/2000/svg"
          height="25"
          viewBox="0 0 30 27"
          fill="none"
        >
          <path
            d="M27.0881 1.78373C23.8772 -0.93555 19.1019 -0.446428 16.1547 2.57564L15.0004 3.75769L13.8462 2.57564C10.9048 -0.446428 6.12365 -0.93555 2.91277 1.78373C-0.766844 4.90479 -0.9602 10.5064 2.33271 13.8895L13.6704 25.5236C14.4028 26.2747 15.5922 26.2747 16.3246 25.5236L27.6623 13.8895C30.9611 10.5064 30.7677 4.90479 27.0881 1.78373Z"
            fill="none"
            stroke="#2a9d8f"
          />
        </svg>
      )}
    </div>
  );
};

export default MovieCard;
