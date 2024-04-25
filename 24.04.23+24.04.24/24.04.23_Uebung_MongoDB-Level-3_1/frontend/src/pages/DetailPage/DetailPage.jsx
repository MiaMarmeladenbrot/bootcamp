import { useContext, useEffect, useState } from "react";
import EditMovie from "../../components/EditMovie/EditMovie";
import { FetchMoviesContext } from "../../context/Context";
import { useParams } from "react-router-dom";
import "./DetailPage.css";

const DetailPage = () => {
  // state to show or hide edit movie form
  const [showEditForm, setShowEditForm] = useState(false);

  // state for found movie details
  const [movieDetails, setMovieDetails] = useState([]);

  // context for fetched movies
  const { movies } = useContext(FetchMoviesContext);

  // get movie id of detailpage
  const { movieId } = useParams();

  // find movie details from this id
  useEffect(() => {
    const find = movies?.find((singleMovie) => singleMovie._id == movieId);
    setMovieDetails(find);
  }, [movies]);

  return (
    <main className="detailpage">
      <h2>{movieDetails?.title}</h2>
      <p>
        {movieDetails?.year} | {movieDetails?.director}
      </p>

      {/* //# hier weitermachen */}
      <button className="yellow-btn">Add to Favorites</button>
      <button
        className="transparent-green-btn"
        onClick={(e) => setShowEditForm(!showEditForm)}
      >
        Edit Movie
      </button>

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
              <button key={index} className="green-btn">
                {genre}
              </button>
            ))}
          </div>
          <h2>Story</h2>
          <p>{movieDetails?.plot}</p>
        </article>
      </section>

      <EditMovie
        movieDetails={movieDetails}
        showEditForm={showEditForm}
        setShowEditForm={setShowEditForm}
      />
    </main>
  );
};

export default DetailPage;
