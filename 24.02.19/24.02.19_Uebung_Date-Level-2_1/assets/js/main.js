// - Lernziel: Anwenden von JavaScript-Datumsfunktionen, Auswahl von HTML-Elementen und Anzeige des Ergebnisses im HTML-Dokument.
// - Schreibe eine Function, die das aktuelle Datum anzeigt.
// - Erwartete Ergebnisse:   tt-mm-jjjj oder tt/mm/jjjj. (Tag, Monat, Jahr).
// - Nutze:
// - getDate()
// - getMonth()
// - getFullYear()
// - getElementById() oder querySelector().
// - Lasse dir das Ergebnis im HTML-Dokument anzeigen.

const output = document.querySelector(".output");
// console.log(output);
let today = new Date();
output.innerHTML = `${today.getDate()}/${
  today.getMonth() + 1 //damit 2 und nicht 1 angezeigt wird
}/${today.getFullYear()}`;

// als Funktion:
// // const todaysDate = () => {
// //   let today = new Date();
// //   output.innerHTML = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
// // };

// // todaysDate();
