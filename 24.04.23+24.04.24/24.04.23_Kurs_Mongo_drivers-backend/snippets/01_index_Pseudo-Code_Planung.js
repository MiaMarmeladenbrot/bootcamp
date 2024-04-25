import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));

app.get("/", (req, res) => res.json({ hello: "World" }));

//! MongoDb
// Datenbankabfrage ist asynchron, returned also eine Promise
// MongoDb Query im Terminal gestern: db.movieDetails.find({ year: { $gte: 2001 } })
// das wollen wir jetzt mit unseren vorherigen Serveroperationen verknüpfen
// * Pseudo-Code: Was soll passieren?
// - Endpunkt mit get und einer bestimmten URL bekommt eine Request
app.get("/api/v1/movies/:fromYear", (req, res) => {
  // - hier folgt noch die Verbindung zur Datenbank
  // - die Datenbankabfrage selbst returned eine Promise, mit der wir weiterarbeiten können, die wir also wie vorher mit unserer request abgleichen können:
  //     db.movieDetails
  //       .find({ year: { $gte: Number(req.params.fromYear) } })
  //       .then((movies) => res.json({ movies }))
  //       .catch((err) => res.status(500).json({ message: "Could not find movies" }));
});

const PORT = 3006;
app.listen(PORT, () => console.log("Server ready at port", PORT));
