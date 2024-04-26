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
  // # Fav-Herz anzeigen:
  // - globalen Fav Kontext importieren
  // - movieDetails._id abgleichen mit movieIds aus fav-Kontext
  // - falls Match, state fav === true => gefülltes Herz zeigen
  // - falls kein Match, state fav === false => gerahmtes Herz zeigen
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
  }, [movies]);

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

  // # fav-state ändert sich für alle movies, nicht in Abhängigkeit von der movieId - warum?
  useEffect(() => {
    const movieInFavorite = favoriteMovies?.find(
      (favorite) => favorite.movieId === movieDetails._id
    );
    movieInFavorite ? setFav(true) : setFav(false);
  }, [favoriteMovies]);

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
