// ! Window Object
// repräsentiert den ganzen Browser
// mit JS können wir so auf das Browserfenster zugreifen, wie zB Höhe, Breite oder URL
console.dir(window); //--> Window Object

// * innerHeight & innerWidth
// Höhe und Breite des Fensters, nur der nutzbare Bereich, der verfügbare Platz, das weiße Fenster
// dev-Tools und Scrollleiste sind nicht inkludiert, Höhe/Breite endet dort, wo dev-Tools anfangen
// Werte in px
console.log("innerHeight:", window.innerHeight); //--> innerHeight: 217
console.log("innerWidth:", window.innerWidth); //--> innerWidth: 500

// * outHeight & outerWidth
// Höhe und Breite des Fenster inkl. dev-Tools und Scrollleiste
console.log("outerHeight:", window.outerHeight); //--> outerHeight: 801
console.log("outerWidth:", window.outerWidth); //--> outerWidth: 500

// * location
// ein Objekt im window-Objekt
console.dir(window.location); //--> Location Object
// URL/Domain abfragen:
console.log("host:", window.location.host); //--> 127.0.0.1:49225
// Pfad abfragen:
// Startseite ist im Pfad nur ein /
console.log("pathname:", window.location.pathname); //--> /24.02.20/24.02.20_Kurs_Browser-Object/index.html

// * screen
// Objekt im Window-Objekt
// gibt Infos über den Bildschirm/Monitor, auf dem das Browserfenster geöffnet ist
console.dir(window.screen); //--> Screen Object

// * screen.heigth & screen.width
// komplette Höhe und Breite des gesamten Bildschirms
console.log("screen height:", window.screen.height); //--> screen height: 900
console.log("screen width:", window.screen.width); //--> screen width: 1440

// * screen.availHeight & screen.availWidth
// gibt die verfügbare Höhe/Breite an, zB ohne die Taskleiste beim Mac
console.log("screen available height:", window.screen.availHeight); //--> screen available height: 801
console.log("screen available width:", window.screen.availWidth); //--> screen available width: 1440

// ! Window Methoden
// * window.alert
// öffnet ein Pop-up-Fenster
// - window.alert("Hallo");

// * window.prompt
// öffnet ein Pop-up, in dem ich einen Text eingeben kann
// - window.prompt("Erzähl mir was");
// Input kann ohne value ausgelesen und gespeichert werden, window.prompt muss dafür aber in einer Variable gespeichert sein:
// - let promptInput = window.prompt("Zahl von 1 bis 10");
// - console.log(promptInput);

// * window.open
// öffnet eine andere Seite
// default in neuem Tab öffnen:
// - window.open("https://www.super-code.de/");
// öffnet andere Seite im selben Tab
// kann aber dann nicht mehr auf ursprüngliche URL zurück
// - window.open("https://www.super-code.de/", "_self");
// öffnet andere Seite in neuem Tab (ist aber auch schon default)
// - window.open("https://www.super-code.de/", "_blank");

// * window.onload
// wenn die Seite komplett geladen ist, wird etwas ausgeführt
window.onload = console.log("Seite wurde geladen");

// * window.scrollTo
// scrollt zu einem bestimmten Punkt der Seite
// nützlich für back-to-top-Button?
// Marzio würde trotzdem für zB Inhaltsverzeichnis HTML/CSS-Version nutzen und direkt zu den jeweiligen Ids scrollen lassen, da sich die px je nach Bildschirm ändern können
document.querySelector(".scroll").addEventListener("click", () => {
  // 1. Wert in px = x-Achse
  // 2. Wert in px = y-Achse
  window.scrollTo(0, 1000);
  // default springt schlagartig an diesen Punkt; um es eleganter zu machen, im CSS fürs HTML scroll-behavior: smooth einstellen
});

// * window.location.reload()
// lädt die aktuelle Seite neu
// ist aber bisschen Pfusch
document.querySelector(".reload").addEventListener("click", () => {
  window.location.reload();
});

// * window.location.replace()
// leitet auf eine andere URL weiter
// kann aber dann nicht mehr auf ursprüngliche URL zurück
document.querySelector(".replace").addEventListener("click", () => {
  window.location.replace("https://www.super-code.de/");
});

// * history.back()
// nützlich für Zurück-Button
// geht zurück auf die zuletzt benutzte Seite
// gibt keinen Zugriff auf den Pfad, das ist intern aber irgendwo gespeichert
document.querySelector(".back").addEventListener("click", () => {
  history.back();
});
// ist eigentlich Teil vom history Object:
console.dir(history);

// ! JS Timing Events
console.clear();

// Beispiel-Funktionen für die Timing Events:
const konsolenAusgabe = () => {
  console.log("Inhalt Konsole");
};

const konsolenAusgabeLoeschen = () => {
  console.clear();
  console.log("Konsole wurde gelöscht");
};

// * setTimeout(Funktionsnamen, Millisekunden)
// führt eine Funktion erst nach x Millisekunden aus
// verzögert Funktion einmalig
// 1. Wert => Welche Funktion soll ausgeführt werden?
// 2. Wert => Wann soll die Funktion ausgeführt werden?
// - setTimeout(konsolenAusgabe, 2000); //--> Funktion greift nach 2 Sekunden
// - setTimeout(konsolenAusgabeLoeschen, 4000); //--> Funktion greift nach 4 Sekunden

// * setInterval(Funktionsnamen, Millisekunden)
// führt eine Funktion immer wieder nach x Millisekunden aus
// wiederholt eine Funktion in bestimmten Abständen
// - setInterval(konsolenAusgabe, 1000); //--> Funktion wird alle 2 Sekunden ausgeführt

// * clearInterval()
// löscht Intervall wieder
// WICHTIG: setIntervall() muss dafür in einer Variable gespeichert worden sein
// - const intervalMarzio = setInterval(konsolenAusgabe, 1000);

//- document.querySelector(".interval").addEventListener("click", () => {
//   -clearInterval(intervalMarzio);
//- }); //--> stoppt das Intervall

// * setIntervall() mit Callback-Function
// Neue Schreibweise:
// - setInterval(() => {
// -  console.log("setIntervall() in Callback-Function, neue Schreibweise");
// -}, 1000);

// alte Schreibweise:
// - setInterval(function () {
// -  console.log("setIntervall() in Callback-Function, neue Schreibweise");
// -}, 1000);

// ! Countdown
const startBtn = document.querySelector(".goBtn");
const countdownOutput = document.querySelector(".output");

startBtn.addEventListener("click", () => {
  // Input-Value als Number auslesen:
  let inputValue = Number(document.querySelector(".input-value").value);

  // Startwert im HTML ausgeben:
  countdownOutput.innerHTML = inputValue;

  // startet ein Intervall, in dem jede Sekunde -1 vom Ursprungswert abgezogen wird:
  const intervalTimer = setInterval(() => {
    // inputValue immer -1:
    inputValue--;
    // Folgewerte im HTML überschreiben:
    countdownOutput.innerHTML = inputValue;
    // wenn 0 erreicht ist, stoppt Intervall und gibt Ende im HTML aus:
    if (inputValue <= 0) {
      clearInterval(intervalTimer);
      countdownOutput.innerHTML = "Finito, Freunde!";
    }
    // jede Sekunde, Angabe in Millisekunden:
  }, 1000);
});
