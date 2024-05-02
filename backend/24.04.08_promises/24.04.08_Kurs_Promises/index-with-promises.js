// ! Entschachtelung mit Promises
const fs = require("fs");

//* Funktion für read JSON file
function readJsonFile(filePath) {
  // neues Promise anlegen
  return new Promise((resolve, reject) => {
    // async code:
    fs.readFile(filePath, (err, dataBuffer) => {
      if (err) return reject(err); // Promise could not be fulfilled; diese Info kommt im catch() wieder raus

      const jsonString = String(dataBuffer);
      const jsObj = JSON.parse(jsonString);
      resolve(jsObj); // Promise konnte erfüllt werden, diese Info kommt im then() wieder raus .then((jsObj) => ...)
    });
  });
}

//* Funktion für write JSON File
function writeJsonFile(filePath, jsObj) {
  return new Promise((resolve, reject) => {
    // JSON in string umwandeln, dait wir damit weiterarbeiten können
    const jsonString = JSON.stringify(jsObj);
    fs.writeFile(filePath, jsonString, (err) => {
      if (err) return reject(err); // msus nicht zwingend was übergeben, aber sinnvoll

      resolve(); // muss nicht zwingend etwas übergeben
    });
  });
}

// * Funktionsaufruf mit .then
// Vorteil: thens und der eine catch können hintereinander aufgerufen werden, dadurch keine Verschachtelungen mehr
readJsonFile("data.json")
  .then((result) => {
    // Fehler-Handling:
    if (!Array.isArray(result))
      // statt return hier throw verwenden; mit return würde er sonst zum nächsten .then springen, er soll aber bei Fehler direkt zum .catch springen
      throw console.log("file has no array, will abort");

    // Daten-Handling; wenn alles läuft, geht er von hier dann weiter zum nächsten then und weiter zum nächsten then
    const numbersArray = result.filter(
      (element) => typeof element === "number"
    );
    return numbersArray;
    //  --> sollte man das öfter brauchen, könnte man den Detail auch in einer Funktion auslagern und hätte dann auch hier ein einzeiliges .then
  })
  .then((numbersArray) => writeJsonFile("./data.json", numbersArray))
  .then(() => console.log("done"))
  .catch((err) => console.log("Fehler:", err));
