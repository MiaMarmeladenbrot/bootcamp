// - Lernziel: Verwendung der JavaScript-Methode map().
// - Schreibe eine Function, die mit Hilfe von map() ein Array aus Temperaturen von Fahrenheit in Celsius umwandelt.
// - Verwende die [mathematische Formel](https://www.metric-conversions.org/de/temperatur/fahrenheit-in-celsius.htm) celsius = (℉ - 32) / 1.8 zur Umrechnung.
// - Verwende das Array aus dem Code-Snippet.
// - Überprüfe das Ergebnis in der Konsole.

// celsius = (℉ - 32) / 1.8

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
console.table(fahrenheit);

// ! Allgemeine Funktion:
const calculate = (array) => {
  return array.map((data) => Math.round((data - 32) / 1.8));
};

// ! Funktionsaufruf mit Werten von Fahrenheit:
const celsius = calculate(fahrenheit);
console.table(celsius);

// Vorabüberlegungen ohne allgemeine Funktion:
// const celsius = fahrenheit.map((grad) => ((grad - 32) / 1.8).toFixed(0));
// console.table(celsius);

// const celsius1 = fahrenheit.map((grad) => Math.round((grad - 32) / 1.8));
// console.table(celsius1);
