// ! Error Handling mit status.codes

const fs = require("fs");
const http = require("http");

const { readFile } = require("./filesystem.js");
const errorPage = fs.readFileSync("./public/pages/error.html");

const server = http.createServer((request, response) => {
  console.log("new request", request.method, request.url);

  if (request.method !== "GET") {
    response.end(errorPage);
    return;
  }

  const filePath =
    request.url === "/" || request.url === "/home"
      ? "./public/pages/home.html"
      : `./public${request.url}`;

  readFile(filePath)
    .then((dataBuffer) => {
      response.write(dataBuffer);
      response.end();
    })
    // err handling
    .catch((err) => {
      // best practice: Variable klar benennen mit Inhalt des Fehlers, weil sonst später nicht sofort ersichtlich ist, was sich hinter dem Fehlercode verbirgt:
      const FILE_NOT_FOUND = "ENOENT";

      // Abfrage, damit nicht jeder ENOENT-Fehler geloggt wird, wir wollen nur die anderen, idR ungewöhnlicheren Fehler loggen (sonst kriegen wir auch ständig Fehlermeldung für favicon uä)
      if (err.code === FILE_NOT_FOUND) {
        response.writeHead(404); // 404 status code steht für 'Not found'
      } else {
        console.log(err); // hier loggen wir nur die "besonderen Fehler" (404 kommt nämlich sehr oft vor)
        response.writeHead(500); // an den Client geben wir 500 = Internal server error zurück
      }
      response.end(errorPage);
    });
});

const PORT = 3003;
server.listen(PORT, () => console.log("Server ready at", PORT));
