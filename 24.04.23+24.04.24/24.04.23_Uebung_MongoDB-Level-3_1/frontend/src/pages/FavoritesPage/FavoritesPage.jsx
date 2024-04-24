import { Link } from "react-router-dom";
import "./FavoritesPage.css";
import { useEffect, useState } from "react";

const FavoritesPage = () => {
  // state for fetched favorites
  const [favoriteMovies, setFavoriteMovies] = useState();

  // fetch favorite movies
  useEffect(() => {
    fetch("http://localhost:3007/api/v1/favorites")
      .then((res) => res.json())
      .then((data) => setFavoriteMovies(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(favoriteMovies);

  return (
    <main className="favorites">
      <h2>My Favorites</h2>

      <article className="render-favorites">
        {favoriteMovies?.map((singleMovie) => (
          <Link key={singleMovie._id} to={`/movies/${singleMovie._id}`}>
            <div>
              <img src="/img/placeholder-poster.jpeg" alt={singleMovie.title} />
              <p>{singleMovie.title}</p>
              <p>{singleMovie.director}</p>
              {/* //# remove favorites func einbauen */}
              {/* //# minues-button noch einbauen */}
              {/* //# oder schöner nur mit Icon?  */}
              <button className="yellow-btn">Remove from Favorites</button>
            </div>
          </Link>
        ))}
      </article>
    </main>
  );
};

export default FavoritesPage;
