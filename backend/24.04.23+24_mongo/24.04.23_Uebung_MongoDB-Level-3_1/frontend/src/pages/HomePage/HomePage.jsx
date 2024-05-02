import Hero from "../../components/Hero/Hero";
import "./HomePage.css";

import { useContext, useEffect, useState } from "react";
import { FetchMoviesContext } from "../../context/Context";
import { Link } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";

const HomePage = () => {
  // context for fetched movies (fetching in LoadingPage)
  const { movies, setMovies } = useContext(FetchMoviesContext);

  // state for load-more-button
  const [loadItems, setLoadItems] = useState(20);
  return (
    <main>
      <Hero />
      {/* <RenderMovies /> */}

      <section className="render-movies">
        <article className="render-container">
          {movies?.slice(0, loadItems).map((singleMovie) => (
            <MovieCard
              key={singleMovie._id}
              singleMovie={singleMovie}
              // favorite={true}
            />
          ))}
        </article>

        {/* load more button until all movies are displayed */}
        {movies.length > 20 && loadItems <= 2235 && (
          <button
            className="green-btn"
            onClick={() => setLoadItems(loadItems + 20)}
          >
            Load More
          </button>
        )}
      </section>
    </main>
  );
};

export default HomePage;
