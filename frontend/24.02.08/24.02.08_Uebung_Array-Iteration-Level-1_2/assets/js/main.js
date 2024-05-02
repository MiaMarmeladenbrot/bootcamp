// # ✅ Aufgabenstellung
// - Lernziel: JavaScript-Methode [map()](https://www.w3schools.com/jsref/jsref_map.asp) verstehen und anwenden.
// - Verwende das vorgegebene Array getraenke (siehe Code-Snippet).
// - Nutze die map()-Methode, um in der neuen Variable upperDrinks alle Getränke in Großbuchstaben zu speichern.
// - Wende nun die map()-Function auf dein Array getraenke an.
// - Gib nun upperDrinks in der Konsole aus.

// # ☝🏼 Hinweis
// - Folgende Befehle brauchst du: toUpperCase(), map() und return.

// # ✨ Bonus
// - Versuche, deine Function in eine Arrow-Function umzuwandeln.

const getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull",
  "Fanta",
];

const getraenkeBig = getraenke.map((drinks) => drinks.toUpperCase());
console.table(getraenkeBig);
