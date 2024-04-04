// # ===== Wiederholung ======

// Checken ob JS richtig eingebunden ist
console.log(2);

// - Wie kann ich eine h1 mit den Text halle leute einfügen?
// document.write("<h1> Hallo Leute </h1>");

// - Welche Datentyyen sind das?
let datentype = "10"; //String
let datentype1 = 10; // Number
let datentype2 = "text"; //String
let datentype3 = true; // Boolean
let datentype4 = 3430049039493904939394934; // Number

// - Wo ist der Unterschied von let und const
// let - Wir können werte der Variable überschreiben / verändern
// const - Wert kann nicht überschrieben / verändert werden

// - Wie schreibe ich meien Variable?
// camelCase
// nicht zu lange / kurz
// gerne englisch
// Sinnvoll gestalten
// keien zahlen am anfang

// - Wie kann ich einString zusammenfügen das dieser Satzt ensteht "Hallo Leute ich bin Marzio und bin 30 Jahre alt"
const fristName = "Marzio";
let age = 30;

console.log(
  "Hallo Leute ich bin " + fristName + " und bin " + age + " Jahre alt"
);

// Aritmische Opperationen

let a = 10;
let b = 20;
let c = 3;

// - addieren von a und b
console.log(a + b);

// - subtrahieren von b von a
console.log(a - b);

// - dividieren a durch b
console.log(a / b);

// - multiplizieren b * c
console.log(b * c);

// - checken ob eine Restwert bleibt wenn ich b durch a teile
console.log(b % a);

// - Den Wert b um eins erhöhen
b++;
console.log(b);

// - Den Wert a um eins abziehen
a--;
console.log(a);

console.log(c++);
console.log(++c);

// # ===== Neues Thema ======

// ! ==== Coparison ====

// ? = nutzen wir als zuweisung

// * Das "==" & "===" benutzen wir zum vergleichen
// ? == vergleicht nur den Wert
// ? === vergleicht den Wert und Datentypen

console.log(3 == 3); // true
console.log(3 == "3"); // true
console.log(3 === "3"); //false
console.log(2 == 5); //false
console.log(3 == "three"); //false

// ? != nicht gleicht Wert
// ? !== nicht gleicher Wert oder Datentype
console.log(3 != 3); //false
console.log(3 !== 3); //false
console.log(4 !== 3); //true

// ? > grüßer als
// ? < kleine als
// ? >= größer gleich
// ? <= klein gleich

console.log(3 > 2); //true
console.log(4 < 6); //true
console.log(4 >= 6); //false
console.log(4 >= 4); //true
console.log(1 >= 2); //false

console.log("B" > "A"); //true
console.log("B" > "a"); //false

// ! ===== Elemente selektieren ======

// - getElementById()
// Damit sprechen wir die Welemente über die id an
// id aus dem HTML: main-headline

const mainHeadline = document.getElementById("main-headline");
console.log(mainHeadline);

// So kann ich auf die einzelnen Werte zugreifen
console.log(mainHeadline.innerText);

// So hole ich mir andere eigenschaften
console.log(mainHeadline.clientWidth);
console.log(mainHeadline.baseURI);

// - querySelector()
// Damit können wir alles ansprechen: ID´s (#) / klassen (.<text>) oder einfache Elemente (h2)
const scondaryHeadling = document.querySelector("#secondary-headline");
const scondaryHeadling2 = document.querySelector(".test");
const scondaryHeadling3 = document.querySelector("h2");

console.log(scondaryHeadling);
console.log(scondaryHeadling2);
console.log(scondaryHeadling3);

// - .innerHTML
// Wir können innerHTML auch verweden umd den inhalt zu überschreiben
mainHeadline.innerHTML = "ZACK - einfach so über JS geändert 😎";

// mit = überschrieben wir den wert
// mit += fügen wir was zum alten text hinzu
scondaryHeadling.innerHTML = "Super";
scondaryHeadling.innerHTML += "Code";

// in Elemente schreiben
const divContainer = document.querySelector(".div-container");
divContainer.innerHTML = "<h2 class='supi'> Hallo ich komme über JS </h2> ";
divContainer.innerHTML += "<h2> Even ist da </h2> ";

// const h2 = document.querySelector("div h2");
// console.log(h2);

// * Unetscheid document.write() vs .innerHTML
// mit document.write() schreibe ich es immer ans ende
// mit .innerHTML können wir gezielt Elemente ansprechen und dere inhalt verändern / überschrieben / hinzufügen

// - .style
// mit .style können wir das element stylen
mainHeadline.style.color = "red";

// So andere ich die hintergrund Farbe
mainHeadline.style.backgroundColor = "blue";
mainHeadline.style.fontSize = "30px";

// Div box Stylen
divContainer.style.backgroundColor = "red";

// !  ===== Funktionen ======

// * Deklarieren
// Wir erstelle eien funktion und beschreiben, was die Funktion machen soll
// mit dem Keyword "function" sagen wir JS, dass jetzt eine Funktion kommt
// "sayHi" (camelCase) ist der Name der Funktion. Der name ist frei definierbar. Sollt aber sinn ergeben.
// () muss immer da sein

function sayHi() {
  console.log("Hallo Lisa, schön das du da bist :-)");
}
function sayTobi() {
  console.log("Hallo Tobi, schön das du da bist :-)");
}
function sayMia() {
  console.log("Hallo Mia, schön das du da bist :-)");
}

// * Aufruf
// Wir mussen eine Funktion aufrufen, damit sie ausgeführt wird
// Später können wir Funktionen ausfühen lassen, wenn wir zb auf einen button klicken..
sayHi();
sayTobi();
sayMia();

// !  ===== Funktionen mit Parameter ======
// Mit einen Parameter können wir unsere Funktion weiderverwendbarer machen

// - Einfache Parameter
// Deklatation
// in den Klammerne schreieben wir die Parameter und reichen sie an der Funktion weiter
// "kurszeilnehmer" ist sozusagen unser Platzhalter

function sagHallo(kursteilnehmer) {
  console.log("Hallo " + kursteilnehmer);
}

sagHallo("Thomas");
sagHallo("Adrian");
sagHallo("Lisa");

// - Mehrere Parameter
function addMe(num1, num2) {
  console.log(num1 + num2);
}

addMe(20, 30);

addMe("Susi ", "Sabine");
addMe(2223232334233422, 23903490493900390340303);

// - Funktion ins HTML Schreiben lassen
// Version 1
function multplyMe(num1, num2, num3) {
  let ergebnis = num1 * num2 * num3;
  divContainer.innerHTML += "<p>" + ergebnis + "</p>";
}

multplyMe(2, 55, 8);
multplyMe(20, 550, 228);

// Version 2
function multplyMeVersion2(num1, num2, num3) {
  divContainer.innerHTML += "<p>" + num1 * num2 * num3 + "</p>";
}

multplyMeVersion2(50, 33, 11);
