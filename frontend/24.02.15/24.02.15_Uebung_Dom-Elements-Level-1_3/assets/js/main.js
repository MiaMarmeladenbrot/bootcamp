// - Schreibe eine Funktion, die beim Anklicken der Buttons jeweils den Inhalt der Elemente anzeigt. Schau dir das Ergebnis in der Ergebnisvorschau an.
// - Den HTML- und CSS-Code findest du im Code-Snippet.
// - Nutze: firstElementChild, lastElementChild, nextElementSibling, previousElementSibling, innerHTML, querySelectorAll, querySelector und addEventListener.

// 1. Variable für Buttons-div
// 2. Variable für Output
// 3. Variable für Liste
// 4. Event Listener für jeden Button

const list = document.querySelector("#myList");
const buttons = document.querySelector(".unten");
const output = document.querySelector("output");
// console.log(buttons);
// console.log(output);
// console.log(list);

//* erster Button: firstElementChild:
buttons.firstElementChild.addEventListener("click", () => {
  console.log("erster Button geht");
  output.innerHTML = list.firstElementChild.textContent;
});

//* zweiter Button: lastElementChild:
buttons.firstElementChild.nextElementSibling.addEventListener("click", () => {
  console.log("zweiter Button geht");
  output.innerHTML = list.lastElementChild.textContent;
});

// console.log(buttons.lastElementChild.previousElementSibling);

//* dritter Button: firstElementChild nextElementSibling:
buttons.lastElementChild.previousElementSibling.addEventListener(
  "click",
  () => {
    console.log("dritter Button geht");
    output.innerHTML = list.firstElementChild.nextElementSibling.textContent;
  }
);

//* vierter/letzter Button: lastElementChild previousElementSibling:
buttons.lastElementChild.addEventListener("click", () => {
  console.log("vierter/letzter Button geht");
  output.innerHTML = list.lastElementChild.previousElementSibling.textContent;
});
