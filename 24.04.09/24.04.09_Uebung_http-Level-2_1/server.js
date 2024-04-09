const http = require("http");
const { readFile } = require("./filesystem.js");

// neuen Server erstellen
const server = http.createServer((request, response) => {
  if (
    request.method === "GET" &&
    (request.url === "/" || request.url === "/home")
  ) {
    // Home Page auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/pages/home.html")
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
    readFile("./assets/pages/about.html")
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
    readFile("./assets/pages/contact.html")
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
    readFile("./assets/pages/faq.html")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (request.method === "GET" && request.url === "/styles") {
    // Styles/CSS auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/css/styles.css")
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
    readFile("./assets/pages/404.html")
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
