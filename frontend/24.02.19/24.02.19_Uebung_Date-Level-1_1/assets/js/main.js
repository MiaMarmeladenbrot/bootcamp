// - In dieser Übung werden wir [Date()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Date id=) lernen.
// - Stelle die folgenden Daten im HTML-Dokument mit Hilfe des Befehls new Date() dar.
// - Speichere die Werte in Variablen (date1, date2, usw.).
// - Verwende innerHTML, um das Ergebnis darzustellen.
// - Teste die folgenden Werte:  new Date("September 2, 2019 09:00:00")  new Date(0)  new Date(31556908800)  new Date(86400000)
// Beachtet, dass es sich bei dem Date Object um eine Zeitangabe handelt. Daher ist die erste Zeile in der Ergebnisvorschau nicht tagesaktuell. ;)

const output = document.querySelector(".output");

const date1 = new Date("September 2, 2019 09:00:00");
const date2 = new Date(0);
const date3 = new Date(31556908800);
const date4 = new Date(86400000);
output.innerHTML += `<p>${date1} = new Date("September 2, 2019 09:00:00"</p><p>${date2} = new Date(0)</p><p>${date3} = new Date(31556908800)</p><p>${date4} = new Date(86400000)</p>`;
