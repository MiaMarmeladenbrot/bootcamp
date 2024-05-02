// ===============================
//    strings aka zeichenkette
// ===============================
// 3 möglichkeiten strings in js zu deklarieren
const text1 = "Double Quotes";
const text2 = "Single Quote";
const text3 = `template literals`; //hier gibt ein paar coole features

// mit typeof bekomme ich den datentypen von meiner variable/konstante/function/...
console.log(typeof text1);

// ============================
//      string methoden
// ============================
// Was ist das ? Wofür braucht ? Warum eigentlich ?

// String-Methode sind von JS für uns vorgefertigte Funktionen, die wir auf string anwenden können um strings zu manipulieren, analysieren und formatieren

// string.length --> gibt die anzahl der zeichen meines strings als number zurück
// leerzeichen werden mitgezählt und fängt bei 1 anzuzählen
console.log(text1.length);

// string.indexOf("etwas") --> gibt uns den Index(Position) einer Zeichenkette innerhalb des strings zurück
// WICHTIG --> fängt bei 0 anzuzählen und ist case sensitive
const firstName = "Michael Alexander";

console.log(firstName.indexOf("x"));
console.log(firstName.indexOf("der")); //wenn gefunden gibt position des ersten buchstabes zurück
console.log(firstName.indexOf("ael")); //4
console.log(firstName.indexOf("H")); // -1 gibt es immer wenn string nicht gefunden wird
console.log(firstName.indexOf("a")); //sobald indexOf etwas findet, ignoriert es die folgenden zeichen

// findet die letzte position im string
console.log(firstName.lastIndexOf('a')); //letzte gefundene zeichen im string

// EVTL Beispiel:
const userInput = "hakan@super.de"
const userDb = "steffen@super.de hakan@super.de adrian@super.de"

if (userDb.indexOf(userInput) >= 0) {
    console.log("user gefunden, weitergehts zum einloggen")
} else {
    console.log("user nicht vorhanden")
}

// string.slice()
// string.slice(startIndex)
// string.slice(startIndex, EndIndex(opt.))
// slice gibt zeichen zwischen start- und endindex zurück oder wenn nur startindex dann bis zum ende des string
// wenn garkein wert dann wird der komplette string genommen

const testText = "Bruce Wayne";
console.log(testText.slice()); //hier kompletter string
console.log(testText.slice(2)); //nimmt den string ab dem startindex
// das heißt:
// startindex ist inklusive
// endindex ist exklusive (schneidet davor ab)
console.log(testText.slice(2, 4));
// kombination aus slice und indexOf
// wir starten bei 0 und mit indexOf lassen wir uns den endindex ausgeben, weil indexOf uns den index des gesuchten zurückgibt
console.log(testText.indexOf(' ')); // index 5 von leerzeichen
console.log(testText.slice(0, testText.indexOf(' ')));

// Es gibt noch mehr methoden um strings zuteilen:
// Substring --> OK
// Substr --> deprecated --> Bitte nicht mehr nutzen!

// slice kann auch negative zahlen nutzen und nimmt dann die zeichen aus dem string von hinten
console.log(testText.slice(-4));

// string.concat() --> ist die offizielle methode um strings miteinander zuverketten <3

const vorname = "Mia";
const nachname = "die Laufwütige";

console.log(vorname.concat(" ", nachname)); //concat werdet ihr noch bei anderen datentypen kennenlernen und lieben <3

// ==============================================
//              template literals
// ==============================================
// super für mehrzeilige strings
// super um variablen/konstanten in meinen string zu implementieren

function greeting(vornamen, nachnamen) {
    // ES6 Standard
    const sayHallo = `Hallo ${vornamen} ${nachnamen}, willkommen zurück auf deinem Dashboard`;
    console.log(sayHallo);
}

greeting("Zied", "Hackerman");
greeting("Anna", "SuperWoman");
greeting("Izel", "in the Dark");

// // Vor ES6
// const greetingOld = "Hallo " + vorname + " " + nachname + ", willkommen zurück auf deinem Dashboard";