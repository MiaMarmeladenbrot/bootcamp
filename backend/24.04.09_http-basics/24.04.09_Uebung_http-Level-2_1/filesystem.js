const fs = require("fs");

// Funktion, die ein Promise zurückgibt, mit dem wir den Pfad auslesen
function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, dataBuffer) => {
      if (err) return reject(err);
      resolve(dataBuffer);
    });
  });
}

// Funktion exportieren, um sie in server.js aufzurufen
module.exports = { readFile };
