// - Diesmal sollst du eine Funktion schreiben, die beim Anklicken der Boxen die Farbe der angeklickten Box ändert.
// - Der HTML Code ist vorgegeben (siehe Code-Snippet).

const cardDiv = document.querySelector(".card");
const changeColor = (event) => {
  let userInput = event.target;
  console.log(userInput);
  userInput.classList.add("change");
};
