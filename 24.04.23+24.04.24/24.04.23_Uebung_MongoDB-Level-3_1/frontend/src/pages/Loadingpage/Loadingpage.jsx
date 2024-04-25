import { useContext, useEffect, useState } from "react";
import {
  FetchFavoritesContext,
  FetchMoviesContext,
  LoadingContext,
} from "../../context/Context";
import "./Loadingpage.css";

const LoadingPage = () => {
  const { setLoading } = useContext(LoadingContext);
  const { movies, setMovies } = useContext(FetchMoviesContext);
  const { favoriteMovies, setFavoriteMovies } = useContext(
    FetchFavoritesContext
  );

  // # Test, um Favs auch auf Home zu zeigen
  // console.log(movies);
  // console.log(favoriteMovies);
  // const [movieId, setMovieId] = useState();

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

  // # Test, um Favs auch auf Home zu zeigen
  // useEffect(() => {
  //   if (favoriteMovies.length > 0) {
  //     setMovieId(favoriteMovies.map((movie) => movie._id));
  //   }
  // }, []);
  // console.log(movieId);

  return (
    <main className="loadingpage">
      <svg
        className="star"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        viewBox="0 0 62 59"
        fill="none"
      >
        <path
          d="M27.674 2.05238L20.1066 17.3075L3.17538 19.7617C0.13912 20.1996 -1.0777 23.9212 1.12417 26.0527L13.3735 37.9204L10.4763 54.6849C9.9548 57.7152 13.1649 59.9851 15.8535 58.5678L31 50.6522L46.1465 58.5678C48.8351 59.9735 52.0452 57.7152 51.5237 54.6849L48.6265 37.9204L60.8758 26.0527C63.0777 23.9212 61.8609 20.1996 58.8246 19.7617L41.8934 17.3075L34.326 2.05238C32.9701 -0.666816 29.0415 -0.701382 27.674 2.05238Z"
          fill="#E9C46A"
        />
      </svg>
    </main>
  );
};

export default LoadingPage;
