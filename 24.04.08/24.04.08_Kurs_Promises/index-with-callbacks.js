const fs = require("fs");

//* Funktion für read JSON file
function readJsonFile(filePath, callbackFunction) {
  fs.readFile(filePath, (err, dataBuffer) => {
    if (err) return console.log(err);
    const jsonString = String(dataBuffer);
    const jsObj = JSON.parse(jsonString);
    callbackFunction(jsObj);
  });
}

//* Funktion für write JSON File
function writeJsonFile(filePath, jsObj, callbackFunction) {
  // JSON in string umwandeln, dait wir damit weiterarbeiten können
  const jsonString = JSON.stringify(jsObj);

  // Funktion in Funktion mit writeFile
  fs.writeFile(filePath, jsonString, (err) => {
    if (err) return console.log(err);

    // Aufruf des Callbacks, auch mit leerem Inhalt, bedeutet der Funktion, dass alles fertig ist
    callbackFunction();
  });
}

// ! alte Schreibweise mit verschachtelten Funktionsaufrufen
//* Funktionsaufruf für read JSON File
readJsonFile("./data.json", function callbackFunction(result) {
  // Funktion soll nur ausgeführt werden, wenn die Daten ein array sind
  if (!Array.isArray(result))
    return console.log("result not a js array, will abort");

  // array nach Zahlen filtern und nur die Zahlen in neuem array speichern
  const onlyNumbersArray = result.filter(
    (element) => typeof element === "number"
  );

  //* Funktionsaufruf für write JSON file in read JSON File Funktion
  // neues Array in die gleiche Datei schreiben
  writeJsonFile("./data.json", onlyNumbersArray, () => {
    console.log("done");
  });
});
