const http = require("http");
const { readFile } = require("./filesystem.js");

// neuen Server erstellen
const server = http.createServer((request, response) => {
  if (
    request.method === "GET" &&
    (request.url === "/" || request.url === "/home")
  ) {
    // Home Page auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/home.html")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (request.method === "GET" && request.url === "/about") {
    // About Page auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/about.html")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (request.method === "GET" && request.url === "/contact") {
    // Contact Page auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/contact.html")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (request.method === "GET" && request.url === "/faq") {
    // FAQ Page auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/faq.html")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else {
    // Fehlermeldung-Page auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/404.html")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  }
});

// Port festlegen
const PORT = 1818;
server.listen(PORT, () => console.log("server ready at port ", PORT));
