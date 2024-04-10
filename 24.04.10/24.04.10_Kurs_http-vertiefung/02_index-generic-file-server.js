// ! Generic Files: Pfadnamen dynamisch machen

const { readFile } = require("fs");
const http = require("http");

const server = http.createServer((request, response) => {
  console.log("new request", request.method, request.url);

  // statt der Funktion sendFile() in 01_index-sendFile.js muss es noch eine einfachere Möglichkeit geben
  // denn auch dort hatten wir noch wiederholende Bestandteile, nämlich die Pfadnamen
  // deshalb muss es eine noch einfachere Schreibweise geben
  //// request.url example: /css/styles.css,,, /images/we.jpeg, / ==> /pages/home.html
  //// /               ====> ./public/pages/home.html
  //// /css/styles.css ====> ./public/css/styles.css
  //// /images/we.jpeg ====> ./public/images/we.jpeg
  //// /aosduihaiosd   ====> ./public/aosduihaiosd

  // optional: NUR GET Abfragen erlauben
  if (request.method !== "GET") {
    response.end(errorPage);
    return; // request-handler funktion mit einem return beenden (response.end() senden nur, es beendet die funktion nicht!)
  }

  // Variable erstellen für den Pfad, der immer in den public-Ordner und dann zur jeweils übergebenen Datei navigieren soll
  const filePath =
    request.url === "/" ? "./public/pages/home.html" : `./public${request.url}`; // "./public" + request.url;

  // jetzt müssen wir die Funktion nur noch ein einziges Mal aufrufen und sie schaut nach, ob hinter dem gesuchten Pfad überhaupt eine Datei liegt und liest diese dann aus
  readFile(filePath)
    .then((dataBuffer) => {
      // filePath war eine valide Datei => sie wird als response zurückgegeben
      response.write(dataBuffer);
      response.end();
    })
    // filePath war keine valide Datei => wir rufen die Funktion fürs Error Handling auf
    .catch(() => sendErrorFile());

  // Funktion fürs Error Handling, falls filePath keine valide Datei ist
  function sendErrorFile() {
    // Error-Page soll ausgelesen und als response zurückgegeben werden
    readFile("./public/pages/error.html")
      .then((errorPageBuffer) => response.end(errorPageBuffer))

      // falls Error-Page aus irgendeinem Grund nicht gelesen werden kann, soll der interne Server Error zurückgegben werden
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error!");
      });
  }
});

const PORT = 3003;
server.listen(PORT, () => console.log("Server ready at", PORT));
