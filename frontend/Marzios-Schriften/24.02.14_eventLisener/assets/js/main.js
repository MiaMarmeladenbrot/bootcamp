// ! onclick()

const sayHallo = (a) => {
  console.log("hi");

  console.log(a);
};

//  ! EventLisener()
const halloOutput = document.querySelector("#hello-output");
const sayHiBtn = document.querySelector("#say-hi-btn");
const textInput = document.querySelector("#text-input");
const selectInput = document.querySelector("#select-input");
const submitBtn = document.querySelector("#submit-btn");
const paramBtn = document.querySelector("#param");

// Aufbau
// - 1. Welche Element soll beobachtet werden (ich muss ja JS sagen auf welches Element er die ganze zeit ein auge haben soll. Deswegen muss ich mir eine Variable erstellen die er dann die ganze zeit beobachtet)
// * sayHiBtn

// - 2. Eventlisiner hinzufügen
// * sayHiBtn.addEventListener()

// - 3. Event definieren
// * sayHiBtn.addEventListener("click")

// Neue schreibweise
// - 4. Definieren was bei dem Event passieren
sayHiBtn.addEventListener("click", () => {
  halloOutput.innerHTML = "Hallo vom Event";
});

// Alte schriebweise
// sayHiBtn.addEventListener("click", function () {
//   halloOutput.innerHTML = "Hallo vom Event";
// });

// * === Mouseover ===
// Die Maus wird auf das Element bewegt
textInput.addEventListener("mouseover", () => {
  //   console.log("Die Maus wurde über mich bewegt");
  textInput.style.border = "3px solid red";
});

// * === Mouseout ===
// Die Maus bewegt sich raus
textInput.addEventListener("mouseout", () => {
  //   console.log("Die Maus wurde raus bewegt");
  textInput.style.border = "3px solid blue";
});

// * === Chance ===
// Wenn sich der zustand verändert
selectInput.addEventListener("change", () => {
  console.log("Option Feld wurde geändert");
  halloOutput.innerHTML = selectInput.value;
});

// ! Externen EventListener
// Wie können die Funktuion auch auslagern, damit wir das genereller halten können

// - 1 Funktion Schreiben
// Hier erstellen wir eine funktion wie wir es bereits kennen. Wir sagen was im Funktionskörper alles passieren soll...
const inputFuc = () => {
  console.log("in mich wurde was eingetragen");
  halloOutput.innerHTML = textInput.value;
};

// * === Input ===
// - Funktion anwenden
// Hier rufen wir im eventListener die funktion auf wenn ein input in unserem textfeld getätigt wurde
// INFO - Bei dem funktionsaufruf dürfen wir keine Parameterklammern hinzufügen. Parameter werden im context mit eventlistener anders hinzugefügt.
textInput.addEventListener("input", inputFuc);

// ! Remove

// inputFuc / textInput -> diese funktion möchte ich nun nach dem klciken auf submit wegnehmen
submitBtn.addEventListener("click", (event) => {
  // verhindert das neuladen der Seite...
  event.preventDefault();
  console.log("es wurde submit geklickt, EventListener wurder Removed");

  //  Wie könnne auich ein event wieder "removen" (löschen)
  //  WICHTIG: Das geht nur, wenn wir die Funktion Auslagern (zeile 73).
  textInput.removeEventListener("input", inputFuc);
});

// ! Paramet im Eventlisener

// * So geht es leider nicht
// const parameterFunk = (a, b) => {
//   console.log(a, b);
// };

// paramBtn.addEventListener("click", parameterFunk("Kuchen", "Trinken"));

// * So geht es !
// ich erstelle eine Callback funktion, die eine Funktion aufruft und die Parameter übergibt
paramBtn.addEventListener("click", () => {
  // Hier werden die Parameter übergeben
  parameterAbfragenMarzio("Auto", "Haus");
});

// Funktion mit Parameter
const parameterAbfragenMarzio = (a, b) => {
  console.log(a, b);
};
