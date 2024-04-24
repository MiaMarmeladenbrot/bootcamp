import express from "express";
import morgan from "morgan";
import cors from "cors";
import { MoviesDAO } from "./db-access/moviesDAO.js";
import { FavoritesDAO } from "./db-access/favoritesDAO.js";

const app = express();

// cors middleware
app.use(cors());

// logging middleware
app.use(morgan("dev"));

// body parser middleware
app.use(express.json());

// GET /
app.get("/", (_, res) => res.json("dit läuft"));

// * ========= movies =========
// GET all movies
app.get("/api/v1/movies", (_, res) => {
  MoviesDAO.findAll()
    .then((movies) => res.json(movies))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not find all movies" });
    });
});

// GET one movie by id
app.get("/api/v1/movies/:movieId", (req, res) => {
  const movieId = req.params.movieId;

  MoviesDAO.findOne(movieId)
    .then((movie) => res.json(movie))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not find movie" + movieId });
    });
});

// POST new movie
app.post("/api/v1/movies", (req, res) => {
  const newMovie = req.body;

  MoviesDAO.insertOne(newMovie)
    .then((addedMovie) => res.json(addedMovie || {}))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not add new movie" })
    );
});

// PATCH one movie
app.patch("/api/v1/movies/:movieId", (req, res) => {
  // Variable für Id
  const movieId = req.params.movieId;

  // Variable für zu ändernden Infos aus dem request body
  const updateInfo = req.body;

  // Funktionsaufruf, um Infos upzudaten
  MoviesDAO.updateOne(movieId, updateInfo)
    .then((updatedMovie) => res.json(updatedMovie || {}))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not update the movie" })
    );
});

// DELETE one movie
app.delete("/api/v1/movies/:movieId", (req, res) => {
  const movieId = req.params.movieId;

  MoviesDAO.deleteOne(movieId)
    .then((deletedMovie) => res.json(deletedMovie || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not delete movie" });
    });
});

// * ========= favorite movies =========
// GET /api/v1/favorites
// alle favorisierten Filme anzeigen
app.get("/api/v1/favorites", (_, res) => {
  FavoritesDAO.showFavoriteMovies()
    .then((favoriteMovies) => res.json(favoriteMovies))
    .catch((err) => {
      console.log(err);
      res.status(200).json({ err, message: "Could not find favorite movies" });
    });
});

// POST /api/v1/movies/:movieId/favorites
// einen Film zu Favoriten hinzufügen:
app.post("/api/v1/movies/:movieId/favorites", (req, res) => {
  const movieId = req.params.movieId;

  const newFavoriteInfo = {
    movieId: ObjectId.createFromHexString(movieId),
  };

  FavoritesDAO.addToFavorites(newFavoriteInfo)
    .then((addedFavorite) => res.json(addedFavorite || {}))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not add movie to favorites" })
    );
});

// DELETE /api/v1/favorites/:favoriteId
// einen Film aus Favoriten entfernen:
app.delete("/api/v1/favorites/:favoriteId", (req, res) => {
  const favoriteId = req.params.favoriteId;

  FavoritesDAO.deleteFromFavorites(favoriteId)
    .then((deletedFavorite) => res.json(deletedFavorite || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not delete movie" });
    });
});

const PORT = 3007;
app.listen(PORT, () => console.log("Server listening at port", PORT));
