// - Erstelle eine Datei, in der deine Funktionen gespeichert werden sollen.Diese sollen am Ende exportiert werden.
// - Erstelle eine weitere Datei, in der deine Daten gespeichert werden sollen.Importiere diese Funktionen und Daten in deiner index.js.
// - Alle Funktionen bekommen ein Array übergeben.

// Import of arrays
const importData = require("./data.js");
// console.log(importData); //--> läuft

// Import of functions
const importFunctions = require("./function.js");
// console.log(importFunctions); //--> läuft

// * array func
// First element of array
const firstElementName = importFunctions.firstElement(importData.names);
const firstElementNumbers = importFunctions.firstElement(importData.numbers);
// console.log(firstElementName, firstElementNumbers);

// all except last element of array
const exceptLastElementName = importFunctions.exceptLastElement(
  importData.names
);
const exceptLastElementNumbers = importFunctions.exceptLastElement(
  importData.numbers
);
// console.log(exceptLastElementName, exceptLastElementNumbers);

// only last element of array
const lastElementName = importFunctions.lastElement(importData.names);
const lastElementNumbers = importFunctions.lastElement(importData.numbers);
// console.log(lastElementName, lastElementNumbers);

// all but first element of array
const exceptFirstElementName = importFunctions.exceptFirstElement(
  importData.names
);
const exceptFirstElementNumbers = importFunctions.exceptFirstElement(
  importData.numbers
);
// console.log(exceptFirstElementName, exceptFirstElementNumbers);

// remove all specific items from array
const removeElementName = importFunctions.removeElement(
  importData.names,
  "Ahmed"
);
const removeElementNumbers = importFunctions.removeElement(
  importData.numbers,
  4
);
// console.log(removeElementName, removeElementNumbers);

// remove double values
const removeDoublesNumbers = importFunctions.removeDoubles(importData.numbers);
// console.log(removeDoublesNumbers);

// add all elements of numbers array
const sumNumbers = importFunctions.sumArray(importData.numbers);
console.log(sumNumbers);

// * non array funcs
// show random number
const randomNumber = importFunctions.randomNum(2, 4);
// console.log(randomNumber);

// change first letter to upper case
const firstLetterUp = importFunctions.firstLetter("dog");
// console.log(firstLetterUp);

// change string to upper case
const uppercaseString = importFunctions.uppercase("mountain");
// console.log(uppercaseString);

// check if last letter is same
const checkLastLetter = importFunctions.checkLetters("Test", "t");
// const checkLastLetter = importFunctions.checkLetters("Test", "x");
// console.log(checkLastLetter);
