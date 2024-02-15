// # DOM = Document Object Model = ganzes HTML

// ! Elemente selektieren
// querySelector bleibt wichtigster
// Vorteil der anderen: falls keine Klassen benutzt werden dürfen, kann man über HTML Collection bzw. NodeList einfacher ins HTML navigieren

//! HTML Collection
// objektähnliches Array von HTML-Elementen: ist außen ein Array und darin sind Objekte
// selektiert eine Gruppe von Elementen in DOM
// sind immer live: sobald sich HTML ändert, ändert sich auch collection
// index-basierend: das erste Elemente ist 0
// wird oft beim document.getElementByClassName() und document.getElementByTagName() benutzt --> bekommen eine collection zurück

// So bekomme ich alle Formulare im HTML raus:
console.log(document.forms); //--> HTMLCollection [form, loginForm: form]

// Über den html-Namen des Formulars bekomme ich nur dieses eine Formular im HTML raus:
// let formName = document.forms.form-Name;
let myForm = document.forms.loginForm;
console.log(myForm); //--> <form name="loginForm">.....

// Über den html-Namen des input-Feldes Username bekomme ich das input-Feld aus diesem einen Formular:
console.log(myForm.username); //--> <input type="text" name="username" ....

// Über den html-Namen des input-Feldes Username + .value bekomme ich den value des input-Feld aus diesem einen Formular:
console.log(myForm.username.value); //--> Max Mustermann

// Über den html-Namen des input-Feldes Email bekomme ich das input-Feld aus diesem einen Formular:
console.log(myForm.email); //--> <input type="email" name="email" ......

// Über den html-Namen des input-Feldes Button + .value bekomme ich den value des input-Feld aus diesem einen Formular:
console.log(myForm.button.value); //--> Login

// ! NodeList
// Knotenpunkt, eine Sammlung von Knoten
// können alle Arten von DOM-Knoten enthalten
// können statisch oder live sein - abhängig vom Objekt
// index-basierend: das erste Elemente ist 0
// sind oft als Rückgabewerte von DOM-Methoden wie document.querySelectorAll() oder Node.childNodes enthalten
//* Der Browser wandelt die HTML-Tags der HTML-Datei in Objekte um, die mit JavaScript manipuliert werden können. Diese Objekte bilden das Document Object Model, welches wiederum aus einer Reihe von Objekten besteht, die als Eltern-Kind-Beziehungen strukturiert sind. Diese Objekte im DOM stellen Nodes dar, genauer gesagt bzw. noch tiefer betrachtet HTML Elemente (Elementknoten).

const liHTMLCollection = document.getElementsByTagName("li");
const liNodeList = document.querySelectorAll("li");
console.log(liHTMLCollection);
console.log(liNodeList);

// So bekomme ich das erste child-Elements des Body, in diesem Fall <form>:
console.dir(document.body.children[0]); //--> <form name="loginForm">......

// So bekomme ich die child-Elemente des ersten child-Elements des Body, in diesem Fall die <input> von <form>:
console.log(document.body.children[0].children); //--> HTMLCollection(3) [input, input, input, username: input, email: input, button: input]

// So bekomme ich die child-Elemente des zweiten child-Elements des Body, in diesem Fall die <li> von <ul>:
console.log(document.body.children[1].children); //--> HTMLCollection(3) [li, li, li]

// So kann ich in die HTML-Elemente hineinschreiben:
document.body.children[0].innerHTML +=
  "<p> Ich bin ein p-Tag dank NodeList im form-Tag </p>";
document.body.children[1].innerHTML +=
  "<p> Ich bin ein p-Tag dank NodeList im ul-Tag </p>";

// So kann ich CSS zu bestimmten HTML-Elementen hinzufügen, in diesem Fall werden die input-Felder pink bzw. grün:
document.body.children[0].children[0].style.backgroundColor = "pink";
document.body.children[0].children[1].style.backgroundColor = "lightgreen";

// ! firstElementChild & lastElementChild
// greift das erste bzw. letzte Child des ausgewählten Elements
console.log(document.body.firstElementChild); //--> form
console.log(document.body.lastElementChild); //--> script
console.log(document.body.children[1].firstElementChild); //--> li
console.log(document.body.children[0].lastElementChild); //--> p

// ! createElement, appendChild
// 1. erstelle ein Element deiner Wahl
let div = document.createElement("div");
// 2. erstelle den Text für das Element
div.textContent = "div hinzufügen mit createElement und appendChild";
// 3. styling des Elements
div.style.height = "50px";
div.style.backgroundColor = "red";
// 4. Element ins HTML einfügen
document.body.appendChild(div);

//! setAttribute()
// Syntax: setAttribute("attribute", "attribute-inhalt")
// Bild ins HTML einfügen
let image = document.createElement("img");
image.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/1088/1088537.png"
);
image.setAttribute("alt", "random img");
image.setAttribute("class", "random-class");
document.body.appendChild(image);

// Alternative mit innerHTML:
document.body.innerHTML += `<img class="hi" src="https://picsum.photos/200">`;

// ! setAttribute() und forEach()
let imgArry = [
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
];

// 1. Schleife erstellen
imgArry.forEach((element) => {
  // 2. erstellen vom img-Tag
  let img = document.createElement("img");
  // 3. src anpassen, dass alle array-Elemente als einzelne src gelesen werden:
  img.setAttribute("src", element);
  // 4. alt-Tag ergänzen
  img.setAttribute("alt", "alt Tag");
  // 5. Klasse hinzufügen
  img.setAttribute("class", "img-class");
  // 6. img im HTML ausgeben:
  document.body.appendChild(img);
});
