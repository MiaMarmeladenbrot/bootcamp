// ! Wiederholung
// * Checken, ob JS richtig eingebunden ist
console.log(2);

// * h1 via JS einfügen
// document.write("<h1> Hallo Leute </h1>");

// * Daten-Typen
let datentype1 = "10"; // string
let datentype2 = 10; // number
let datentype3 = "text"; // string
let datentype4 = true; // boolean
let datentype5 = 384940213844; // number

// * Unterschied let und const
// let = veränderbare Variable
// const = konstante, nicht veränderbare Variable

// * strings zu einem Satz zusammenfügen "Hallo Leute ich bin Marzio und bin 30 Jahre alt"
const firstName = "Marzio";
let age = 30;

console.log(
  "Hallo Leute, ch bin " + firstName + " und bin " + age + " Jahre alt"
);

// * Arithmetische OPeratoren
let a = 10;
let b = 20;
let c = 3;
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(b * c);
console.log(b % a);
b++;
console.log(b);
a--;
console.log(a);

// ! NEUES THEMA
// ! Comparison
// ? = Zuweisung
// ? == Abfrage gleicher Wert
// ? === Abfrage gleicher Wert und gleicher Datentyp
console.log(3 == 3); // true
console.log(3 == "3"); // true, weil Wert gleich
console.log(3 === "3"); // false, weil Wert gleich, aber Datentyp nicht
console.log(2 == 5); // false
console.log(3 == "three"); // false

// ? != Abfrage nicht gleicher Wert
// ? !== Abfrage nicht gleicher Wert und nicht gleicher Datentyp
console.log(3 != 3); // false
console.log(3 !== 3); // false
console.log(4 !== 3); //true, weil Wert nicht gleich, Datentyp aber schon

// ? > größer als
// ? < kleiner als
// ? >= größer gleich
// ? <= kleiner gleich
console.log(3 > 2); // false
console.log(4 < 6); // false
console.log(4 >= 6); // false
console.log(4 >= 4); // true
console.log(1 >= 2);

console.log("B" > "A"); // true
console.log("B" > "a"); // false, Vergleich schwierig, weil Groß- und Kleinschreibung unterschiedlich Wertung haben

// ! Elemente selektieren und ändern
// zu 95% via class/id, da das spezifischer ist und nicht so kompliziert wie via Pseudo-Selektoren

// * getElementById() für ID
// id aus dem HTML: main-headline
// Best Practice ist es, zuerst eine Variable zu deklarieren, auf die man ggf auch später zugreifen kann; man könnte es auch ohne machen, aber das macht den Code schwerer verständlich (console.log(document.getElementById("main-headline").clientWidth);)
const mainHeadline = document.getElementById("main-headline");
console.log(mainHeadline);
// Dabei öffnet sich in der Konsole das gesamte Objekt mit allen Werten
// Ich kann aber auch auf einzelne Werte des Objekts zugreifen und diese einzeln in der Konsole anzeigen lassen:
console.log(mainHeadline.innerText);
console.log(mainHeadline.clientWidth);
console.log(mainHeadline.baseURI);

// * querySelector() für alle Elemente
// damit können wir alles ansprechen: Ids (#), classes (.) oder einfache Elemente
// rein technisch gibt es keinen Unterschied zw. id und class, aber classes hab ich idR sowieso schon fürs CSS vergeben, deshalb kann ich sie gleich nutzen und muss keine extra Klasse nutzen

const secondaryHeadline = document.querySelector("#secondary-headline");
const secondaryHeadline2 = document.querySelector(".test");
const secondaryHeadline3 = document.querySelector("h2");

console.log(secondaryHeadline);
console.log(secondaryHeadline2);
console.log(secondaryHeadline3);

// * innerHTML
// HTML in unserem Dokument manipulieren
// = überschreibt/ersetzt den ursprünglichen Text
mainHeadline.innerHTML = "ZACK - einfach so über JS geändert 🐙";
secondaryHeadline.innerHTML = "Super";

