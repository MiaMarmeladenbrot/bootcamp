import { useContext, useEffect, useState } from "react";
import EditMovie from "../../components/EditMovie/EditMovie";
import {
  FetchFavoritesContext,
  FetchMoviesContext,
} from "../../context/Context";
import { useParams } from "react-router-dom";
import "./DetailPage.css";
import FavToggle from "../../components/FavToggle/FavToggle";

const DetailPage = () => {
  // global context for fetched favorite movies
  const { favoriteMovies } = useContext(FetchFavoritesContext);

  // state to toggle add/remove-Buttons
  const [fav, setFav] = useState(false);

  // state to show or hide edit movie form
  const [showEditForm, setShowEditForm] = useState(false);

  // state for found movie details
  const [movieDetails, setMovieDetails] = useState([]);

  // context for fetched movies
  const { movies } = useContext(FetchMoviesContext);

  // states for input-fields in edit form
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [plot, setPlot] = useState("");
  const [runtime, setRuntime] = useState("");

  // get movie id of detailpage
  const { movieId } = useParams();

  // find movie details from this id
  useEffect(() => {
    const find = movies?.find((singleMovie) => singleMovie._id == movieId);
    setMovieDetails(find);
  }, []);

  // fetch one favorite for this id
  // if there is one, set fav to true to use the filled heart svg with remove-function
  // if there's not, set fav to false to use the bordered heart svg with add-function
  useEffect(() => {
    fetch(`http://localhost:3007/api/v1/favorites/${movieId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.movieId === movieId) {
          setFav(true);
        } else {
          setFav(false);
        }
      });
  }, []);

  // show edit form and fill input fields with data from movieDetails
  const openEdit = (e) => {
    e.preventDefault();
    setShowEditForm(!showEditForm);
    setTitle(movieDetails.title);
    setYear(movieDetails.year);
    setDirector(movieDetails.director);
    setGenre(movieDetails.genres.join(", "));
    setRating(movieDetails.imdb.rating);
    setPlot(movieDetails.plot);
    setRuntime(movieDetails.runtime);
  };

  return (
    <main className="detailpage">
      <h2>{movieDetails?.title}</h2>
      <p>
        {movieDetails?.year} | {movieDetails?.director}
      </p>
      <FavToggle singleMovie={movieDetails} fav={fav} setFav={setFav} />

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
          <p>{movieDetails?.plot}</p>{" "}
          <button className="transparent-green-btn" onClick={openEdit}>
            Edit Movie
          </button>
        </article>
      </section>

      <EditMovie
        movieDetails={movieDetails}
        setMovieDetails={setMovieDetails}
        showEditForm={showEditForm}
        setShowEditForm={setShowEditForm}
        // input fields
        title={title}
        setTitle={setTitle}
        year={year}
        setYear={setYear}
        director={director}
        setDirector={setDirector}
        genre={genre}
        setGenre={setGenre}
        rating={rating}
        setRating={setRating}
        plot={plot}
        setPlot={setPlot}
        runtime={runtime}
        setRuntime={setRuntime}
      />
    </main>
  );
};

export default DetailPage;
