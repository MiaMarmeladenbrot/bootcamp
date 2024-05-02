// ! strings aka Zeichenkette
// 3 Möglichkeiten, strings in js zu deklarieren
const text1 = "Double Quotes";
const text2 = "Single Quotes";
const text3 = `backticks bzw. template literals`; // --> hier gibts ein paar coole Features

// mit typeof erfahre ich den Datentyp einer Variable/Funktion/etc. :
console.log(typeof text1);

// ! string Methoden
// String-Methoden sind von JS für uns vorgefertigte Funktionen, die wir auf strings anwenden können, um strings zu manipulieren, analysieren und formatieren

//* string.length
// gibt die Anzahl der Zeichen (inkl. Leerzeichen) des strings als number zurück
console.log(text1.length);

//* string.indexOf("etwas")
// gibt uns den Index (Position) einer Zeichenkette innerhalb des strings zurück
// Wichtig: fängt bei 0 an zu zählen
const firstName = "Michael Alexander";
console.log(firstName.indexOf("x")); // wenn gefunden, gibt Position des Zeichens zurück
console.log(firstName.indexOf("der")); // wenn gefunden, gibt Position des ersten Zeichens zurück
console.log(firstName.indexOf("ael"));
console.log(firstName.indexOf("H")); // wenn nicht gefunden, gibt er -1 raus
console.log(firstName.indexOf("a")); // sobald gefunden, werden folgende gleiche Zeichen ignoriert; er kann nur einen Wert finden
console.log(firstName.lastIndexOf("a")); // letztes gefundenes Zeichen im string

//: einfaches Anwendungsbeispiel:
// wir wollen checken, ob der User bereits ein Konto hat:
const userInput = "hakan@super.de";
const userDb = "steffen@super.de hakan@super.de izel@super.de";

if (userDb.indexOf(userInput) >= 0) {
  console.log("User gefunden, weiter geht's zum Einloggen");
} else {
  console.log("User nicht vorhanden, weiter geht's zur Registrierung");
}

//* string.slice()
// slice gibt Zeichen zwischen Start- und Endposition zurück; kann also 2 Werte annehmen

const testText = "Bruce Wayne";
//- 1. Fall
console.log(testText.slice()); // wenn ich keine Werte angebe, wird der komplette string genommen
//- 2. Fall
console.log(testText.slice(2)); // wenn ich einen Wert angebe, wird der string von der Position, dem startIndex, bis zum Ende des strings genommen
//- 3. Fall
console.log(testText.slice(2, 4)); // wenn ich zwei Werte angebe, wird der string zwischen diesen beiden Werten genommen, zwischen startIndex und endIndex (exkl. endIndex)

//- Kombi aus slice und indexOf
// wir starten bei 0 und mit indexOf lassen wir uns den Positions-Wert für den Endindex ausgeben
console.log(testText.slice(0, testText.indexOf(" ")));

//- Es gibt noch mehr Methoden, um strings zu teilen:
// Substring ---> Ok
// substr --> deprecated --> Bitte nicht mehr nutzen

//- negative Zahlen in slice
// negative Zahlen zählen den string rückwärts
console.log(testText.slice(-3));

//* string.concat()
// offizielle Methode, um strings miteinander zu verketten
const vorname = "Mia";
const nachname = "die Laufwütige";
console.log(vorname.concat(" ", nachname));

// ! template literals
// super für mehrzeilige strings
// super, um Variablen in einen string zu implementieren, ohne das ständige Plus zu verwenden
const greetingNew = `Hallo ${vorname} ${nachname}, willkommen zurück auf deinem Dashboard!`; //>>> ES6 Standard
const greetingOld =
  "Hallo " +
  vorname +
  " " +
  nachname +
  ", willkommen zurück auf deinem Dashboard!"; //>>> vor ES6

console.log(greetingNew);

//- Beispiel innerhalb einer Funktion
function greeting(vornamen, nachnamen) {
  const sayHi = `Hallo ${vornamen} ${nachnamen}, willkommen zurück auf deinem Dashboard!`; //>>> sollte eine const sein, damit die Begrüßgun des Users nicht wieder (aus Versehen) überschrieben werden kann; denn auch wenn ich letztlich unterschiedliche Daten rausgeben lassen will, geht das, weil ich nicht den Wert überschreibe (der immer die Begrüßung bleibt), sondern die Parameter ändere und dabei die const bei jedem Funktionsaufruf neu definiert wird / Steffen empfiehlt, so oft wie möglich const zu nutzen und so wenig wie möglich let, um den Code sicherer zu machen
  console.log(sayHi);
}

greeting("Zied", "Hackerman");
greeting("Anna", "Superwoman");
greeting("Izel", "in the Dark");
