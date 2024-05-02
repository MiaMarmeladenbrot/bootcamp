import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

import { MoviesAPI } from "./extern/fake_moviedatabase.js";

dotenv.config();

const app = express();
app.use(morgan("dev"));

app.get("/movies", (req, res) => {
  const titleSearch = req.query?.titleSearch?.toLowerCase();
  const year = Number(req.query.year);
  const directorSearch = req.query.directorSearch?.toLowerCase();
  const genre = req.query.genre?.toLowerCase();
  const minRating = Number(req.query.minRating) || 0;

  MoviesAPI(process.env.API_KEY)
    .then((movies) =>
      // * Optimization:
      // der Code durchläuft nicht automatisch alle abfragen, sondern prüft erst, ob überhaupt ein Query für diese Abfrage vorhanden ist und durchläuft sie erst dann
      // falls kein entsprechender Query vorhanden ist, gibt er movies zurück
      titleSearch
        ? movies.filter((movie) =>
            movie.title.toLowerCase().includes(titleSearch)
          )
        : movies
    )
    .then((movies) =>
      year ? movies.filter((movie) => Number(movie.year) === year) : movies
    )
    .then((movies) =>
      directorSearch
        ? movies.filter((movie) =>
            movie.director.toLowerCase().includes(directorSearch)
          )
        : movies
    )
    .then((movies) =>
      genre
        ? movies.filter((movie) =>
            movie.genre.map((g) => g.toLowerCase()).includes(genre)
          )
        : movies
    )
    .then((movies) =>
      minRating
        ? movies.filter((movie) => Number(movie.rate) >= minRating)
        : movies
    )
    .then((moviesFiltered) => res.json(moviesFiltered))
    .catch((err) => res.status(500).json(err));
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log("Server ready at port", PORT));
