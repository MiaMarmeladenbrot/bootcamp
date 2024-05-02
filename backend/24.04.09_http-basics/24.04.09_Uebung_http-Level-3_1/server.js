const http = require("http");
const { readFile } = require("./filesystem.js");

// neuen Server erstellen
const server = http.createServer((request, response) => {
  if (
    request.method === "GET" &&
    (request.url === "/" || request.url === "/home")
  ) {
    // * Home Page auslesen mit Funktionsaufruf aus filesystem.js
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
    // * About Page auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/pages/about.html")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (request.method === "GET" && request.url === "/work") {
    // * Work Page auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/pages/work.html")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (request.method === "GET" && request.url === "/categories") {
    // * Work Page auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/pages/categories.html")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (request.method === "GET" && request.url === "/testimony") {
    // * Testimony Page auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/pages/testimony.html")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (request.method === "GET" && request.url === "/signin") {
    // * Sign-up Page auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/pages/signin.html")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (request.method === "GET" && request.url === "/styles") {
    // - allgemeine Styles/CSS auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/css/styles.css")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (request.method === "GET" && request.url === "/home.css") {
    // - Styles für Home auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/css/home.css")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (request.method === "GET" && request.url === "/about.css") {
    // - Styles für About auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/css/about.css")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (request.method === "GET" && request.url === "/work.css") {
    // - Styles für Work auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/css/work.css")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (request.method === "GET" && request.url === "/categories.css") {
    // - Styles für Categories auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/css/categories.css")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (request.method === "GET" && request.url === "/testimony.css") {
    // - Styles für Testimony auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/css/testimony.css")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (
    request.method === "GET" &&
    request.url === "/images/workplace.png"
  ) {
    // ? Footer-Workplace-PNG auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/images/workplace.png")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (request.method === "GET" && request.url === "/images/table.png") {
    // ? Logo-PNG auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/images/table.png")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (request.method === "GET" && request.url === "/images/food.png") {
    // ? About-Food-PNG auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/images/food.png")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (
    request.method === "GET" &&
    request.url === "/images/loeffel.png"
  ) {
    // ? About-Löffel-PNG auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/images/loeffel.png")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (
    request.method === "GET" &&
    request.url === "/images/choosedesign.png"
  ) {
    // ? Work-Choose-design-PNG auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/images/choosedesign.png")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (
    request.method === "GET" &&
    request.url === "/images/areameasuring.png"
  ) {
    // ? Work-Area-measuring-PNG auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/images/areameasuring.png")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (
    request.method === "GET" &&
    request.url === "/images/budgeting.png"
  ) {
    // ? Work-Budgeting-PNG auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/images/budgeting.png")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (
    request.method === "GET" &&
    request.url === "/images/production.png"
  ) {
    // ? Work-Production-PNG auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/images/production.png")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error");
      });
  } else if (
    request.method === "GET" &&
    request.url === "/font/Nunito-VariableFont_wght.ttf"
  ) {
    // : Schrift Nunito auslesen mit Funktionsaufruf aus filesystem.js
    readFile("./assets/font/Nunito-VariableFont_wght.ttf")
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
