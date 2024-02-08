// - Lernziel: Array-Methode filter() verstehen und anwenden.
// - In dieser Übung setzt du filter()-Methode ein, um gezielt Elemente auszusortieren und ein neues Array zu erzeugen, das nur die übriggebliebenen Elemente enthält.
// - Ziel ist es alle “null” und “undefined”-Elemente zu entfernen.
// - Das Array ist vorgegeben (siehe Code-Snippet).
// - Schreibe die Function myHeros.
// - Gib das Ergebnis nun in der Konsole aus.
// - Zur besseren Darstellung lass dir das Array vor und nach dem Schreiben der Function ausgeben.

const heros = [
  "Superman",
  "Batman",
  undefined,
  "Wonder Woman",
  "Spider-Man",
  "Black Widow",
  "Iron Man",
  "Thor",
  "Catwoman",
  null,
];
console.log(heros);
const myHeros = heros.filter(
  (element) => element !== undefined && element !== null
);
console.log(myHeros);
