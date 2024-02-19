// # Date Object
// digitale Uhr wurde am 1.1.1970 gestartet; ist das erste Datum
// ist ein Objekt, aber ohne keys
// bei console.dir sieht man zB auch nur die Methoden, man kann nicht direkt zu Tag navigieren oä

// ! Date Methods
// * new Date()
// zeigt ohne Parameter die beim Laden aktuelle Zeit an
// orientiert sich an Zeit, die im ladenden Computer eingestellt ist
// kann also auch manipuliert werden
// idealerweise verknüpft man eine API
let date1 = new Date();
console.dir(date1);
console.log(typeof date1);

// * new Date() mit Parametern
// dann wird ein Objekt erstellt mit den durchgereichten Zeiten
// man fixiiert so ein bestimmtes Datum
// Jahr, Monat (ab 0 zählen), Tag, Stunde, Minute, Sekunde
let date2 = new Date(1993, 3, 10, 16, 12, 13);
console.log(date2);

// * Daten subtrahieren
// beim Daten voneinander Subtrahieren, kommen Millisekunden heraus, die man von Datum 1 bis Datum 2 gebraucht hat
// gibt eine Number zurück
let date3 = date1 - date2;
console.log(date3); //--> 973879226473
// Millisekunden müssen also umgerechnet werden:
// Millisekunden / (Tagesstunden * Stundenminuten * Minutensekunden * Sekundenmillisekunden)
let tage = date3 / (24 * 60 * 60 * 1000);
console.log(tage); //--> 11271.751717835648
console.log(Math.round(tage)); //--> 11272

// * toString()
// in string umwandeln, um zB string-Methoden darauf anwenden zu können
let date4 = date2.toString();
console.log(typeof date4);
console.log(date4.toLowerCase());

// * toUTCString()
// gibt ein Datum in UTC Zeit zurück
// UTC Universal Coordinated Clock
// Standard bei Weltuhren
// wandelt in string um
let date5 = date2.toUTCString();
console.log(date5);
console.log(typeof date5);

// * toLocaleDateString()
// gibt ein Datum in einer lokaler Darstellung zurück
// orientiert sich an Zeitzone, die im Computer eingestellt ist
// wandelt in string um
let date6 = new Date().toLocaleDateString();
console.log(date6);

// * toLocaleString()
// gibt Datum und Uhrzeit in einer lokaler Darstellung zurück
// orientiert sich an Zeitzone, die im Computer eingestellt ist
// wandelt in string um
let date7 = new Date().toLocaleString();
console.log(date7);

// ! Methoden, um einzelne Datumswerte auszugeben:
// * getFullYear()
// gibt nur das Jahr zurück
// gibt eine Number zurück
// praktisch zB für Copyright im Footer (1995 - 2024)
let date8 = new Date().getFullYear();
console.log(date8);

// * getMonth()
// gibt nur den Monat zurück
// gibt eine Number zurück
// Monate werden ab 0 gezählt, Januar ist also 0, Februar 1, etc.
let date9 = new Date().getMonth();
console.log(date9); //--> 1 => Februar

// * getDate()
// gibt nur den Tag zurück
// gibt eine Number zurück
let date10 = new Date().getDate();
console.log(date10); //--> 19

// * getHours()
// gibt nur die Stunde zurück
// gibt eine Number zurück
let date11 = new Date().getHours();
console.log(date11); //--> 9

// * getMinutes()
// gibt nur die Minute zurück
// gibt eine Number zurück
let date12 = new Date().getMinutes();
console.log(date12); //--> 31

// * getSeconds()
// gibt nur die Sekunde zurück
// gibt eine Number zurück
let date13 = new Date().getSeconds();
console.log(date13); //--> 22

// * getMilliseconds()
// gibt nur die Millisekunde zurück
// gibt eine Number zurück
let date14 = new Date().getMilliseconds();
console.log(date14); //--> 990

// * Wochentag ausgeben lassen
// Name des Wochentags ausgeben lassen
let dateName = new Date();
let weekDay = dateName.toLocaleString("default", { weekday: "long" });
// default bezieht sich auf PC-Einstellungen, kann auch Sprachcodes verwenden, um Ergebnis zB in Saudi-Arabisch ("ar-SA") oder British English ("en-GB") ausgeben zu lassen; https://www.w3schools.com/jsref/jsref_tolocalestring.asp
// long = Montag
// short = Mo
// narrow = M
console.log(weekDay); //--> Montag

// ! Methoden, um einzelne Werte zu ändern:
const ueberschreiben = new Date();
console.log(ueberschreiben);

// * setDate()
// Tag überschreiben
ueberschreiben.setDate(20);
console.log(ueberschreiben); //--> 19 => 20

// * setMonth()
// Monat überschreiben
// Achtung: Monat zählt ab 0=Januar bis 11=Dezember
ueberschreiben.setMonth(0);
console.log(ueberschreiben); //--> Feb => Jan

// * setFullYear()
// Jahr überschreiben
ueberschreiben.setFullYear(2000);
console.log(ueberschreiben); //--> 2024 => 2000

// # Beispiele
// ! Öffnungszeiten je nach Aktualität stylen
const date = [
  { day: "Montag", time: "9:00 - 18:00" },
  { day: "Dienstag", time: "9:00 - 18:00" },
  { day: "Mittwoch", time: "9:00 - 18:00" },
  { day: "Donnerstag", time: "9:00 - 18:00" },
  { day: "Freitag", time: "9:00 - 18:00" },
  { day: "Samstag", time: "9:00 - 12:00" },
  { day: "Sonntag", time: "geschlossen" },
];

const outputData = document.querySelector(".oeffnungszeiten");

let dateName1 = new Date();
let weekDayDate = dateName1.toLocaleString("default", { weekday: "long" });
console.log(weekDayDate);

// Klasse dynamisch hinzufügen mit ternary:
date.forEach((weekDayItem) => {
  outputData.innerHTML += `
<div class="${weekDayDate === weekDayItem.day ? "strong" : "light"}">
<h1>${weekDayItem.day}</h1>
<p>${weekDayItem.time}</p>
</div>`;
});

// nur aktuellen Tag samt Öffnungszeiten anzeigen mit ternary:
date.forEach((weekDayItem) => {
  outputData.innerHTML +=
    weekDayDate === weekDayItem.day
      ? ` <div>
            <h1>${weekDayItem.day}</h1>
            <p>${weekDayItem.time}</p>
        </div>`
      : "";
});

// ! Tage runter zählen bis zu einem Event
const eventBtn = document.querySelector(".btn");
const outputEvent = document.querySelector(".output-date");
console.log(eventBtn, outputEvent);

eventBtn.addEventListener("click", () => {
  // Value auslesen:
  const dateInput = document.querySelector("#date").value;
  console.log(dateInput);

  // Zieldatum festlegen als Objekt mit dem Datumsinput:
  const zielDatum = new Date(dateInput);
  console.log(zielDatum);

  // aktuelles Datum erhalten:
  const heute = new Date();
  console.log(heute);

  // Berechnen der Differenz in Millisekunden:
  const differenz = zielDatum - heute;
  console.log(differenz);

  // Umrechnen von Millisekunden in Tage, aufgerundet:
  const tageBisZumEvent = Math.ceil(differenz / (24 * 60 * 60 * 1000));
  console.log(tageBisZumEvent);

  // Zieldatum in lokale Schreibweise übertragen:
  const zielDatumLocale = zielDatum.toLocaleDateString();

  // Ausgeben im HTML:
  outputEvent.innerHTML += `Das Event am ${zielDatumLocale} ist noch ${tageBisZumEvent} Tage entfernt <br>`;
});
