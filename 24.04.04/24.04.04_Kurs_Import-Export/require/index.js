// ! Alte Schreibweise / Standard
// Importieren von Daten:
const person = require("./data.js");

// kann jetzt auch hier darauf zugreifen:
console.log(person);

// Bei mehreren zu exportierenden Daten werden beide Variablen in einem Objekt aufgerufen:
//* const inputValue = require("./data.js");
// oder wir können keys vergeben im export und die keys dann einzeln aufrufen:
//* const { beate } = require("./data.js");
