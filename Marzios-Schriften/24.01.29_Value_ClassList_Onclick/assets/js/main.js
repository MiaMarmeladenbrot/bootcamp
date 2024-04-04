// # Wiederholung

// - Wie kann ich checkn ob es richtig eingebunden ist?
// console.log(44);

// - Ich möchte mir ein element selektieren mit der class "wdh" wie kann ich das machen?
const wiederholung = document.querySelector(".wdh");

// - Welche Datentypen kennen wir?
// Number, String, Boolean

// - Was ist der unterschied zwischen == und ===?
// == nur Wert
// === Wert und Datentyp

// - <, <=, >, >= Was kann ich damit machen?
// < kleiner, <= kleiner gleich, > größer, >= größer gleich

// - Warum mögen wir den querySelector ?
// vielseitig einsetzbar. ID, klasse, und html Tags

// - Wo ist der unterschied, zwischen innerHTML und document.write()
// write() schiebt das html element immer ans ende. InnerHTML können wir gezielt element wo platzieren

// - Wie heißt das keyword mit dem wir in js einzelen werte stylen können?
// .style

// - Wie schreibe ich die CSS eigenschaften in JS?
// fontSize
// CSS => background-color // JS => backgroundColor

// -  was ist eine Funktion?
// ein Aufgabenaufruf -> zb. Bitte mach erst ein console.log() dan addiere mir zwei zahlen

// - Was sind Parameter?
// Parameter sind Platzhalter um eine funktion wiederverwendbarer zu machen

// # NEUES THEMA

// ! Values Auslesen
// Form => onsubmit
// Button, h1,h2 etc => onClick

function getInputValueMarzio(event) {
  event.preventDefault(); // Verhindet das die seite neu geladen wird

  // mit .value lesen wir die daten von input aus.

  // name
  const marziosName = document.querySelector("#name").value;

  // age
  const marziosAge = document.querySelector("#age").value;

  // range
  const marziosRange = document.querySelector("#range").value;

  // checkbox -> muss über .checked ausgelesen werden
  const marziosHappyniss = document.querySelector("#check").checked;

  // date
  const marziosBday = document.querySelector("#bday").value;

  //   console.log(
  //     marziosName,
  //     marziosAge,
  //     marziosRange,
  //     marziosBday,
  //     marziosHappyniss
  //   );

  const outputMarzio = document.querySelector(".output-form");

  outputMarzio.innerHTML =
    marziosName +
    " " +
    marziosAge +
    " " +
    marziosRange +
    " " +
    marziosBday +
    " " +
    marziosHappyniss;
}

// ! Add, Remove, Toggle Klassen
// mit classList haben wir die möglichkeit klassen hinzuzufügen abziehen und zu toggeln
// wenn ich classList benutze, muss ich kein . vor der klasse schrieben da js schon weiss das es sich hier um klassen handelt => (Class)List

// * Add
function addClass() {
  // class => super-big

  const addClassMarzio = document.querySelector(".add");

  // mit .add fügen wir die klasse super-big hinzu
  addClassMarzio.classList.add("super-big");
}

// * Remove
function removeClass() {
  // class => super-crazy

  const removeClassMarzio = document.querySelector("footer h3");

  removeClassMarzio.classList.remove("super-crazy");
}

// * Toggle
function darkLight() {
  // class => dark

  const wrapper = document.querySelector(".wrapper");

  //   "dark" => css klasse
  wrapper.classList.toggle("dark");
}
