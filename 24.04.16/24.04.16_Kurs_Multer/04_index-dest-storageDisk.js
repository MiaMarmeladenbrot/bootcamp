// # ! Multer with storageDisk
// laut Ahmed nicht so wichtig
// mit dieser Variante kann ich die Benennung der Dateien beeinflussen
// werden wir kaum benutzen

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

// * Multer mit diskStorage
// mit diskStorage können wir Destination und Dateinamen beim Hochladen der Datei beeinflussen
const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const fileName = Date.now() + "_" + file.originalname;
    cb(null, fileName);
  },
});

// setup von der multer upload middlware
const upload = multer({ storage: diskStorage });

// Endpunkt definieren, um eine Datei hochzuladen
app.post("/api/files/upload", upload.single("attachment"), (req, res) => {
  console.log(req.body);
  console.log(req.file);

  res.json({ fileName: req.file.filename });
});

// Port erstellen und listening
const PORT = 3003;
app.listen(PORT, () => console.log("Server ready at port", PORT));
