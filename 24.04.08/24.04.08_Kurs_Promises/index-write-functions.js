const fs = require("fs");
const { json } = require("stream/consumers");

// externe Datei auslesen und umwandeln
fs.readFile("./data.js", (err, dataBuffer) => {
  if (err) return console.log(err);

  // <Buffer 5b 31 2c 20 32 2c 20 33 2c 20 7b 20 68 65 6c........
  //   console.log(dataBuffer);

  // toString() / String() / stringify() / utf-8 als Para mitgeben => JSON String "[1, 2, 3, {"hello": "world"}]"
  const jsonString = String(dataBuffer);
  //   console.log(jsonString);

  //parsen => string in JS Objekt Array umwandeln
  const jsObj = JSON.parse(jsonString);
  //   console.log(jsObj);

  // Buffer umwandeln in JS Array
});

// json => parse => jsObj
// jsObj => stringify => json
// Buffer (Array aus Zahlen) => Encoding Format => string
// string => Encoding Format => Buffer

// Funktion, die mir die Werte des json-Dokuments ausgibt
// para1 = path (welche Daten)
// para2 = callback Function für späteren Aufruf
function readJsonFile(filePath, callbackFunction) {
  // readFile liest DAtei aus und in seiner Callback-Funktion ist festgelegt, was nach dem Auslesen mit den Daten passieren soll
  fs.readFile(filePath, (err, dataBuffer) => {
    if (err) return console.log(err);
    // JSON abspeichern
    const jsonString = String(dataBuffer);
    const jsObj = JSON.parse(jsonString);

    // erste Callback Funktion mit den gespeicherten Daten aufrufen und die Werte returnen, damit wir auch außerhalb der Funktion damit weiterarbeiten können
    callbackFunction(jsObj);
  });
}

// Aufruf der Funktion mit Dateipfad und Callback Function mit Ergebnis
readJsonFile("./data.json", (jsObj) => {
  console.log(jsObj);
});

// Funktion macht so zwar Aufruf mehrerer Dateien leichter, aber trotzdem immer noch zu verschachtelt
// Callback Hell!
readJsonFile("./data.json", (jsObj) => {
  readJsonFile("./data.json", (jsObj) => {
    readJsonFile("./data.json", (jsObj) => {
      console.log(jsObj);
    });
  });
});
