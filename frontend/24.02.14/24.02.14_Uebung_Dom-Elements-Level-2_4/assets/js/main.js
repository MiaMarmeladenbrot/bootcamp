// - Schreibe eine Funktion, die beim Anklicken des Buttons die ausgewählte Farboption auf den Hintergrund des <body> anwendet.
// - Verwende den Code aus dem Code-Snippet.
// - Verwende folgende Befehle für die Aufgabe: addEventListener(“click”), event.preventDefault(); und .value oder [selectedIndex](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex).
// - Nutze Google, um zu lernen wie man Leerzeichen in Zeichenketten entfernt.

// 1. Variable für verknüpften Button anlegen
// 2. Variable für den body anlegen
// 3. Variable für select anlegen (userInput)
// 4. Event Listener an Button knüpfen
// 5. Funktion ausführen, die value vom select als Farbe nimmt

const btn = document.querySelector("#button");
const body = document.querySelector("body");
const farbe = document.querySelector("#farbeAuswahlen");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("läuft");
  // body.style.backgroundColor = "pink";
  console.log(farbe.value.toLowerCase().split(" ").join(""));

  body.style.backgroundColor = farbe.value.toLowerCase().split(" ").join("");
});
