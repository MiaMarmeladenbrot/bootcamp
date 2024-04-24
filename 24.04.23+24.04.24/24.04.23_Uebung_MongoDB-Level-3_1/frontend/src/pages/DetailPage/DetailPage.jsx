import { useContext, useEffect, useState } from "react";
import EditMovie from "../../components/EditMovie/EditMovie";
import { FetchMoviesContext } from "../../context/Context";
import { useParams } from "react-router-dom";
import "./DetailPage.css";

const DetailPage = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { movies } = useContext(FetchMoviesContext);

  const { movieId } = useParams();

  useEffect(() => {
    if (movies.length > 0) {
      const find = movies?.find((singleMovie) => singleMovie._id == movieId);
      console.log(find);
      setMovieDetails(find);
    }
  }, [movies]);

  return (
    <main className="detailpage">
      <h2>{movieDetails?.title}</h2>
      <p>
        {movieDetails?.year} | {movieDetails?.director}
      </p>

      {/* //# hier weitermachen */}
      <button>Add to Favorites</button>
      <button>Edit Movie</button>

      <section>
        <article>
          <img src="/img/placeholder-poster.jpeg" alt={movieDetails?.title} />
          <div>
            <p>Rating: {movieDetails?.imdb?.rating}</p>
            <p>Duration: {movieDetails?.runtime} min</p>
          </div>
        </article>
        <article>
          <div>
            {movieDetails?.genres?.map((genre, index) => (
              <button key={index} className="btn">
                {genre}
              </button>
            ))}
          </div>
          <h2>Story</h2>
          <p>{movieDetails?.plot}</p>
        </article>
      </section>

      <EditMovie />
    </main>
  );
};

export default DetailPage;
