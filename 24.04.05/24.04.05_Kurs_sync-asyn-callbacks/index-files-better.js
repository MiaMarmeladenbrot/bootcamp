// module Schreibweise: import fs from "fs";
const fs = require("fs");

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
