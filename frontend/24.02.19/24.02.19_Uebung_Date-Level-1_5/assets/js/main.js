// - Lernziel: Anwenden der JavaScript-Methode [getMonth()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth), um den Monat eines Datumsobjekts zu erfassen und den erhaltenen Wert zu analysieren.
// - Schreibe eine Function, die den Monatsnamen anhand eines bestimmten Datums ermittelt.
// - Verwende den vorgegebenen Code (siehe Code-Snippet).
// - Nutze getMonth() um die Aufgabe zu lösen.
// - Überprüfe deine Function mit folgenden Argumenten für deine Parameter in der Konsole:
// - console.log(monatsName("2001-3-4")); //März
// - console.log(monatsName("2019-12-24")); //Dezember
// - console.log(monatsName("1410-07-15")); //Juli

let list = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

// zum Testen:
let date1 = new Date();
console.log(date1);
console.log(date1.getMonth()); //--> gibt Zahl raus

// wenn getMonth() === array[index], dann soll array Wert ausgegeben werden - Schleife?
// // const monthName = (date) => {
// // for (let i = 0; i <= list.length; i++) {
// //   console.log(i);
// //   console.log(list[i]);
// //   date.getMonth() === list[i] ? console.log(list[i]) : console.log("error");
// // }
// // }; --> Quatsch, geht nicht

// vorgegebene Teststrings Schreibweise testen:
let date2 = new Date("2001-3-4");
console.log(date2); //--> gibt übliche Datumsschreibweise raus (Sun Mar 04 2001 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit)

// einfachere Idee: monthName-Parameter in new Date() weitergeben (funktioniert, da die Schreibweise in Date-Format umgewandelt wird, siehe Zeile 37-39):
const monthName = (date) => {
  const newDate = new Date(date);

  // dann von newDate den Monat ausgeben lassen
  const monthIndex = newDate.getMonth();

  // das ist eine Zahl, mit der wiederum der Wert des Indexes im Monats-Array angesprochen und returned werden kann
  return list[monthIndex];
};

console.log(monthName("2001-3-4"));
console.log(monthName("2019-12-24"));
console.log(monthName("1410-07-15"));
