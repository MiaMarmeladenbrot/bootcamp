// Import data: cars- and numbers-arrays (together as one object)
const importData = require("./data.js");
console.log(importData);

// Import function:
const importSortFunc = require("./function.js");
console.log(importSortFunc);

// Sort numbers
// Aufruf der Funktionsdatei, dann Aufruf der Funktion, Übergabe des Nummernarray als Parameter
const sortNumbers = importSortFunc.sortFunc(importData.arrayNumbers);
console.log(sortNumbers);

// Sort cars
// Aufruf der Funktionsdatei, dann Aufruf der Funktion, Übergabe des Cararrays als Parameter
const sortCars = importSortFunc.sortFunc(importData.arrayCars);
console.log(sortCars);
