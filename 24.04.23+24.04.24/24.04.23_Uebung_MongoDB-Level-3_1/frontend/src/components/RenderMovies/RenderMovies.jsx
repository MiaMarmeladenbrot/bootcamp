import { useContext, useEffect, useState } from "react";
import { FetchMoviesContext } from "../../context/Context";
import "./RenderMovies.css";
import { Link } from "react-router-dom";

const RenderMovies = () => {
  // context for fetched movies (fetching in LoadingPage)
  const { movies, setMovies } = useContext(FetchMoviesContext);

  // state for load-more-button
  const [loadItems, setLoadItems] = useState(20);

  return (
    <section className="render-movies">
      <article className="render-container">
        {movies.length > 0 ? (
          movies?.slice(0, loadItems).map((singleMovie) => (
            <Link key={singleMovie._id} to={`/movies/${singleMovie._id}`}>
              <div>
                <img
                  src="/img/placeholder-poster.jpeg"
                  alt={singleMovie.title}
                />
                <p>{singleMovie.title}</p>
                <p>{singleMovie.director}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>Loading</p>
        )}
      </article>

      {/* load more button */}
      <button className="btn" onClick={() => setLoadItems(loadItems + 20)}>
        Load More
      </button>
    </section>
  );
};

export default RenderMovies;
