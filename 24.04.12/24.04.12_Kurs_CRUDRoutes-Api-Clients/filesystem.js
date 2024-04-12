import fs from "fs";
import url from "url";
import path from "path";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

//* Funktionen zum Lesen / GET, POST, PATCH, DELETE
// Funktion, um json-File zu lesen und Daten als Promise zurückzugeben, um damit weiterzuarbeiten
export function readJsonFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, buff) => {
      if (err) return reject(err);

      const jsObj = JSON.parse(buff.toString());
      resolve(jsObj);
    });
  });
}

// Funktion, um die vorherige Funktion aufzurufen und den transactions-Pfad einzulesen
// die rufen wir in index.js auf, um die Daten von transactions zu kriegen
export function readTransactions() {
  return readJsonFile(__dirname + "/data/transactions.json");
}

// * Funktionen zum Anlegen und Überschreiben von Daten / POST, PATCH, DELETE
export function writeJsonFile(path, jsObj) {
  return new Promise((resolve, reject) => {
    // js-Objekt in String umwandeln
    const jsonString = JSON.stringify(jsObj);

    fs.writeFile(path, jsonString, (err) => {
      if (err) return reject(err); // Fehlermeldung
      resolve(jsObj); // fertig, gibt zum Überprüfen das neue Objekt zurück
    });
  });
}

export function writeTransactions(transactionsArray) {
  return writeJsonFile(
    __dirname + "/data/transactions.json",
    transactionsArray
  );
}
