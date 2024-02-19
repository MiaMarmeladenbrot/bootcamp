// - Lernziel: [Date-Methods](https://www.notion.so/Forms-JS-Level-3_3-d9e6ceb735d2424da449ef6fcfe508c0?pvs=21) anwenden und verstehen.
// - Zeige die Daten wie auf dem Screenshot an.
// - Der Code ist vorgegeben (siehe Code-Snippet), um den Wochentag und den Monat anzuzeigen. --> nicht notwendig ...
// - Nutze Google, wenn du bei der Umsetzung Hilfe benötigst.
// - Du siehst hier das aktuelle Datum des Screenshots! Dein Ergebnis orientiert sich an dem aktuellen Datum.
// - Erstelle ein schönes CSS-Design für deine elektronische Uhr und füge ein festes Datum ein. Dieses Design werden wir später verwenden, um eine funktionierende Uhr zu bauen!

// ! Ausgaben im HTML
const output = document.querySelector(".output");
const heute = new Date();
const jahr = heute.getFullYear();
const monat = heute.getMonth();
const tag = heute.getDate();
const stunde = heute.getHours();
const minute = heute.getMinutes();
const wochentag = heute.toLocaleString("default", { weekday: "long" });
const monatLang = heute.toLocaleString("default", { month: "long" });

output.innerHTML += `<p>${heute}</p>`;
output.innerHTML += `<p>${jahr}</p>`;
output.innerHTML += `<p>${monat} Monat</p>`;
output.innerHTML += `<p>${tag} Tag</p>`;
output.innerHTML += `<p>${stunde} Stunde</p>`;
output.innerHTML += `<p>${minute} Minute</p>`;
output.innerHTML += `<p>${wochentag}</p>`;
output.innerHTML += `<p>${monatLang}</p>`;

// ! Uhr
const outputWeekday = document.querySelector(".weekday");
const outputHours = document.querySelector(".hours");
const outputMinutes = document.querySelector(".minutes");
const outputSeconds = document.querySelector(".seconds");
const outputPeriod = document.querySelector(".period");

const weekdayShort = heute.toLocaleString("default", { weekday: "short" });
const second = heute.getSeconds();

outputWeekday.innerHTML = weekdayShort;
outputHours.innerHTML = stunde;
outputMinutes.innerHTML = minute;
outputSeconds.innerHTML = second;
