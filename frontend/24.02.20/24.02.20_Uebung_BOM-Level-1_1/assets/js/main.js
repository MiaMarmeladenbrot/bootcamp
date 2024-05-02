// - Schreibe zuerst eine Funktion, die nach x Sekunden einen Text anzeigt. Dafür kannst du die setTimeout()-Methode nutzen.

// const consoleOutput = () => {
//   console.log("Random text");
// };
// setTimeout(consoleOutput, 4000);

// - Schreibe anschließend eine Funktion, die das Ergebnis der Vorschau ausgibt. Nutze hierfür: setInterval(), clearInterval() und if/else.

const countdown = () => {
  console.log("Start: Warten für 3 Sekunden ...");

  const consoleOutput = () => {
    console.log("Erledigt. Du hast 3 Sekunden verschwendet.");
  };
  setTimeout(consoleOutput, 3000);

  let zahl = 10;
  console.log(zahl);

  const intervall = setInterval(() => {
    zahl--;
    console.log(zahl);
    if (zahl <= 1) {
      clearInterval(intervall);
      console.log("Endlich Feierabend!");
    }
  }, 1000);
};

countdown();
