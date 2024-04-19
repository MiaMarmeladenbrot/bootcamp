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

  // * Optimization:
  // statt in jeder Abfrage ähnlichen Code zu schreiben, entwickeln wir eine Funktion
  // der übergeben wir query-Wert (wonach soll gesucht werden?), das zu durchsuchende array (was soll durchsucht werden?) und die Filter-Methode (wie soll gesucht werden?)
  const filterIf = (value, array, filter) =>
    value ? array.filter(filter) : array;

  MoviesAPI(process.env.API_KEY)
    .then((movies) =>
      filterIf(titleSearch, movies, (movie) =>
        movie.title.toLowerCase().includes(titleSearch)
      )
    )
    .then((movies) =>
      filterIf(year, movies, (movie) => Number(movie.year) === year)
    )
    .then((movies) =>
      filterIf(directorSearch, movies, (movie) =>
        movie.director.toLowerCase().includes(directorSearch)
      )
    )
    .then((movies) =>
      filterIf(genre, movies, (movie) =>
        movie.genre.map((g) => g.toLowerCase()).includes(genre)
      )
    )
    .then((movies) =>
      filterIf(minRating, movies, (movie) => Number(movie.rate) >= minRating)
    )
    .then((moviesFiltered) => res.json(moviesFiltered))
    .catch((err) => res.status(500).json(err));
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log("Server ready at port", PORT));
