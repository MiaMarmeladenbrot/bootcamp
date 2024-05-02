// ! Dateien manuell schreiben mit fs.writeFile()
// laut Ahmed nicht so wichtig
// mit dieser Variante kann ich die Benennung der Dateien manuell beeinflussen

import express from "express";
import multer from "multer";
import fs from "fs";

import url from "url";
import path from "path";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

// Server erstellen
const app = express();

// logging middleware
app.use((req, res, next) => {
  console.log("new request:", req.method, req.url);
  next();
});

// Endpunkt, um Seite anzuzeigen
app.get("/", (req, res) => res.send("It works"));

// Multer
// Variable für multer-middleware
const upload = multer();

// Endpunkt definieren, um eine Datei hochzuladen
// bei multer den beim request angegebenen fieldname eintragen, hier attachment
// dann folgt, was passieren soll beim Upload
app.post("/api/files/upload", upload.single("attachment"), (req, res) => {
  console.log(req.body); //--> [Object: null prototype] { name: 'Tobi', email: 'tobi@gmail.com' }
  console.log(req.file); //-->  {
  //-                            fieldname: 'attachment',
  //-                            originalname: 'react-1-logo-png-transparent.png',
  //-                            encoding: '7bit',
  //-                            mimetype: 'image/png',
  //-                            buffer: <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 00 fa 00 00 00 fa 08 06 00 00 00 88 ec 5a 3d 00 00 00 09 70 48 59 73 00 00 09 cb 00 00 09 cb 01 ... 26351 more bytes>,
  //-                            size: 26401
  //-                            }

  // * Dateinamen festlegen:
  // damit User nicht gegenseitig Dateien überschreiben können, brauchen wir jeweils individuelle Namen
  // deshalb hier jetzt das aktuelle Datum und der Original-Filename
  const fileName = Date.now() + "_" + req.file.originalname;
  const filePath = __dirname + "/uploads/" + fileName;

  // * Datei schreiben
  // dafür brauchen wir: Dateipfad und die Bufferdaten
  fs.writeFile(filePath, req.file.buffer, (err) => {
    // bei Misserfolg, gib Fehlermeldung zurück
    if (err) return res.status(500).json({ message: "Could not upload file" });

    // bei Erfolg, gib Dateinamen als Rückmeldung zurück
    res.json({ fileName });
  });
});

// Port erstellen und listening
const PORT = 3003;
app.listen(PORT, () => console.log("Server ready at port", PORT));
