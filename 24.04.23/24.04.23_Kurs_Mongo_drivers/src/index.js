import express from "express";
import morgan from "morgan";
import { RezepteDAO } from "./db-access/rezepteDAO.js";
import { BewertungenDAO } from "./db-access/bewertungenDAO.js";
import { ObjectId } from "mongodb";

const app = express();

app.use(morgan("dev")); // logging middleware
app.use(express.json()); // body parser middleware

app.get("/", (_, res) => res.json({ hello: "world" }));

// GET all recipes
app.get("/api/v1/recipes", (_, res) => {
  // Funktionsaufruf von findAll() im rezepteDAO.js:
  RezepteDAO.findAll()
    .then((recipes) => res.json(recipes))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not add find all recipes" });
    });
});

// GET one recipe
app.get("/api/v1/recipes/:recipeId", (req, res) => {
  const recipeId = req.params.recipeId;

  // wir wollen hier nicht nur die Daten vom Rezept selbst haben, sondern auch sämtliche Bewertungen, die es zu diesem Rezept gibt
  // dafür müssen wir die Funktion findByRecipe() aus bewertungenDAO.js nutzen
  // deshalb Promise.all, um beide Funktionen und ihre Promises zu bekommen:
  Promise.all([
    RezepteDAO.findById(recipeId), // alle Daten dieses einen Rezepts, die in der collection "rezepte" gespeichert sind
    BewertungenDAO.findByRecipe(recipeId), // alle bewertungen zu einem rezept, die in der collection "bewertungen" gespeichert sind
  ])
    // mit den erhaltenen Daten erstellen wir dann eine Kopie der ursprünglichen Rezeptdaten, die jetzt auch die Bewertungen enthalten
    // und geben das als Antwort an den Client zurück:
    .then(
      ([foundRecipe, ratings]) =>
        res.json(foundRecipe ? { ...foundRecipe, ratings } : {}) // { result: foundRecipe } | { error, message }
    )
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ err, message: "Could not add find recipe " + recipeId });
    });
});

// POST new recipe
app.post("/api/v1/recipes", (req, res) => {
  const newRecipe = req.body;
  RezepteDAO.createOne(newRecipe)
    .then((addedRecipe) => res.json(addedRecipe || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not add new recipe" });
    });
});

// PATCH one recipe
app.patch("/api/v1/recipes/:recipeId", (req, res) => {
  const recipeId = req.params.recipeId;
  const updateInfo = req.body;
  RezepteDAO.updateOne(recipeId, updateInfo)

    // falls wir im Backend iwo “null” returnen, sollten wir die response umwandeln in leeres array oder object
    // sonst bekommt das Frontend kein valides json zurück, falls “null” darin returned wurde
    // könnte man auch im Frontend lösen, ist aber netter, es im Backend gleich einzubauen
    // deshalb geben wir hier als res entweder das geänderte Rezept oder ein leeres Objekt zurück
    .then((updatedRecipe) => res.json(updatedRecipe || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not add new recipe" });
    });
});

// DELETE one recipe
app.delete("/api/v1/recipes/:recipeId", (req, res) => {
  const recipeId = req.params.recipeId;
  RezepteDAO.deleteOne(recipeId)
    .then((deletedRecipe) => res.json(deletedRecipe || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not remove recipe" });
    });
});

// POST one rating to recipe
app.post("/api/v1/recipes/:recipeId/ratings", (req, res) => {
  const newRatingInfo = {
    text: req.body.text, // hat super geschmeckt das rezept, freue mich auf das nächste
    stars: req.body.stars, // 5 stars
    // jede Bewertung enthält auch die ID des Rezepts, zu dem sie gehört
    // damit beim Posten auch gleich klar ist, zu welchem Rezept die Bewertung gehört, muss die ID des Rezepts hier mitgegeben und ausgelesen werden
    recipeId: ObjectId.createFromHexString(req.params.recipeId), // "663d000149af23e0230aaf39"
  };
  BewertungenDAO.createOne(newRatingInfo)
    .then((addedRating) => res.json(addedRating || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not add new recipe" });
    });
});

// DELETE one rating
app.delete("/api/v1/ratings/:ratingId", (req, res) => {
  BewertungenDAO.deleteOne(req.params.ratingId)
    .then((deletedRating) => res.json(deletedRating || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not add new recipe" });
    });
});

const PORT = 3006;
app.listen(PORT, () => console.log("Server listening at port", PORT));
