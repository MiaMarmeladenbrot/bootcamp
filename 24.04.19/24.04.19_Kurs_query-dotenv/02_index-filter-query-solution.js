import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

import { MoviesAPI } from "./nichtUnserCode/fake_moviedatabase.js";

dotenv.config();

const app = express();
app.use(morgan("dev"));

// ! Query
// statt der vielen einzelnen Endpoints können wir query benutzen
// query ist optionaler und dynamischer Parameter nach dem Slash
// und Bestandteil der request (req.query)
// fungiert wie ein Parameter, dem man einen Namen geben kann => key-value-Paar-Prinzip
// => /movies/?minRating=ß&year=2011

// * wir brauchen nur noch einen einzigen Endpunkt, mit dem wir alles abfragen können:
app.get("/movies", (req, res) => {
  // * Definition aller query-Möglichkeiten
  const titleSearch = req.query?.titleSearch?.toLowerCase(); // '.'-operator zugriff und '?.'-operator zugriff oder undefined für die gesamte expression
  const year = Number(req.query.year); // movie.year === year
  const directorSearch = req.query.directorSearch?.toLowerCase();
  const genre = req.query.genre?.toLowerCase();
  const minRating = Number(req.query.minRating) || 0; // minRating 0 wenn kein gültiger Wert, damit wir JEDE movie nehmen im filter

  // * ein Aufruf, innerhalb dessen wir sämtliche query-Möglichkeiten abfragen:
  // falls neue Daten hinzukommen, können wir den Code hier nun einfach ergänzen, ohne dafür dann neue Endpunkte schreiben zu müssen
  MoviesAPI(process.env.API_KEY)
    .then((movies) =>
      movies
        .filter((movie) =>
          titleSearch ? movie.title.toLowerCase().includes(titleSearch) : true
        )
        .filter((movie) => (year ? Number(movie.year) === year : true)) // "2001" === "2001" -> true \\\\\ 2001 === 2001 -> true
        .filter((movie) =>
          directorSearch
            ? movie.director.toLowerCase().includes(directorSearch)
            : true
        )
        .filter((movie) =>
          genre ? movie.genre.map((g) => g.toLowerCase()).includes(genre) : true
        )
        .filter((movie) => (minRating ? Number(movie.rate) >= minRating : true))
    )
    .then((moviesFiltered) => res.json(moviesFiltered))
    .catch((err) => res.status(500).json(err));
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log("Server ready at port", PORT));
