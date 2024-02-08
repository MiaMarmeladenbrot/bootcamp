// - In dieser Übung wirst du [forEach()](https://www.w3schools.com/jsref/jsref%5Fforeach.asp) kennenlernen. Die Methode wird dir noch häufig begegnen.
// - Schreibe eine Funktion myDrinks(), die jedes Element eines Arrays in deiner Konsole ausgibt und mit document.write() in deine index.html schreibt.
// - Verwende die Liste aus dem Code-Snippet und sortiere das Array getraenke vorher alphabetisch.

let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

const divContainer = document.querySelector("div");

getraenke.forEach((drink) => {
  divContainer.innerHTML += `<p>${drink} </p>`;
});
