// ! Multer with multer({ dest: "./uploads" });
// laut Ahmed: Schritt 1 und 3 am wichtigsten

import express from "express";
import multer from "multer";

// Server erstellen
const app = express();

// logging middleware
app.use((req, _, next) => {
  console.log("new request:", req.method, req.url);
  next();
});

// Endpunkt, um Seite anzuzeigen
app.get("/", (_, res) => res.send("It works"));

// Multer
// * multer-destination festlegen
// das macht im Prinzip das Gleiche wie fs.writeFile() vorher
// legt den Ort des Hochladens fest und erstellt dort die Datei
const upload = multer({ dest: "./uploads" });

// Endpunkt definieren, um eine Datei hochzuladen
// bei multer den beim request angegebenen fieldname eintragen, hier attachment
// dann folgt, was passieren soll beim Upload
app.post("/api/files/upload", upload.single("attachment"), (req, res) => {
  console.log(req.body);
  console.log(req.file);

  // gibt den Dateinamen zurück
  res.json({ fileName: req.file.filename });
});

// Port erstellen und listening
const PORT = 3003;
app.listen(PORT, () => console.log("Server ready at port", PORT));
