// # Wiederholung
// * Test, ob JS richtig verbunden ist
// console.log(2);

// * Wie selektiere ich eine Klasse namens wdh?
const wiederholung = document.querySelector(".wdh");

// * Welche Datentypen kennen wir?
// number, string, boolean

// * Was ist der Unterschied zw. == und ===?
// == vergleicht Wert
// === vergleicht Wert und Datentyp

// * <, <=, >, >=
// kleiner, kleiner gleich, größer, größer gleich
// vergleicht 2 Werte miteinander

// * Vorteile vom querySelector
// vielseitig einsetzbar für alle Elemente

// * Unterschied zw. innerHTML und document.write()
// write() schiebt das html-Element immer ans Ende des Dokuments
// innerHTML können wir gezielt Elemente platzieren

// * Wie heißt das keyword, mit  dem wir in JS einzelne Werte stylen können?
// .style

// * Wie schreibe ich CSS Eigenschaften?
// in camelCase, zB fontSize

// * Was ist eine Funktion?
// ein Aufgabenaufruf, zB "Bitte mach erst ein console.log(), dann addiere mir zwei Zahlen"

// * Was sind Parameter?
// Platzhalter, um zB Funktionen wiederverwendbarer zu machen

// # Neues Thema
// ! Values auslesen
// form = onsubmit
// button, h1, h2, etc = onclick
function getInputValueMarzio(event) {
  // um zu prüfen, ob die Funktion feuert, einmal console.log reinschreiben und testen, danach kann man console.log wieder löschen:
  // console.log("form wurde ausgelöst");

  // Neuladen bei Klick auf submit verhindern:
  event.preventDefault();
  // event ist kein richtiger Paramter
  // event funktioniert nur im Formular

  // hier nutzen wir ausnahmsweise ID, weil wir wegen der Verknüpfung von label und input sowieso schon eine ID angelegt haben:
  // * mit .value lesen wir die Daten des Input-Feldes aus:
  //  name:
  const marziosName = document.querySelector("#name").value;

  //  age:
  const marziosAge = document.querySelector("#age").value;

  //  range
  const marziosRange = document.querySelector("#range").value;

  //  checkbox --> wird über check ausgelesen
  const marziosCheckbox = document.querySelector("#happy").checked;

  //  date
  const marziosBday = document.querySelector("#bday").value;

  //   checken, ob alles passt und console.log danach wieder löschen:
  //   console.log(
  //     marziosName,
  //     marziosAge,
  //     marziosRange,
  //     marziosCheckbox,
  //     marziosBday
  //   );

  const marziosOutput = document.querySelector(".output-form");

  marziosOutput.innerHTML =
    marziosName +
    " " +
    marziosAge +
    " " +
    marziosRange +
    " " +
    marziosCheckbox +
    " " +
    marziosBday;
}

// ! Add, remove, toggle classes
// mit classList können wir Klassen hinzufügen, entfernen oder toggeln
// sobald ich eine Funktion hinzufüge, damit etwas onclick passiert, curser auf pointer setzen, damit der User sieht, dass beim Klick etwas passiert

// * add
function addClass() {
  // class = super-big
  // ich deklariere zuerst das Element, in dem ich eine Klasse hinzufügen will; entweder mit einer eigenen Klasse oder Pseudklasse (footer h2):
  const addClassMarzio = document.querySelector(".add");

  // mit classList.add fügen wir Klassen hinzu, dann ohne Punkt davor, da schon klar ist, dass es um Klassen geht:
  addClassMarzio.classList.add("super-big");
}

// * remove
function removeClass() {
  // class = super-crazy
  const removeClassMarzio = document.querySelector("footer h3");

  removeClassMarzio.classList.remove("super-crazy");
}

// * toggle
// add + remove; wie ein Lichtschalter
function darkLight() {
  const wrapper = document.querySelector(".wrapper");

  wrapper.classList.toggle("dark");
}
