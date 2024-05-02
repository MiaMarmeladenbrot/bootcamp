// - Um die Position eines Zeichens in einer Zeichenkette als Ergebnis in der Konsole zu erhalten, kannst du den Befehl [search()](https://www.w3schools.com/jsref/jsref%5Fsearch.asp) verwenden.
// - Übernehme folgende Variable: let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."

let txt2 =
  "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

// - Suche die Position des Zeichens ";" in der Variablen txt2.
console.log(txt2.search(";"));

// - Suche die Position des Zeichens "green" in der Variablen txt2.
console.log(txt2.search("green"));

// - Suche die Position des Zeichens "blue" in der Variablen txt2.
console.log(txt2.search("blue"));
