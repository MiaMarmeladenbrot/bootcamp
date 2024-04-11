// ! Middleware als static file server & "fallback-handler"

import express from "express";

// die folgenden Importe, damit Code unter __dirname funktioniert
import url from "url";
import path from "path";

// diese Variable brauchen wir, damit wir "/" später extra definieren können
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const app = express();

// logging-middleware aus step3
app.use((req, res, next) => {
  console.log("new request", req.method, req.url);
  next();
});

// static file middleware
// funktioniert genau wie der generic file server vom 10.04.2024
// aber statt dass wir einen Haufen Code schreiben müssen, können wir den integrierten Code von express nutzen, indem wir mit express.static() darauf zugreifen
// der folgende static file server veröffentlicht zum Beispiel alle verfügbaren Dateien aus dem public-Ordner
app.use(express.static("public"));

// Ausnahme: / und /home
// Slash allein würde sich auf den public-Ordner beziehen, also kann darunter keine Datei gefunden werden und das Aufrufen von / führt zu einem Fehler
// da das aber idR unsere Home-Page ist, legen wir separat fest, was beim Anfragen von GET / passieren soll
// nämlich, dass die Home-Page angezeigt werden soll
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/pages/home.html");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/pages/home.html");
});

// "fallback-handler"
// da wir nicht einfach nur die generische Fehlermeldung von express anzeigen lassen wollen, nutzen wir middleware als workaround
// ganz am Ende des Codes definieren wir, was wir mit Requests machen wollen, für die keine entsprechenden Endpoints gefunden wurden
// verwendet hier kein next(), da danach kein weiterer Code kommt, an den es übergeben kann und soll
app.use((_, res) => {
  res
    .status(404)
    .send(
      "<h1>404 Not found</h1><h3>Ooops, no endpoint matched your request</h3>"
    );
});

const PORT = 3003;
app.listen(PORT, () => console.log("Server ready at", PORT));
