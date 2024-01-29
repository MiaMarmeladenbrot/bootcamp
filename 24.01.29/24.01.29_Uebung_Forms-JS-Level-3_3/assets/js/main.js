// - In dieser Aufgabe erstellst du einen ersten Background-Generator. Über ein Formular kannst du die Werte für "rot", "grün" und "blau" anpassen und die Hintergrundfarbe vom <body> verändert sich entsprechend.
// - Nutze drei <input>-Felder mit type="range" und gebe ihnen jeweils ein label.
// - Verwende in den <input>-Feldern: id | name | min | max | value | step
// - In allen <input>-Feldern soll die Funktion changeBackground() mit onChange aufgerufen werden.
// - Definiere in der Funktion changeBackground() neue value für "rot", "grün" und "blau".

function changeBackground() {
  const bgRot = document.querySelector("#rot");
  const bgGruen = document.querySelector("#gruen");
  const bgBlau = document.querySelector("#blau");

  const wrapper = document.querySelector(".wrapper");

  wrapper.classList.toggle("rot");
}
