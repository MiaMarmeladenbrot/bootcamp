// ==== console.log() ====
// mit console.log() können wir und Sachen in der Konsole ausgeben lassen. Das werden wir viel zum Testen benutzen.
// Am Ende jese Befehls muss ein Semikolon stehen.
console.log(50);

// ! ===== Variablen =======
// - const - Variable sollten für  Werte verwendet werden, die sich nicht ändern.
// - let - Variable für wert die sich später ggf ändern
// - var - Variable ähnlich zu let (Vor ECMA 6) bitte nicht benutzen

// ? CONST
// * Stell dir vor, du möchtest eine Variable deklarieren. um den Name einer Person zu speicher. Wenn er einmal zugewisen ist. soll er nichtmehr verändert werden können. In diesem Fall bitte const benutzen
const name = "Max";
// name = "Tobi";

// ? LET
// * Jetzt wollen wir ein Spielstand in einer Variable let speichern und den wert im lauft des spiels immer wieder anpassen. Wenn sich ein Wert im Lauf des Programms ändert benutzen wir let
let score = 0;
console.log(score);
score = 11;
console.log(score);

// ? Zuwisung unf aufruf
// let = Mit let erstellen wir eine Variable
// let num1 = Hier Initialisieren wir eine Variable und weise direkt einen Namen zu

let num1 = 30;
console.log("num1:", num1);
let num2 = 10;

console.log("num2", num2);
console.log(num1 - num2);

// # Konventionen

// Selbsterklärende Namen verwenden
// nicht zu lange
// nicht zu kurz
// Namen sollen nicht micht Zahlen anfangen
// Sowas bitte nicht -> let 2Pac = 33
// Name sollen nicht mit $ starten
// JS ist Case-Senstive

// CASE SENSETIVE
// Das sind zwei werte
let a = 10;
let A = 50;

console.log(a);
console.log(A);

let zahl;

zahl = 55;

console.log(zahl);

// Best Practice
// camelCase : erster buchstabe klein und zweite wort groß

let meineErsteVariable;

let myFirstVariable;

// # ===== DatenTypen ======

// ? Numbers
// Numbers werden in der Konsole blau / lila angezeigt
console.log(10);
console.log(15);
console.log(30 + 10);
console.log("Tim" - "Max");
// Geht nicht
console.log("50" + "25");
// Geht
console.log("50" - "25");

// ? Strings
// String = Textelemente
// Um ein String müssen wir immer "" machen
console.log("Marzio");
console.log("Marzio");
console.log(`Marzio`);
// Wir können auch Zahlen als Strings ausgeben
console.log("10");

// ? Boolans
console.log(true);
console.log(false);

// # =====  String Concatination ======
// Wir können mehrer Textelement miteinander verbinden

const firstName = "Marzio";
const lastName = "Costantini";
let address = "Tutzing";

console.log(firstName, lastName, address);

// console.log(
//   "Ich bin " + firstName + " " + lastName + " und wohne in " + address
// );

let satz = "Ich bin " + firstName + " " + lastName + " und wohne in " + address;

console.log(satz);

// # ===== Arthmische Operationen =======

// addieren
console.log(5 + 3);

// subtrahieren
console.log(5 - 8);

// muliplizieren
console.log(5 * 5);

// dividieren
console.log(5 / 3);

// Modulo -> Restwert
// wir gucken, ob bein Restwert bleibt. wenn die Zahl 9 durch 2 dividiren
console.log(9 % 2);

let zahl1 = 10;

// Increment
// mit ++ wird immer eins zum voherigen Wert hinzugefügt
console.log("zeile 129", zahl1);
zahl1++; // +1
zahl1++; // +1
zahl1++; // +1
console.log("Zeile 131", zahl1);

// Decrement
console.log("Zeile 137", zahl1);
zahl1--; // -1
zahl1--; // -1
console.log("Zeile 140", zahl1);

// let num = 10;
// const num3 = ++num;

// console.log(num3);

// # ======= Output ========
// console.log("kennen wir schon")

// ! document.write()
// Damit schreiben wir immer Daten an ende von dem HTML Dom
document.write("Hallo Kurs :-)");

// Und so haben wir eine umanteltes html element hinzugefügt
document.write("<h2 class='test'> Kurs123 </h2>");

// ! window.alert()
// Damit öffnet sich ein Popup fenster mit dem Text Hallächen
// window.alert("Hallöchen");

// # ======= Inputs ========

// ! window.promp()
// Damit öffnet sich ein Popup, in dem der Nutzer etwas eingeben kann
// Wenn ich den zweiten String mit keinem , trenne wird das in das input als Platzhalter gesteckt
// window.prompt("Bitte gebe ein zahl ein", "hallöchen");

// * Wir haben nun unserAntwort in einer Variable geschirben und speichern uns nun das input von user ab
// let userAntwort = window.prompt("Wie alt bist du?");
// console.log("der User ist" + userAntwort);

// * So können wir das auch in Kombi nutzen
// document.write("<h2>" + userAntwort + "</h2>");

// ! window.confirm()
// So kann ich was akzeptiern oder ablehnen
// window.confirm("Stimmen Sie den Cookie zu?");

let zustimmung = window.confirm("Stimmen sie den Cookie zu?");
console.log(zustimmung);
