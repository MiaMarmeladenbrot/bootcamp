// express importieren
import express from "express";

// Funktion readFile() aus filesystem.js importieren, damit wir in support-middleware darauf zugreifen können
import { readFile } from "./filesystem.js";

// die folgenden Importe, damit Code unter __dirname funktioniert
import url from "url";
import path from "path";
import { write } from "fs";

// diese Variable notwendig, damit "/" später extra definiert werden kann
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

//* Server mit express() erstellen
const app = express();

//* logging middleware
// bevor irgendetwas anderes passiert, einmal alle requests in der Konsole loggen lassen und dann weitergehen zum nächsten Teil des Codes
app.use((req, _, next) => {
  console.log("new request: ", req.method, req.url);
  next();
});

//* static file middleware
// static file server, die die Dateien aus public-Ordner veröffentlicht
app.use(express.static("public"));

//* support short routes middleware
app.use((req, res, next) => {
  const filePath = __dirname + "/public/pages" + req.url + ".html";

  readFile(filePath)
    .then((dataBuffer) => {
      res.write(dataBuffer);
      res.end();
    })
    .catch(() => next());
});

//* Ausnahme für / und /home
// die beiden Pfade werden hier einmal extra zugewiesen, damit sie auch funktionieren
app.get("/", (_, res) => {
  res.sendFile(__dirname + "/public/pages/home.html");
});

app.get("/home", (_, res) => {
  res.sendFile(__dirname + "/public/pages/home.html");
});

//* "Fallback-Handler"
// Fehlermeldung für den Fall, dass nichts gefunden wird
app.use((_, res) => {
  res.status(404);
  res.sendFile(__dirname + "/public/pages/error.html");
});

//* Port und Listener erstellen
const PORT = 3003;
app.listen(PORT, () => console.log("Server ready at", PORT));
