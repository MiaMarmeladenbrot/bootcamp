// - Schreibe eine Funktion, die jeden Wert aus dem Array (siehe Code-Snippet) mit 2 multipliziert und das Ergebnis sortiert
let array = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];
console.table(array);

array.sort();
console.table(array);

const arrayM2 = array.map((number) => number * 2).sort((a, b) => a - b);
console.table(arrayM2);
