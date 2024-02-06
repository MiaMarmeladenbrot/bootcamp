// - In dieser Übung geht es um [Math.random()](https://www.w3schools.com/jsref/jsref%5Frandom.asp) und [Math.floor()](https://www.w3schools.com/jsref/jsref%5Ffloor.asp).

// - Deklariere die Variable randomNum und und gebe darin eine zufällige Nummer aus.
const randomNum = Math.random();
console.log(randomNum);

// - Deklariere die Variable randomNum1\_10 und gebe darin eine zufällige Nummer zwischen 1 und 10 aus.
const randomNum110 = Math.ceil(Math.random() * 10);
console.log(randomNum110);

// - Deklariere die Variable randomNum1\_100 und gebe darin eine zufällige Nummer zwischen 1 und 100 aus.
const randomNum1100 = Math.ceil(Math.random() * 100);
console.log(randomNum1100);
