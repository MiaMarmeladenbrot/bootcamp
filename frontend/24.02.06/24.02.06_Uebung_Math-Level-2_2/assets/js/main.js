// - Lernziel: Anwendung von Math.random() und prompt für die Erzeugung zufälliger Werte und die Interaktion mit Benutzereingaben.
// - Schreibe ein kleines Spiel/Programm, das wie folgt funktioniert:
// 1. Das Programm “denkt” sich eine Zahl zwischen 1-10 mithilfe von Math.random() aus und du musst sie erraten.
// 2. Nach Eingabe deiner Zahl sagt dir das Programm (in der Konsole), ob du richtig oder falsch geraten hast.

let randomNumber = Math.ceil(Math.random() * 10);
const inputWindow = Number(
  window.prompt("Schätzen Sie die Nummer zwischen 1 und 10")
);

const guess =
  inputWindow === randomNumber ? console.log("richtig") : console.log("falsch");

console.log(inputWindow);
console.log(randomNumber);
