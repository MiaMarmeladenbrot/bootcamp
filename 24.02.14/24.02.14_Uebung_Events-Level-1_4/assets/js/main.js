// - In dieser Übung sollst du den [addEventListener()](https://www.w3schools.com/jsref/met%5Felement%5Faddeventlistener.asp) nutzen, um beim Anklicken des Paragraphens eine Nachricht in der Konsole auszugeben.
// - Schreibe mit den Befehlen Click Here, addEventListener(), click, function, console.log("Du hast auf den Event-Paragraphen geklickt."); und getElementById() eine Funktion dazu.

const clickP = document.querySelector("p");

clickP.addEventListener("click", () => {
  console.log("Du hast auf addEventListener geklickt");
});
