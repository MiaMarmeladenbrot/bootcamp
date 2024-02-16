// # Aufgabe 2_3
// - Du hast eine Sammlung deiner Lieblingsbands.
// - Verwende den vorgegebenen Code (siehe Code Snippet)
// - Erstelle Tabellen mit JS.
// - Fülle sie mit Daten aus dem JS Objekt
// - Zeige die Tabelle in HTML an.
// - Assets:  arrow function  forEach  Template literals  return

// # Aufgabe 2_5
// - Du hast eine Sammlung deiner Lieblingsbands. Du möchtest deinen Lieblingsstar aus der Liste der 100 Sängerinnen und Sänger finden.
// - Verwende den vorgegebenen Code (siehe Code Snippet)
// - Erstelle eine Suchfunktion in JavaScript, die den richtigen Künstler ausgibt.
// - Erstelle ein gutes Design für diese Tabelle.
// - Assets:  arrow function  filter  includes()  return

// 1. Variable für Output
// 2. Funktion für Überschriften und array-Inhalte ins HTML
// 3. Filter-Funktion, um nach gesuchten Sängern filtern zu lassen und die gefilterten Sänger im HTML auszugeben

const singers = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];

// Testen, welche Stelle ich wie anspreche:
console.log(singers[0].name);

//! Variable für Output:
const tableContainer = document.querySelector("#table-container");

// ! Funktion, um Überschriften und array-Inhalte ins HTML zu schreiben:
function inhalt(singer) {
  // Container leeren, damit HTML ersetzt und nicht ergänzt wird:
  tableContainer.innerHTML = "";

  // Überschriften Zeile ins HTML schreiben:
  tableContainer.innerHTML += `
  <div><b>Name</b></div>
  <div><b>Country</b></div>
  <div><b>Period Active</b></div>
  <div><b>Genre</b></div>
  `;

  // Inhalte des array-objects ins HTML schreiben:
  singer.forEach((item) => {
    tableContainer.innerHTML += `
  <div>
    <p>${item.name}</p>
  </div>
  <div>
   <p>${item.country}</p>
  </div>

  <div>
    <p> ${item.period_active.start} -  ${item.period_active.end} </p>
  </div>

  <div>
    <p>${item.genre}</p>
  </div>
  
  `;
  });
}

// ! Funktionsaufruf, um Original-array ins HTML zu schreiben:
inhalt(singers);

//! Funktion, um nach Userinput zu suchen und nur die Ergebnisse auszugeben:
const handleSearchClicked = () => {
  // Userinput-Value auslesen:
  const searchInput = document.querySelector("#searchInput").value;
  console.log(searchInput, ", läuft");

  // Sänger filtern und in Variable speichern:
  let searchedSingers = singers.filter((item) => {
    return item.name.toLowerCase().includes(searchInput.toLowerCase());
  });
  console.log(searchedSingers);

  // gefilterte Sänger mit inhalt() im HTML ausgeben lassen:
  searchedSingers.length <= 0
    ? (tableContainer.innerHTML =
        "<p class='error'>Singer not found, try again</p>")
    : inhalt(searchedSingers);
};
