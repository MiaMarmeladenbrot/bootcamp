// - Lernziel: Erstellung einer JavaScript-Function zur Unterscheidung zwischen Wochenenden und Arbeitstagen mithilfe von bedingten Anweisungen, Vergleichsoperatoren und getDay().
// - Schreibe eine Function, die überprüft, ob an einem bestimmten Datum Wochenende ist oder nicht.
// - Überprüfe dein Ergebnis in der Konsole.
// - Nutze:  Conditionals Statement  Comparison Operators  Funktion mit einem Parameter  Aktuelles Datum  getDay()  return "Weekend"  return "Arbeitstag"
// - Teste folgende Daten:  12.15.2019  2.16.2001  2.1.2020  2.29.2020

// Schreibweisen testen:
let date1 = new Date(12, 15, 2019); //--> Thu Oct 10 1918 00:00:00 GMT+0100 (Mitteleuropäische Sommerzeit)❌
console.log(date1);
let date11 = new Date("12-15-2019"); //--> Sun Dec 15 2019 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit)✅
console.log(date11);

// Ausgabe von getDay() testen:
console.log(date11.getDay()); //--> 0
//# --> So = 0 bis Sa = 6

// ! längere if-else-Funktion:
console.log("===== längere if-else-Funktion:");
// wenn Mo-Fr, dann Arbeitstag; wenn Sa-So, dann Wochenende
const whichDay = (date) => {
  let newDate = new Date(date);
  if (
    newDate.getDay() === 1 ||
    newDate.getDay() === 2 ||
    newDate.getDay() === 3 ||
    newDate.getDay() === 4 ||
    newDate.getDay() === 5
  ) {
    return console.log("Arbeitstag");
  } else if (newDate.getDay() === 6 || newDate.getDay() === 0) {
    return console.log("Wochenende");
  } else {
    console.log("error");
  }
};

whichDay("12-15-2019");
whichDay("2-16-2001");
whichDay("2-1-2020");
whichDay("2-29-2020");

//! kürzere ternary-Funktion:
console.log("===== kürzere ternary-Funktion:");
// newDate ist größer als 0 und kleiner als 6 => Arbeitstag, in allen anderen Fällen Wochenende
const whichDay1 = (date) => {
  let newDate = new Date(date);
  newDate.getDay() > 0 && newDate.getDay() < 6
    ? console.log("Arbeitstag")
    : console.log("Wochenende");
};

whichDay1("12-15-2019");
whichDay1("2-16-2001");
whichDay1("2-1-2020");
whichDay1("2-29-2020");
