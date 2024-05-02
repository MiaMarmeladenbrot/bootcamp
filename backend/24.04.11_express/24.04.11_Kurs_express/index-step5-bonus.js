import express from "express";
import url from "url";
import path from "path";
import { readFile } from "./filesystem.js";

// mit dem Folgenden greifen wir auf directory zu, in dem public liegt, also auf die Roots: /Users/user/Desktop/Bootcamp/24.04.11/24.04.11_Kurs_express
// das brauchen wir, um weiter unten auch /home oder /about auslesen zu können
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
console.log(__dirname);

const app = express();

// logging-middleware
app.use((req, res, next) => {
  console.log("new request", req.method, req.url);
  next();
});

// static file middleware
app.use(express.static("public"));

//* support-/pageName-routes-middleware
// Problem in step4: Pfade wie /about oder /home führen zu Fehlermeldungen, wir müssen dort immer den kompletten korrekten Pfad schreiben, um die Dateiinhalte zu bekommen
// Lösung: eine Funktion, die die request.url dynmaisch in den Pages/HTML-Pfad einbaut und die Inhalte anzeigt bzw. bei Nicht-Finden des Pfads weitergibt an den nächsten Code-Snippet
//    /about --> /pages/about.html (CHECK)
//    /home --> /pages/home.html (CHECK)
//    /hugo --> /pages/hugo.html (X -> next)
app.use((req, res, next) => {
  // Dateipfad definieren mit variabler URL in der Mitte
  const filePath = __dirname + "/public/pages" + req.url + ".html";

  // Dateipfad auslesen
  readFile(filePath)
    // Erfolg: Daten schreiben
    .then((dataBuffer) => {
      res.write(dataBuffer);
      res.end();
    })

    // Misserfolg: next, um im Code weiterzugehen und andere endpoints zu matchen, sollten die angefragten bisher nicht gefunden worden sein
    .catch(() => next());
});

// Ausnahme für / = home.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/pages/home.html");
});

// "fallback-handler" for endpoints that do not match
app.use((_, res) => {
  res
    .status(404)
    .send(
      "<h1>404 Not found</h1><h3>Ooops, no endpoint matched your request</h3>"
    );
});

const PORT = 3003;
app.listen(PORT, () => console.log("Server ready at", PORT));
