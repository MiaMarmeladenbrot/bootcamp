// - Erstelle ein Formular, um das Alter von zwei Leuten zu vergleichen.
// - Nutze dafür zwei Input-Felder, einen Button, der die Funktion aufruft und eine Funktion, die die Differenz in Jahren in dein HTML schreibt.

const age1 = document.querySelector("#age1");

const age2 = document.querySelector("#age2");

// class = difference-output
// ids = age1, age2
function ageDifference(event) {
  event.preventDefault();

  const age1 = document.querySelector("#age1").value;
  const age2 = document.querySelector("#age2").value;

  const differenceOutput = document.querySelector(".difference-output");

  differenceOutput.innerHTML = age1 - age2;
}
