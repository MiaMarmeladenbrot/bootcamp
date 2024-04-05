// - Das Ziel dieser Übung ist es, den Inhalt einer JSON Datei in eine .txt-Datei umzuwandeln.
// - Erstelle dir eine JSON Datei mit dem vorgegebenen Code (siehe Code - Snippet)
// - Importiere die json-Datei in deiner index.js und nutze das File System, um die JSON Datei in eine neue .txt-Datei zu schreiben.
// - Deine txt sollte so aussehen![txt](https://uploads-ssl.webflow.com/62d9141584e7b750edcafa6a/64d20928d5be49b387542ae3_Node-Filesystem-Level-2_1.png)

const data = require("./data.json");
const fs = require("fs");

// * nur die Daten in einer txt speichern
// const jsonString = JSON.stringify(json, null, "...");
// console.log(jsonString);

// fs.writeFile("./data.txt", jsonString, (err) => {
//   if (err) return console.log(err);
//   console.log("txt file written");
// });

// * Daten formatiert in txt speichern
// * nur die values aus dem json mappen
// data.map((item) => {
//   console.log(item.title);
// });

// * json mappen und values formatiert in txt speichern
data.map((item) => {
  fs.appendFile(
    "./data.txt",
    `${item.id} - ${item.title} \n ${item.description} \n \n`,
    (err) => {
      if (err) return console.log(err);
    }
  );
});
