// # Selektieren von Elementen

// Vielleicht hilft diese Erklärung nochmal etwas zum besseren Verständnis 😉    Der Browser wandelt die HTML-Tags der HTML-Datei in Objekte um, die mit JavaScript manipuliert werden können. Diese Objekte bilden das Document Object Model, welches wiederum aus einer Reihe von Objekten besteht, die als Eltern-Kind-Beziehungen strukturiert sind. Diese Objekte im DOM stellen Nodes dar, genauer gesagt bzw. noch tiefer betrachtet HTML Elemente (Elementknoten).

// ! HTML Collection
// Eine HTML Collection ist aussen ein Array darinnen befinden sich Objecte. Es wir in JS verwendet um eine Gruppe von Elmenten in DOM zu selektieren
// DOM = Document Object Model

// - HTML Collections sind live! Siobald sich HTML ändere, ändert sich auch die collection
// - index Bassieret - Das erst Elm. ist 0
// - Wird oft beim document.getElementByClassName() & document.getElmenetbyTagName() benutzt. (da bekommen wir eine collection zurück)

// * So bekommen ich zugriff auf die html elemente
console.log(document.forms);

let myFrom = document.forms.loginForm;
console.log(myFrom);

// Holt input feld raus
console.log(myFrom.username);

// Holt value raus
// HTML = name="username"
console.log(myFrom.username.value);

// So bekomme ich email Value
console.log(myFrom.email.value);

// Holt btn
console.log(myFrom.button.value);

// # NodeList
// Eine Nodelist ist eine Sammlung von Knoten, darum Nodes. Im Gegenzug zu HTML Copllection können Nodes alle arten von DOM Knoten enhahlten

// - Node könnne statisch oder live sein
// - Index Basiert - Erste Elm. ist 0
// - Nodelist werden oft als Rückgabewerte von Dom Methoden wie document.quarySelectorAll() oder Node.childeNodes erhalten.

const liHTMLCollection = document.getElementsByTagName("li");
const liNodelist = document.querySelectorAll("li");

console.log(liHTMLCollection);
console.log(liNodelist);

// mit console.dir bekommen wir immer ein Objekt zurück (weisse teil)

// So bekome ich einezele Child Elemente
console.log(document.body.children[0]); //ich bekomme das Formular
console.dir(document.body.children[0].children); // so bekommen wir in inputs
console.log(document.body.children[1].children); // so bekomme ich die li

// - So fügen wir was in unseen childern ein
document.body.children[0].innerHTML += "<p> ich bin im From elment </p>";
document.body.children[1].innerHTML += "<li> Ich bin ein li Tag </li>";

// - So machen wir den Text von inputfeld farbig
// Ich Navigiere mit der erst [0] und der zweiten [0] zu meinne html element
document.body.children[0].children[0].style.color = "pink";
document.body.children[0].children[1].style.color = "red";

// # fristElementChild & lastElmentChild

console.log(document.body.firstElementChild); // Wie bekommen das ERSTE elment von html zurück
console.log(document.body.lastElementChild); //Script
console.log(document.body.children[0].lastElementChild); // So können wir eine Kombi mit index und lastElementChild machen

// #  ==== createElement, appendChild ====
console.clear();

// * Elment ins HTML Einfügen

// 1. erstellt ein Elment deiner wahl
let div = document.createElement("div");
// 2. erstellt den Tex für das Div
div.textContent = " Test Div ";
// 3. styling deinr elemente
div.style.height = "200px";
div.style.backgroundColor = "red";

// 4. Fügen das Element in das body hin
document.body.appendChild(div);

// # ==== setAtteribut("attribute", "attribute-inhalt") ====
// So kann ein Bild in das HTML geschrieben werdne

let image = document.createElement("img");
//hier definiere ich die quelle
image.setAttribute("src", "https://picsum.photos/200");
// hier definiere ich mein alt text
image.setAttribute("alt", "ich bin der alternativ text");
// hier füge ich eine klasse hinzu
image.setAttribute("class", "random-class");
// Hier schriebe ich es ins html
document.body.appendChild(image);

// - so machen wir das mit innerhtml
document.body.innerHTML += `
<img class="hi" src="https://picsum.photos/200" alt="test">`;

// # ==== setAttribut & forEach ====
let imgArry = [
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
];

// 1 Schleife erstellen
imgArry.forEach((elm) => {
  // 2. erstellen von img tag
  let img = document.createElement("img");
  // 3. src anpassen
  img.setAttribute("src", elm);
  // 4. alt tag
  img.setAttribute("alt", "alt Tag");
  // 5. class hinzufügen
  img.setAttribute("class", "classe1233");

  document.body.appendChild(img);
});
