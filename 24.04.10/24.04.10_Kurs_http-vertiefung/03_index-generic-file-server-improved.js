// ! Vereinfachte Schreibweise für generic files

const fs = require("fs");
const http = require("http");

const { readFile } = require("./filesystem.js");

// In 02_index-generic-file-server.js haben wir die Error-Page als Teil der Error Handling Funktion ausgegeben und falls es dabei ein Problem gab, auf einen internen Server verwiesen
// Wir können dieses Vorgehen aber auch gleich zu Beginn, noch vor Ausführen des Servers, nutzen, um zu checken, ob unser Server überhaupt funktioniert
// Dafür laden wir die Error-Page synchron
// synchron bedeutet: bis Error-Page nicht geladen ist, startet der Server auch nicht --> das Laden der Error-Page blockt den Code
// das heißt auch, wenn das Laden scheitern sollte, startet der Server gar nicht (bis die Ursache gefixed ist - zb Rechtevergabe)
// Vorteile:
// durch das einmalige Laden der Error-Page ersparen wir uns das erneute Laden bei jeder Abfrage
// und es sorgt für weniger Code (siehe Kontrast in index-generic-file-server.js)
const errorPage = fs.readFileSync("./public/pages/error.html");

const server = http.createServer((request, response) => {
  console.log("new request", request.method, request.url);

  // optional: NUR GET Abfragen erlauben
  if (request.method !== "GET") {
    response.end(errorPage);
    return;
  }

  const filePath =
    request.url === "/" || request.url === "/home"
      ? "./public/pages/home.html"
      : `./public${request.url}`; // "./public" + request.url;

  readFile(filePath)
    .then((dataBuffer) => {
      // filePath war eine valide Datei
      response.write(dataBuffer);
      response.end();
    })
    // * mit der Abfrage der Error-Page noch vorm Laden des Servers können wir uns jetzt auch die Funktion des Error-Handlings (sendErrorFile()) sparen, denn die Frage, ob die Error-Page funktioniert, stellen wir in diesem Code gleich zu Beginn vor allem anderen
    // so können wir hier im catch() gleich zur response der Error-Page gehen, sollte ein Fehler vorliegen
    .catch((err) => {
      console.log(err);
      // TODO: status code 404 Not found
      response.end(errorPage);
    });
});

const PORT = 3003;
server.listen(PORT, () => console.log("Server ready at", PORT));
