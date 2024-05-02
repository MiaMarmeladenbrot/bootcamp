// - Schreibe eine Funktion, die beim Anklicken des Buttons ein neues Listenelement erstellt.
// - Den HTML- und CSS-Code findest du im Code-Snippet.
// - Nutze: querySelector(), addEventListener(), createElement(), createTextNode() und appendChild().

const listeOutput = document.querySelector("ul");
const btn = document.querySelector("#enter");
console.log(listeOutput);
console.log(btn);

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const userInput = document.querySelector("#userinput").value;
  console.log(userInput);

  listeOutput.innerHTML += `<li>${userInput}</li>`;
});
