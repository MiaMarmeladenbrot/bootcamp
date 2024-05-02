// module Schreibweise: import fs from "fs";
const fs = require("fs");

// * readFileSync()
// synchrones Ein- und Auslesen von Daten
// gibt einen encodeden return-Wert mit den Daten, die in der Datei sind
const data = fs.readFileSync("./hallo.txt");
// console.log(data); //--> <Buffer 48 61 6c 6c 6f 20 46 72 65 75 6e 64 65 21>
// ASCII Tabelle: hexadezimal Präsentation der bytes

// * readFile()
// asynchrones Ein- und Auslesen von Daten
fs.readFile("./hallo.txt", (err, dataHallo) => {
  if (err) {
    // handle error
    console.log(err); // --> undefined, aber falls Fehler auftritt, wird er hier angezeigt
  } else {
    // work with data
    console.log(dataHallo); // --> <Buffer 48 61 6c 6c 6f 20 46 72 65 75 6e 64 65 21>
    const dataString = dataHallo.toString();
    console.log(dataString); // --> Hallo Freunde!

    // zweite Datei, die eingelesen werden soll und zwar immer, nachdem die erste eingelesen wurde
    fs.readFile("./andereDatei.txt", (err, dataOther) => {
      if (err) {
        // handle error
        console.log(err); // --> undefined, aber falls Fehler auftritt, wird er hier angezeigt
      } else {
        // work with data
        console.log(dataOther); // --> <Buffer 48 61 6c 6c 6f 20 46 72 65 75 6e 64 65 21>
        const dataString = dataOther.toString();
        console.log(dataString); // --> Hallo Freunde!

        console.log("done. total bytes:", dataHallo.length + dataOther.length);
      }
    });
  }
});

// * writeFile()
const text =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est";
fs.writeFile("./textOutput", text, (err) => {
  if (err) return console.log(err);
  console.log("done writing");
});
// noParams callback, hat nur einen Parameter, err
