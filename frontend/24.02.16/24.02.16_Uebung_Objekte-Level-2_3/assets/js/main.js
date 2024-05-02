// - Du hast eine Sammlung deiner Lieblingsbands.
// - Verwende den vorgegebenen Code (siehe Code Snippet)
// - Erstelle Tabellen mit JS.
// - Fülle sie mit Daten aus dem JS Objekt
// - Zeige die Tabelle in HTML an.
// - Assets:  arrow function  forEach  Template literals  return

// 1. Variable für Output
// 2. Überschriften ins HTML
// 3. array-Inhalte ins HTML

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

// Variable für Output:
const tableContainer = document.querySelector("#table-container");

// Überschriften ins HTML:
tableContainer.innerHTML += `
  <div>Name</div>
  <div>Country</div>
  <div>Period Active</div>
  <div>Genre</div>
  `;

// array iterieren, um alle Inhalte im HTML auszugeben:
singers.forEach((item) => {
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
