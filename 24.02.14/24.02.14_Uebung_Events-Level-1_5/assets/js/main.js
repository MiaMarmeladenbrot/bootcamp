// - In dieser Übung wirst du dich weiter mit [JS Events](https://www.w3schools.com/js/js%5Fevents.asp) beschäftigen.
// - Schreibe eine Funktion, die einen Klickzähler hochzählt, wenn du auf einen Button klickst.
// - Der HTML und CSS Code befindet sich im Code-Snippet.
// - Nutze getElementById(), Anzahl = 0; (es ist wichtig, hier zu initiieren!), Anzahl += 1; und innerHTML.

const countBtn = document.querySelector("#clickMe");
let anzahl = 0;

countBtn.addEventListener("click", () => {
  anzahl += 1;

  countBtn.innerHTML = `Click me: ${anzahl}`;

  console.log("geklickt");
});
