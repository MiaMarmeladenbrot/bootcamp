import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectToDatabase } from "./models/index.js";
import { recipeRouter } from "./routes/recipeRouter.js";
import { ratingRouter } from "./routes/ratingRouter.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.static("data/images"));
app.use(express.json());

// route an den recipeRouter fangen mit der prefix '/api/v1/recipes' an
app.use("/api/v1/recipes", recipeRouter);
app.use("/api/v1/ratings", ratingRouter);

// Auf oberster Ebene wird entweder weiterhin .then und .catch benötigt
// oder wir können hier mit try/catch arbeiten und darin die Verbidung zur Datenbank starten
try {
  await connectToDatabase();
  // Nur wenn die Datenbankverbindung erfolgreich aufgebaut wird
  // wollen wir unseren server exposen (durch app.listen)
  const PORT = 3006;
  app.listen(PORT, () => console.log("Server listening at port", PORT));
} catch (err) {
  console.log(err);
  process.exit(); // node prozess beenden
}
