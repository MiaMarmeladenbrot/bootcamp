import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FetchFavoritesContext } from "../../context/Context";
import "./MovieCard.css";
import FavToggle from "../FavToggle/FavToggle";

const MovieCard = ({ singleMovie, favorite }) => {
  // global state for all fetched favorites
  const { favoriteMovies, setFavoriteMovies } = useContext(
    FetchFavoritesContext
  );

  // state to toggle add/remove-Buttons
  const [fav, setFav] = useState(favorite || false);

  return (
    <div className="moviecard">
      <Link to={`/movies/${singleMovie._id}`}>
        <img src="/img/placeholder-poster.jpeg" alt={singleMovie.title} />
        <p>{singleMovie.title}</p>
        <p>{singleMovie.director}</p>
      </Link>

      <FavToggle fav={fav} singleMovie={singleMovie} setFav={setFav} />
    </div>
  );
};

export default MovieCard;
