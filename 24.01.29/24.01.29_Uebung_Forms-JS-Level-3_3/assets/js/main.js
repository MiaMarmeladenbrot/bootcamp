// - In dieser Aufgabe erstellst du einen ersten Background-Generator. Über ein Formular kannst du die Werte für "rot", "grün" und "blau" anpassen und die Hintergrundfarbe vom <body> verändert sich entsprechend.
// - Nutze drei <input>-Felder mit type="range" und gebe ihnen jeweils ein label.
// - Verwende in den <input>-Feldern: id | name | min | max | value | step
// - In allen <input>-Feldern soll die Funktion changeBackground() mit onChange aufgerufen werden.
// - Definiere in der Funktion changeBackground() neue value für "rot", "grün" und "blau".

function changeBackground() {
  const bgRot = document.querySelector("#rot").value;
  const bgGruen = document.querySelector("#gruen").value;
  const bgBlau = document.querySelector("#blau").value;

  const wrapper = document.querySelector(".wrapper");

  wrapper.style.backgroundColor =
    "rgb(" + bgRot + "," + bgGruen + "," + bgBlau + ")";
}

// * Lösung von Tobi:
// function changeBackground() {
//   const red = document.querySelector("#red").value;
//   const green = document.querySelector("#green").value;
//   const blue = document.querySelector("#blue").value;

//   console.log(red, green, blue);

//   const farbe = `rgb(${red}, ${green}, ${blue})`
//   console.log(farbe);

//   //rbg(0, 0, 0);
//   document.querySelector("body").style.backgroundColor = farbe;
//   document.querySelector("body").style.color = "#FFFFFF";
// }

// changeBackground();
