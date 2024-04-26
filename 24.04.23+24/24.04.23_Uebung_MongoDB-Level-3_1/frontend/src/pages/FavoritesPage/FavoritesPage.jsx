import "./FavoritesPage.css";
import { useContext } from "react";
import { FetchFavoritesContext } from "../../context/Context";
import MovieCard from "../../components/MovieCard/MovieCard";

const FavoritesPage = () => {
  // global state for all fetched favorites
  const { favoriteMovies } = useContext(FetchFavoritesContext);

  return (
    <main className="favorites">
      <h2>My Favorites</h2>

      <article className="render-favorites">
        {favoriteMovies?.map((singleMovie) => (
          <MovieCard
            key={singleMovie._id}
            singleMovie={singleMovie}
            favorite={true}
          />
        ))}
      </article>
    </main>
  );
};

export default FavoritesPage;
