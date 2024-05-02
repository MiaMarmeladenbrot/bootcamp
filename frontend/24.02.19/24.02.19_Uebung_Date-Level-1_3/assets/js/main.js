// - Lernziel: Die Verwendung der [setDate()-Methode](https://www.w3schools.com/jsref/jsref%5Fsetdate.asp) in JavaScript verstehen, um das Tagesdatum eines Date-Objekts zu ändern.
// - Zeige die Daten wie auf dem Screenshot an und nutze die setDate()-Methode.
// - In der letzten Zeile wurden 30 Tage auf das damals aktuelle Datum addiert.
// - Denk daran, dass dein Ergebnis sich aufgrund des Datums von dem Screenshot unterscheiden wird.
// - Nutze Google, falls du nicht weiterkommst.

const output = document.querySelector(".output");

let today = new Date();
output.innerHTML += `<p>heute: ${today}</p>`;

// add 100 years to today:
today.setDate(today.getDate() + 365 * 100);
output.innerHTML += `<p>in 100 Jahren: ${today}</p>`;

// add 100 years and 30 days to today:
today.setDate(today.getDate() + 30);
output.innerHTML += `<p>in 100 Jahren + 30 Tage: ${today}</p>`;

// set day to 3:
today.setDate(3);
output.innerHTML += `<p>davon der 3. des Monats: ${today}</p>`;

// add 30 days to today
today = new Date(); // reset date
today.setDate(today.getDate() + 30);
output.innerHTML += `<p>heute + 30 Tage: ${today}</p>`;

// set year to 2124
// today.setFullYear(2124);
// output.innerHTML += `<p>${today}</p>`;

// set month to March
// today.setMonth(2);
// output.innerHTML += `<p>${today}</p>`;

// set day to 3
// today.setDate(3);
// output.innerHTML += `<p>${today}</p>`;
