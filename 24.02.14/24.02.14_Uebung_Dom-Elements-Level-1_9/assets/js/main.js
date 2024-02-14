// - Lernziel: addEventListener(),selectedIndex und remove() verstehen und anwenden.
// - Dieses Mal sollst du eine Function schreiben, die beim Anklicken des Buttons die jeweilige Farb-Option aus der Liste entfernt.
// - HTML und CSS ist vorgegeben. Siehe (Code-Snippet).
// - Nutze: [addEventListener()](https://www.w3schools.com/jsref/met%5Fdocument%5Faddeventlistener.asp), [selectedIndex()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex) und [remove()](https://www.w3schools.com/jsref/met%5Felement%5Fremove.asp).

// 1. click-Element als Variable festlegen
// 2. select als Variable festlegen
// 3. addEventListener an click-Element-Variable binden
// 4. beim Klick ausgewählte option aus select löschen (remove())

const btn = document.querySelector("#button");
const selectColor = document.querySelector("#farbeAuswahlen");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  // console.log("läuft");
  // console.log(selectColor.value);

  selectColor.remove(selectColor.selectedIndex);
  // Folgendes geht auch:
  // selectColor.remove(selectColor.value);
});
