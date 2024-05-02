// - Schreibe eine kleine App, die die Hintergrundfarbe deiner Webseite ändert. Schaue dir die Vorschau an und versuche es umzusetzen.
// - HTML und CSS befinden sich im Code-Snippet.

// 1. Variable für body festlegen
// 2. Variable für Farb-Buttons festlegen (ul/li)
// 3. addEventListener mit click für Farb-Buttons anlegen
// 4. Funktion, mit der sich die Farbe des Body ändert (wenn grau angeklickt wird, grau, wenn blau angeklickt wird, blau, etc. )

const body = document.querySelector("body");

// Einzelne li-Elemente:
const grauTaste = document.querySelector("#grauTaste");
const weissTaste = document.querySelector("#weissTaste");
const blauTaste = document.querySelector("#blauTaste");
const gelbTaste = document.querySelector("#gelbTaste");

// ! Lösung mit 4 einzelnen Event Listenern:
// Event Listener für jedes li-Element:
grauTaste.addEventListener("click", () => {
  body.style.backgroundColor = "gray";
});

weissTaste.addEventListener("click", () => {
  body.style.backgroundColor = "white";
});

blauTaste.addEventListener("click", () => {
  body.style.backgroundColor = "blue";
});

gelbTaste.addEventListener("click", () => {
  body.style.backgroundColor = "yellow";
});

// ! Lösung mit zweiter Funktion und Funktionsaufruf in den Event Listenern:
const changeColor = (color) => {
  body.style.backgroundColor = `${color}`;
};

// Event Listener für jedes li-Element:
grauTaste.addEventListener("click", () => changeColor("gray"));
weissTaste.addEventListener("click", () => changeColor("white"));
blauTaste.addEventListener("click", () => changeColor("blue"));
gelbTaste.addEventListener("click", () => changeColor("yellow"));

// ! Nur via ul-Tag?
// const umschalter = document.querySelector("#umschalter");

// umschalter.addEventListener("click", () => {
//    body backgroundcolor muss gleich umschalter.value sein?
//    body.style.backgroundColor = `${color}`;

//     console.log("läuft");
//     console.log(umschalter.getAttribute("value"));
//   });
