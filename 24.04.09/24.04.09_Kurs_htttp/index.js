// ! neuen Server erstellen

const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  // hier liegt das Gehirn des Servers
  // request-listener des servers, auch request handler genannt
  // verarbeitet die requests
  // request = incoming message
  // response = tool, um die response zu erstellen
  console.log("new request:", request.method, request.url);

  //   // Antwort festlegen
  //   response.write("<h1>Willkommen</h1>");
  //   // Beenden der Response
  //   response.end();

  //* HTML-Pages als response ausgeben ohne externes Promise:
  //   hier fängt Routing an: url/route matchen mit der richtigen Aufgabe
  if (
    (request.method === "GET" && request.url === "/") ||
    request.url === "/home"
  ) {
    fs.readFile("./pages/home.html", (err, dataBuffer) => {
      if (err) return response.end("Error");
      response.write(dataBuffer);
      response.end();
    });
  } else if (request.method === "GET" && request.url === "/about") {
    fs.readFile("./pages/about.html", (err, dataBuffer) => {
      if (err) return response.end("Error");
      response.write(dataBuffer);
      response.end();
    });
  } else {
    fs.readFile("./pages/error.html", (err, dataBuffer) => {
      if (err) return response.end("Error");
      response.write(dataBuffer);
      response.end();
    });
  }

  // * HTML-Pages als response ausgeben mit externem Promise:
});

const PORT = 1818; // frei wählbar, ca. 65k möglich, gibt einige wenige reservierte Ports; falls ich belegten Port nutzen will, kriege ich Fehlermeldung
server.listen(PORT, () => console.log("server ready at port", PORT)); // das Ohr des Servers
