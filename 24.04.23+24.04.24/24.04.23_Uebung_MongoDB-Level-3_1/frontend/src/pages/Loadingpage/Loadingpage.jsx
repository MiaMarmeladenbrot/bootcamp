import { useContext, useEffect } from "react";
import {
  FetchFavoritesContext,
  FetchMoviesContext,
  LoadingContext,
} from "../../context/Context";

const LoadingPage = () => {
  const { setLoading } = useContext(LoadingContext);
  const { movies, setMovies } = useContext(FetchMoviesContext);
  const { favoriteMovies, setFavoriteMovies } = useContext(
    FetchFavoritesContext
  );

  // Loading abwarten
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  // fetch all movies globally while waiting
  useEffect(() => {
    fetch("http://localhost:3007/api/v1/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);

  // fetch favorite movies
  useEffect(() => {
    fetch("http://localhost:3007/api/v1/favorites")
      .then((res) => res.json())
      .then((data) => setFavoriteMovies(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Loading ...</h2>
    </main>
  );
};

export default LoadingPage;
