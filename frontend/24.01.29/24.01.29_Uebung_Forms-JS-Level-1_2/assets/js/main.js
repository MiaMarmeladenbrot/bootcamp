// - In dieser Aufgabe sollst du ein Formular zur Berechnung deines Alters erstellen.
// - Erstelle dazu ein Formular, in dem du dein Geburtsjahr eingeben kannst, sowie einen Button, der die Funktion dann ausführt.
// - Definiere eine Funktion, die dein Alter in Jahren ausgibt. Dein Alter soll dann in deinem HTML ausgegeben werden.

// id = my-year
// class = age-output
function myAge(event) {
  event.preventDefault();

  const myYear = document.querySelector("#my-year").value;

  const ageOutput = document.querySelector(".age-output");

  ageOutput.innerHTML = 2024 - myYear;
}
