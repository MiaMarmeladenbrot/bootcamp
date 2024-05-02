// - Lernziel: Array-Methode filter() verstehen und anwenden.
// - In dieser Übung wendest du die filter()-Methode an, um ein Array von Zeichenketten zu verfeinern. Das Ergebnis ist ein neues Array, das ausschließlich Zeichenketten enthält, die nicht mehr als 6 Zeichen lang sind.
// - Schreibe eine Function, die das vorgegebene Array woerter durchläuft.
// - Die Function soll zunächst alle Zeichenketten filtern, die 6 Zeichen oder weniger in der Länge haben.
// - Gib das Ergebnis nun in der Konsole aus.
// - Das Array ist vorgegeben (siehe Code-Snippet).

// - Schreibe die Function erst als normale Function mit return.
// - Versuche anschließend die Function in eine (Arrow-Function) umzuschreiben.
// - [Hier](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions?retiredLocale=de%22%20target=%22_blank%22) findest du nochmal etwas zum Syntax der Arrow-Functions.

const woerter = [
  "Banane",
  "Kaktus",
  "Flausch",
  "Ente",
  "Apfel",
  "Auto",
  "Giraffe",
  "Schmetterling",
  "Krokodil",
  "Lampe",
];
const woerterSechs = woerter.filter((sechsstellig) => sechsstellig.length <= 6);
console.log(woerterSechs);