// += fügt etwas zum Bestehenden hinzu
secondaryHeadline.innerHTML += "Code";

// * HTML-Elemente bearbeiten
const divContainer = document.querySelector(".div-container");
divContainer.innerHTML = "<h2 class='supi'> Hallo, ich komme über JS </h2>";
divContainer.innerHTML += "<h2> Und noch eine H2 über jS ohne Klasse </h2>";
// mit innerHTML können wir gezielt Elemente ansprechen und überschreiben/hinzufügen im Gegensatz zu document.write, womit wir nur ans Ende des Dokuments schreiben können

// * Elemente stylen
// .style kann in JS stylen
// Marzio nutzt Einzelproperties wie hier selten, nur für Kleinigkeiten, sobald es mehr als 2 Zweilen sind, stylt er lieber Klassen im CSS, die noch gar nicht im HTML existieren, und fügt die dann im JS hinzu
mainHeadline.style.color = "red";
mainHeadline.style.backgroundColor = "blue";
mainHeadline.style.fontSize = "30px";
divContainer.style.backgroundColor = "green";

// ! Funktionen
// * Deklarieren
// sind essenziell
// Keyword ist function, darauf folgt die Funktion
// ich gebe der Funktion einen Namen (deklariere sie) und definiere in den geschweiften Klammern, was die Funktion ausführen soll
// () muss immer dabeistehen, sind die Parameter-Klammern
// funtion nameDerFunktion() {}

function sayLisa() {
  console.log("Hallo Lisa, schön, dass du da bist :)");
}

function sayTobi() {
  console.log("Hallo Tobi, schön, dass du da bist :)");
}

function sayMia() {
  console.log("Hallo Mia, schön, dass du da bist :)");
}

// * Aufrufen
// dieses console.log taucht nicht in der Konsole auf, da es Teil der Funktion ist und ich die Funktion erst aufrufen muss:
sayLisa();
sayTobi();
sayMia();
// später werden Funktionen idR durch eine Aktion ausgeführt, indem wir zB auf einen Button klicken

// ! Funktion mit Parameter-Klammern
// Parameter = Platzhalter
// so kann ich die einzelnen Funktionen oben zusammenfassen und über den Parameter einzelne Werte ändern, je nachdem, wen ich aufrufen will

// - Einfache Parameter
// * Deklarieren
// Parameter steht in Klammern und wird innerhalb der Funktion weitergereicht
// kursteilnehmer = Platzhalter
function sayHi(kursteilnehmer) {
  console.log("Hallo " + kursteilnehmer);
}

// * Aufrufen
// ich ändere den Wert in den Klammern und der wird im Ergebnis für den Parameter eingesetzt
sayHi("Thomas");
sayHi("Adrian");
sayHi("Lisa");

// - Mehrere Parameter
// muss sämtliche Parameter auch im Aufurf ansprechen, sonst funktioniert es nicht
// * Deklarieren
function addMe(num1, num2) {
  console.log(num1 + num2);
}

// * Aufrufen
addMe(20, 30);
addMe("Susi ", "Sabine");
addMe(222342354534543, 2342342395950500);

// - Funktion ins HTML schreiben
// Version 1
// von Marzio bevorzugt, weil übersichtlicher
function multiplyMeV1(num1, num2, num3) {
  let ergebnis = num1 * num2 * num3;
  divContainer.innerHTML += "<p>" + ergebnis + "</p>";
}

multiplyMeV1(2, 55, 8);
multiplyMeV1(20, 550, 80);

// Version 2
function multiplyMeV2(num1, num2, num3) {
  divContainer.innerHTML += "<p>" + num1 * num2 * num3 + "</p>";
}
multiplyMeV2(30, 33, 11);

// Funktion mit Variablen
let x = 500;
multiplyMeV2(x, 33, 11);
