// # === DATE OBECT ===
// 01.01.1970 -> Start der Zeit

// * Wenn wir keine Parameter mitgeben, bekommen wir die aktuielle Zeit + Datum zurück
let date1 = new Date();
console.log(date1);
console.log(typeof date1);

// * Wenn wir Parameter mitgeben, wir ein  Objekt erstellt mit den durchgereichen Zeiten.
let date2 = new Date(1993, 3, 10, 16, 12, 13);
console.log(date2);

// * wenn wir date1 - date2 rechnen, bekommen wir Milisekunden, die zwischen den beiden Zeite liegen
let date3 = date1 - date2;
console.log(date3);

// * So können wir die Tage rausbekommen
// 24 = weil 24h ein tag
// 60min = sind eine stundne
// 60sek = sind eine minute
// 1000ms = weil 1 sek
let tage = date3 / (24 * 60 * 60 * 1000);
console.log(tage);

// * Die .toString() Methode wandelt unser Objekt in einen String
let date4 = date2.toString();
console.log(typeof date4);
console.log(date4.toLowerCase());

// * toUTCString() - gibt ein Datum i9n UTC Zeit zurück
// UTC - The Universal Coordinated ist der standart bei den Welt Uhren
// Wandelt in String um
let date5 = date2.toUTCString();
console.log(date5);
console.log(typeof date5);

// * toLocalDateString - gibt ein Datum in einer lokalisierten darstellung zurück
// Datum
// Wandelt in String um
let date6 = new Date().toLocaleDateString();
console.log(date6);

// * toLocalString - gib eine Datum und Uhrzeit in Lokaler darstellung zurück
// Datum & Uhrzeit
// Wandelt in String um
let date7 = new Date().toLocaleString();
console.log(date7);

// # So kann ich einzelne Werte von dem Datum bekommen

// * getFullYear() - gibt uns nur das Jahr zurück
let date8 = new Date().getFullYear();
console.log(date8);

// * getMonth() - gibt uns nur den Monat zurück
// Monate starten bei index 0 = Jan => 0
let date9 = new Date().getMonth();
console.log(date9); // 1 => 2 nicht weil Feb index 2 hat

// * getDate() - gibt uns nur den Tag
let date10 = new Date().getDate();
console.log(date10);

// * getHours() - gib und die Stunden
let date11 = new Date().getHours();
console.log(date11);

// * getMinute() - gib und die Minuten
let date12 = new Date().getMinutes();
console.log(date12);

// * getSeconds() - gib und die Sekunden
let date13 = new Date().getSeconds();
console.log(date13);

// # So kann ich einzelne Werte im Datum abändern
// console.clear();

const überschreiben = new Date();
console.dir(überschreiben);

// * setDate()
// So kann ich nur den Tag ändern
überschreiben.setDate(28);
console.log(überschreiben);

// * setMonth()
// So  kann ich nur den Monat ändern
// start ist bei 0 !
// Jan = 0
// Feb = 1
// ...
überschreiben.setMonth(0);
console.log(überschreiben);

// * setFullYear()
// So können wir das ganze Jahr setzen
überschreiben.setFullYear(2000);
console.log(überschreiben);

// # Wochentag´s Name rausbekommen

// * Name von Wochentag rausbekommen
let dateName = new Date();

// - "long" = Montag
// - "short" = "Mo"
// - "narrow" = "M"

let weekDayDate = dateName.toLocaleString("default", { weekday: "long" });
console.log(weekDayDate);

// # Öffnungszeiten

const date = [
  { day: "Montag", time: "9:00 - 18:00" },
  { day: "Dienstag", time: "9:00 - 18:00" },
  { day: "Mittwoch", time: "9:00 - 18:00" },
  { day: "Donnerstag", time: "9:00 - 18:00" },
  { day: "Freitag", time: "9:00 - 18:00" },
  { day: "Samstag", time: "9:00 - 12:00" },
  { day: "Sonntag", time: "Geschlossen" },
];

const outputData = document.querySelector(".offnungzeiten");

// * klassen dynamisch setzen
date.forEach((weekDayItem) => {
  outputData.innerHTML += `
<div class="${weekDayDate === weekDayItem.day ? "strong" : "light zied"}">
<h1>${weekDayItem.day}</h1>
<p>${weekDayItem.time}</p>
</div>
`;
});

//* elemente dynamisch ausgeben
date.forEach((weekDayItem) => {
  outputData.innerHTML +=
    weekDayDate === weekDayItem.day
      ? ` <div>
          <h1>${weekDayItem.day}</h1>
          <p>${weekDayItem.time}</p>
        </div> `
      : "";
});

// # Event Tage Checker

const outputEvent = document.querySelector(".output-date");
const eventBtn = document.querySelector(".btn");

eventBtn.addEventListener("click", () => {
  const dateInput = document.querySelector("#date").value;
  console.log(dateInput);

  //   Ziel Datum festlegen
  const zielDatum = new Date(dateInput);
  console.log(zielDatum);

  //   Aktuelles Datum erhalten
  const heute = new Date();

  //   Berechnen der Differenz in Millisekunden
  const differenz = zielDatum - heute;
  console.log(differenz);

  //   Rechnen von MilliSekunden in Tag
  //   math.ceil => Weil wir immer hochrunden wollen
  const tageBisZumEvent = Math.ceil(differenz / (24 * 60 * 60 * 1000));
  console.log(tageBisZumEvent);

  outputEvent.innerHTML += `<p> Das Event am ${dateInput} ist ${tageBisZumEvent} Tage entfernt </p> <br>`;
});
