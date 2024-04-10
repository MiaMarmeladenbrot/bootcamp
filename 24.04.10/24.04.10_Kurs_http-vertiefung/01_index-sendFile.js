// ! readFile-Aufruf und Senden der Daten in eine Funktion auslagern

const http = require("http");
const { readFile } = require("./filesystem.js");

const server = http.createServer((request, response) => {
  console.log("new request:", request.method, request.url);

  // in unserem vorherigen Beispiel vom 09.04.2024 haben sich in der wiederholenden Langschreibweise auch die Pfade immer wieder wiederholt
  // deshalb muss es eine einfachere Schreibweise geben
  // 1. Idee: eine Funktion erstellen, in die wir die sich wiederholenden Teile auslagern
  // Funktion für readFile Aufruf und senden + error handling:
  const sendFile = (filePath) => {
    readFile(filePath)
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error!");
      });
  };

  // dann müssen wir im Routing nur noch die Funktion aufrufen
  // so haben wir bereits weniger und vor allem übersichtlicheren Code
  // aber es ginge noch einfacher - siehe 02_index-generic-file-server.js
  if (
    request.method === "GET" &&
    (request.url === "/" || request.url === "/home")
  ) {
    sendFile("./public/pages/home.html");
  } else if (request.method === "GET" && request.url === "/about") {
    sendFile("./public/pages/about.html");
  } else if (request.method === "GET" && request.url === "/diestyles") {
    sendFile("./public/css/styles.css");
  } else if (request.method === "GET" && request.url === "/images/we.jpeg") {
    sendFile("./public/images/we.jpeg");
  } else if (request.method === "GET" && request.url === "/endpunkt-route") {
    // besser skalierbar, weil nur einfache funktion zum aufrufen
    sendFile("./public/images/file-route.jpeg");
  } else {
    sendFile("./public/pages/error.html");
  }
});

const PORT = 3003;
server.listen(PORT, () => console.log("server ready at port", PORT));
