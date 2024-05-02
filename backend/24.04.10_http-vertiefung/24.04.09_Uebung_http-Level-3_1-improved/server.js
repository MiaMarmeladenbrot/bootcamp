const http = require("http");
const fs = require("fs");

// import Funktion readFile aus filesystem
const { readFile } = require("./filesystem.js");

// Error-Page synchron auslesen, um gleich als erstes einen Fehler-Check zu machen, bevor Server überhaupt starten kann
const errorPage = fs.readFileSync("./assets/pages/404.html");

// neuen Server erstellen
const server = http.createServer((request, response) => {
  console.log("new request", request.method, request.url);

  // optional Abfragen, ob Request-Methode GET ist; falls nicht, gleich alles abbrechen
  if (request.method !== "GET") {
    response.end(errorPage);
    return;
  }

  // hier startet das Routing
  // als erstes eine Variable für den Dateipfad festlegen:
  const filePath =
    request.url === "/" || request.url === "/home"
      ? "./assets/pages/home.html"
      : `./assets${request.url}`;
  // --> /assets/pages/about.html
  // --> /assets/css/about.css
  // --> /assets/images/budgeting.png

  // dann Funktion aufrufen mit der Variable für den Dateipfad
  readFile(filePath)
    // Daten auslesen und ausschreiben
    .then((dataBuffer) => {
      response.write(dataBuffer);
      response.end();
    })
    // Error Handling, falls Fehler außer 404 (um Benachrichtigung zu favicon uä zu umgehen)
    .catch((err) => {
      const FILE_NOT_FOUND = "ENOENT";

      if (err.code === FILE_NOT_FOUND) {
        response.writeHead(404);
      } else {
        console.log(err);
        response.writeHead(500);
      }
      response.end(errorPage);
    });
});

// Port festlegen
const PORT = 1818;
server.listen(PORT, () => console.log("server ready at port ", PORT));
