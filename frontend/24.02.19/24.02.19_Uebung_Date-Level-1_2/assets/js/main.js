// - Lernziel: [Date-Methods](https://www.notion.so/Forms-JS-Level-3_3-d9e6ceb735d2424da449ef6fcfe508c0?pvs=21) anwenden und verstehen.
// - Zeige die Daten wie auf dem Screenshot an.
// - Der Code ist vorgegeben (siehe Code-Snippet), um den Wochentag und den Monat anzuzeigen. --> nicht notwendig ...
// - Nutze Google, wenn du bei der Umsetzung Hilfe benötigst.
// - Du siehst hier das aktuelle Datum des Screenshots! Dein Ergebnis orientiert sich an dem aktuellen Datum.
// - Erstelle ein schönes CSS-Design für deine elektronische Uhr und füge ein festes Datum ein. Dieses Design werden wir später verwenden, um eine funktionierende Uhr zu bauen!

// ! Ausgaben vom aktuellen Datum im HTML
// Variablen festlegen:
const output = document.querySelector(".output");
const heute = new Date();
const jahr = heute.getFullYear();
const monat = heute.getMonth();
const tag = heute.getDate();
const stunde = heute.getHours();
const minute = heute.getMinutes();
const wochentag = heute.toLocaleString("default", { weekday: "long" });
const monatLang = heute.toLocaleString("default", { month: "long" });

// ins HTML schreiben:
output.innerHTML += `<p>${heute}</p>`;
output.innerHTML += `<p>${jahr}</p>`;
output.innerHTML += `<p>${monat} Monat</p>`;
output.innerHTML += `<p>${tag} Tag</p>`;
output.innerHTML += `<p>${stunde} Stunde</p>`;
output.innerHTML += `<p>${minute} Minute</p>`;
output.innerHTML += `<p>${wochentag}</p>`;
output.innerHTML += `<p>${monatLang}</p>`;

// ! Uhr mit aktueller Zeit
// Outputs:
const outputWeekday = document.querySelector(".weekday");
const outputHours = document.querySelector(".hours");
const outputMinutes = document.querySelector(".minutes");
const outputSeconds = document.querySelector(".seconds");
const outputPeriod = document.querySelector(".period");

// noch fehlende Variablen:
const weekdayShort = heute.toLocaleString("default", { weekday: "short" });
const second = heute.getSeconds();

// ins HTML schreiben:
outputWeekday.innerHTML = weekdayShort;
outputHours.innerHTML = stunde;
outputMinutes.innerHTML = minute;
outputSeconds.innerHTML = second;

// ! Rumprobieren: Umwandlung von Uhrzeiten zu AM/PM
const outputAmPm = document.querySelector(".am-pm");

// via locales-Änderung, zB auf US English:
const heuteUS = heute.toLocaleTimeString("en-US");
console.log(heuteUS); //--> 3:59:55 PM
outputAmPm.innerHTML += `<p>${heuteUS}</p>`;

// gleichzeitige Beschränkung auf Stunden und Minuten und beides immer zweistellig:
const heuteUS2Digits = heute.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
});
console.log(heuteUS2Digits); //--> 03:59 PM
outputAmPm.innerHTML += `<p>${heuteUS2Digits}</p>`;

// das heutige Datum und Uhrzeit in AM/PM anzeigen:
const heuteAmPMDateTime = heute.toLocaleString("default", { hour12: true });
console.log(heuteAmPMDateTime); //--> 19.2.2024, 3:40:31 PM
outputAmPm.innerHTML += `<p>${heuteAmPMDateTime}</p>`;

// nur aktuelle Uhrzeit in AM/PM anzeigen:
const heuteAmPMTime = heute.toLocaleTimeString("default", { hour12: true });
console.log(heuteAmPMTime); //--> 3:36:17 PM
outputAmPm.innerHTML += `<p>${heuteAmPMTime}</p>`;

// --> aber: getHours() kann man auf die Variable nun nicht mehr anwenden - weil man das Datum in einen string verändert hat und nicht mehr das ursprüngliche date-Format hat

//* Funktion, die in AM/PM Hours und Minutes zweistellig ändert:
function changeTimeFormat() {
  let date = new Date();
  let n = date.toLocaleTimeString("default", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  console.log(n);
  outputAmPm.innerHTML += `<p>${n}</p>`;
}

changeTimeFormat();
