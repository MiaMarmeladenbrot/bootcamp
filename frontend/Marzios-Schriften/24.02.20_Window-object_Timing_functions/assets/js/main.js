// # ===== Window Object =====
// das window obejct representiert das geöffnetet Fenster in Browser
// mit JS können wir auf das Browserfenster zugfreifen wie zb hohe / breite / url

// "window" kann immer weggelassen werden. Geht dennoch
console.log(window);

// ! width & height

// *innerWidth
// Werte sind in px
// Browserzeil und Devtools sind nicht einbegriffen
console.log("innerWidth", window.innerWidth);

// *innerHeight
// Werte sind in px
// Browserzeil und Devtools sind nicht einbegriffen
console.log("innerHeight", window.innerHeight);

// * outerHeight
// Große des Fenster mit allen Elemente wir Browserzeile und Devtools
console.log("outerHeight", window.outerHeight);

// * outerWidth
// Große des Fenster mit allen Elemente wir Browserzeile und Devtools
console.log("outerWidth", window.outerWidth);

// ! Location

// * location
// die URL Adresse der aktuellen Seite
console.log("location", window.location);

// * so bekommen wir die Domain zurück
console.log(window.location.host);

// * so bekommen wir den Pfad zurück
// / ist immer die startseite
// https://www.super-code.de/ => /
// https://www.super-code.de/microcamps => /microcamps
// https://www.super-code.de/team => /team
console.log("pathname", window.location.pathname);

// ! Screen

// Das Screen Object befindet sich im Window Object. Es gibt uns informationen über den Bildschrim / Monitor, auf dem das Browserfenster geöffnet ist
console.log("screen", window.screen);

// * screen.height
// Wir bekommen die höhe zurück in px -> gesamte Höhe mit Taskleistes
console.log("screen.height", window.screen.height);

// * screen.width
// Wir bekommen die breite zurück in px -> gesamte Höhe mit allem
console.log("screen.width", window.screen.width);

// * screen.availHeight
// So bekommen wir die höhe ohne Taskleiste zb
console.log("screen.availHeight", window.screen.availHeight);

// * screen.availWidth
// So bekommen wir die breite ohne Taskleiste zb
console.log("screen.availWidth", window.screen.availWidth);

// ! === Window Methoden ===

// * window.alert()
// es öffnet sich eine Popup in dem ein text steht
// window.alert("Hallo");

// * window.prompt()
// es öffnet sich ein Popup in dem ich ein text eingeben kann
// window.prompt("Hallo Leute");

// *  window.prompt() value auslesen
// let promptAnswer = window.prompt("Zahl von 1 - 10 ?");
// console.log(promptAnswer);

// * window.open
// damit können wir eine andere seite öffnen lassen
// dafult wird die seite immer in einen neuen Tab geöffnet
// ACHTUNG: wir können nichtmehr den pfeil zurück benutzen
// window.open("https://www.super-code.de/");

// - öffnet sich im selben Tab
// window.open("https://www.super-code.de/", "_self");

// - öffnet sich auch im neuen Tab
// window.open("https://www.super-code.de/", "_blank");

// * window.onload
// Wenn die Seite komplett geladen wurde, dann soll was passeiren
window.onload = console.log("Seite wurde nun geladen");

// * window.scollTo
// mit window.ScrollTo können wir zu einen bestimmt Punkt der Seite scrollen

// - Version 1 (eventlistener direkt anwenden)
document.querySelector(".scroll").addEventListener("click", () => {
  // 1. Wert in px x Achse
  // 2. Wert in px Y Achse
  window.scrollTo(0, 1000);
});

// - Version 2 (eine Variable erstellt mit dem Btn)
let scrollBtn = document.querySelector(".scroll");

scrollBtn.addEventListener("click", () => {
  console.log("hi von der Variable");
});

// * window.location.reload()
// damit können wir die akutelle seite neu laden lassen
document.querySelector(".reload").addEventListener("click", () => {
  window.location.reload();
});

// * window.location.replace()
// wir können auf eine adere ulr weiterleiten
document.querySelector(".weiterleiten").addEventListener("click", () => {
  window.location.replace("https://www.super-code.de/");
});

// * history.back()
// So können wir uns ein zurück btn machen
document.querySelector(".back").addEventListener("click", () => {
  history.back();
});
console.log(history);

// # === JS Timing Events ===
console.clear();

// * setTimeout(Funktion, Millisekunden)
// führt eine Funktion erst nach bestimmten Millisekunden aus

// * setIntervall(Funktion, Millisekunden)
// die funktion wird immer nach X millisekunden ausgeführt

const konsolenAusgabe = () => {
  console.log("hier steht was in der console");
};

const konsolenAusgabeLöschen = () => {
  console.clear();
  console.log("Konsole wurde gelöscht");
};

// ! setTimeout
//- Wert 1: Welche funktion soll ausgeführt wertden
//- Wert 2: Nach wievielen Sekunden soll die Funktion ausgeführt werden

// setTimeout(konsolenAusgabe, 2000); //hier wird nach 2 sek etwas in der konsole geschriben
// setTimeout(konsolenAusgabeLöschen, 4000); //nach 4sek wird die console gelöscht

// ! setInterval
// setInterval(konsolenAusgabe, 1000);

// ! clearInteval
// löscht den interval wieder
// - WICHTIG: wir müssen das setinterval in einer Variable speicher, damit wir das später wieder löschen können

// const intervalMarzio = setInterval(konsolenAusgabe, 1000);

// Hier wir der intervall gelöscht
document.querySelector(".interval").addEventListener("click", () => {
  clearInterval(intervalMarzio);
});

// ! so können wir eine set intervall acuih in einer Callback fkt. schreiben

// // Neu
// setInterval(() => {
//   console.log("Hellöchen");
// }, 1000);

// // Alt
// setInterval(function () {
//   console.log("Servus");
// }, 1000);

// # Countdown

const startButton = document.querySelector(".goBtn");
const coutdownDisplay = document.querySelector(".output");

startButton.addEventListener("click", () => {
  // Holt das Value und wandelt in num um
  let inputVal = Number(document.querySelector(".input-value").value);

  // Holt uns den output
  coutdownDisplay.innerHTML = inputVal;

  // Erstellt eine intavall mit dem Name intervallTimer was alle 1000ms ausgeführ wird
  const intervalTimer = setInterval(() => {
    // Hier wird dann immer ein runtergezählt
    inputVal--;

    // schrieben es in das html
    coutdownDisplay.innerHTML = inputVal;

    // Abfrage ob 0 erreicht worden ist, wenn ja soll der interval resetet werden
    if (inputVal <= 0) {
      clearInterval(intervalTimer);
      coutdownDisplay.innerHTML = "Finito Freunde";
    }
  }, 1000);
});
