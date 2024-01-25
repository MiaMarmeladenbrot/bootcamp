// ! console.log()
// mit console.log können wiru ns Sachen in der Konsole ausgeben lassen. Das werden wir viel zum Testen benutzen:
// am Ende jeden Befehls muss ein Semikolon stehen; das beendet das Programm/den Befehl
console.log(50);

// ! Google
// unbedingt aufs Datum achten, nichts, was älter ist, als maximal 3 Jahre!

// ! Variablen
// Programmiersprachen sind immer ähnlich aufgebaut, die Syntax ist anders, aber das Prinzip ist das gleiche
// es gibt verschiedene Variablen-Typen, wir werden intensiv mit zweien arbeiten
// - const = konstante Variable, nicht veränderbar, sollte also für Werte nutzen, die sich nicht mehr ändern
// - let = veränderbare Variable, also für Werte nutzen, die sich später ggf ändern
// - var = war früher wichtig, ähnlich wie let, aber hat zu Problemen geführt, wird heute kaum mehr genutzt

// ? Const
// * Stell dir vor, du möchtest eine Variable deklarieren, um den Namen einer Person zu speichern. Wenn er einmal zugewiesen ist, soll er nicht mehr verändert werden können. In diesem Fall bitte const benutzen
const name = "Max";
// name = "Tobi"; --> das führt zu einem Fehler, da wir versuchen, eine konstante Variabel zu überschreiben

// ? let
// * Jetzt wollen wir einen Spielstand speichern und im Laufe des Spiels immer wieder anpassen. Wenn sich ein Wert im Laufe des Programms ändert, benutzen wir let
let score = 0;
score = 11;
// let muss ich hier nicht noch mal davor schreiben, da sie bereits initiiert/deklariert wurde; wenn ich let score 2x so schreibe, führt das zu einem Fehler
console.log(score);

// ? Zuweisung und Aufruf
// let = mit let erstellen wir eine Variable
// let num1 = hier initialisieren/deklarieren wir eine Variable und weisen direkt einen Namen zu
let num1 = 30;
console.log(num1);
console.log("num1:", num1);

let num2 = 10;
console.log("num2:", num2);

console.log(num1 + num2);
console.log(num1 - num2);

// ! Konventionen beim Benennen
// selbsterklärend
// nicht zu kurz und nicht zu lang
// niemals mit Zahlen oder Dollarzeichen anfangen
// case-sensitive, also Groß- und Kleinschreibung beachten
// Variablen mit mehreren Wörtern in camelCase: erster Buchstabe klein, zweites Wort groß, zB: let myFirstVariable
// idR auf Englisch

// ! Daten-Typen
// ? Numbers
// Zahlen werden in der Konsole blau/lila angezeigt
console.log(10);
console.log(15);

// ? Strings
// Zeichenketten, Textelemente
// sitzen immer innerhalb von Anführungszeichen
// wenn ich keine Anführungszeichen setze, versucht er, eine deklarierte Variable zu finden, und es kommt zum Fehler
console.log("Marzio");

// wir können auch Zahlen als strings ausgeben
console.log("10");

// ? Numbers in Strings
console.log(30 + 10);
console.log("Tim" - "Max");
// NaN - not a Number - Fehler
console.log("50" - "25");
// numbers in strings erkennt er und konvertiert das Ergebnis zu einer number - aber nur bei Subtraktion, Multiplikation und Division!
// bei Addition werden die Zahlen als string ausgelesen und aneinandergereiht wie ein Satz (5025)
// sollte man also vermeiden
// Best Practice ist eh, gleich den richtigen Datentyp zu verwenden

// ? Booleans
// true oder false
// zB praktisch für Dark-Light-Modus
console.log(true);
console.log(false);

// ! String Concatenation
// Wir können mehrere Textelemente miteinander verbinden

const firstName = "Marzio";
const lastName = "Costatini";
let address = "Tutzing";

console.log(firstName, lastName, address);

console.log(
  "Ich bin " + firstName + " " + lastName + " und wohne in " + address
);

// !  arithmetische Operationen
// * addieren
console.log(5 + 3);

// * subtrahieren
console.log(5 - 8);

// * multiplizieren
console.log(5 * 5);

// * dividieren
console.log(5 / 3);

// * Modulo --> Restwert einer Division ermitteln, hier wäre der Wert 2
console.log(6 % 4);
// Marzio nutzt es, um zu berechnen, ob eine Zahl gerade oder ungerade ist; wenn sie gerade ist, bleibt bei 2 eine 0 übrig
console.log(7 % 2);

// * Increment
// mit ++ wird immer eins zum vorherigen Wert addiert
let zahl = 10;
console.log("zahl zeile 113", zahl);
zahl++; // +1
console.log("zahl zeile 115", zahl);
zahl++; // +1
zahl++; // +1
console.log("zahl zeile 117", zahl);

// * Decrement
// mit -- wird immer eins vom vorherigen Wert subtrahiert
console.log("zahl zeile 122", zahl);
zahl--; // -1
console.log("zahl zeile 124", zahl);

// ! Outputs
// log anzeigen:
console.log("kennen wir schon");

// ? document.write()
// Text ans Ende des HTML schreiben:
document.write("Hallo Kurs");
document.write("<h2 class='test'>Das ist eine h2</h2>");
// class braucht dann das jeweils andere Anführungszeichen, sonst Gänsefüßchenkonflikt

// ? window.alert()
// öffnet ein Pop-Up-Fenster beim Neuladen der Seite
// window.alert("Hallöchen");

// ! Inputs
// ? window.prompt
// öffnet Pop-Up-Fenster, in dem der User etwas eingeben muss; zweiter Text ist Platzhalter im Eingabefeld
// window.prompt("Bitte gebe eine Zahl ein", "Hallöchen");

// So haben wir unsere User-Antwort in eine Variable geschrieben und speichern uns nun das input von user ab:
// let userAntwort = window.prompt("Wie alt bist du?");
// console.log("der User ist", userAntwort);

// So können wir das auch in Kombi benutzen:
// document.write("<h2>" + userAntwort + "</h2>")

// ? window.confirm()
// gibt Option, die ich ablehnen oder akzeptieren kann
// window.confirm("Stimmen Sie den Cookies zu?");

// So haben wir die User-Antwort in eine Variable geschrieben und speichern uns das input als false oder true:
// let zustimmung = window.confirm("Stimmen Sie den Cookies zu?");
// console.log(zustimmung);
