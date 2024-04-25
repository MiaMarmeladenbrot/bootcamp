import { Link } from "react-router-dom";
import "./FavoritesPage.css";
import { useContext, useEffect, useState } from "react";
import {
  FetchFavoritesContext,
  FetchMoviesContext,
} from "../../context/Context";
import MovieCard from "../../components/MovieCard/MovieCard";

const FavoritesPage = () => {
  // global state for all fetched favorites
  const { favoriteMovies } = useContext(FetchFavoritesContext);

  return (
    <main className="favorites">
      <h2>My Favorites</h2>

      <article className="render-favorites">
        {favoriteMovies?.map((singleMovie) => (
          <MovieCard key={singleMovie._id} singleMovie={singleMovie} />
        ))}
      </article>
    </main>
  );
};

export default FavoritesPage;
