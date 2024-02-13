// # Aufgabe 2_2
// - Lernziel: Textausgabe je nach Eingabe der User:innen erstellen unter Verwendung von Bedingungen und Schleifen.
// - In deinem HTML ist ein Inputfeld zu sehen, in das User:innen eine Zahl eingeben können. So wird die Anzahl des Buchstabens "o" festgelegt.
// - Schreibe eine Funktion, mit der du am Ende in deinem HTML das Wort "Loop" ausgibst, mit der eingebenen Anzahl aus dem Input-Feld.

// const loopOutput = document.querySelector("p");

// const loopMe = (event) => {
//   event.preventDefault();
//   const userInput = Number(
//     document.querySelector("input[type='number']").value
//   );

//   loopOutput.innerHTML = "L";

//   for (let i = 1; i <= userInput; i++) {
//     loopOutput.innerHTML += "O";
//   }

//   loopOutput.innerHTML += "P";
// };

// # Aufgabe 3_3
// - Lernziel: Textausgabe je nach Eingabe der User:innen erstellen unter Verwendung von Bedingungen und Schleifen.
// - Du verfeinerst deine "Loooooop"-Aufgabe.
// - Jetzt soll eine Fehlermeldung ausgegeben werden, wenn der/die User:in 0 eingibt.
// - Wenn die Eingabe gerade ist (z. B. 2, 4, 6, ...), sollten sich die "o"-Buchstaben in das Wort "L..p" einfügen, wobei die Anzahl der "o"-Buchstaben der Eingabezahl entspricht. Zum Beispiel: Bei der Eingabe von 4 wird "Loooop" ausgegeben.
// - Wenn die Eingabe ungerade ist (z. B. 1, 3, 5, ...), sollten sich abwechselnd "o" und "0" in das Wort "L..p" einfügen, beginnend mit "o". Zum Beispiel: Bei der Eingabe von 5 wird "Lo0o0op" ausgegeben.

const loopOutput = document.querySelector("p");

const loopMe = (event) => {
  event.preventDefault();
  const userInput = Number(
    document.querySelector("input[type='number']").value
  );

  // leeres array, um darin die gepushten "o" und "O" zu sammeln:
  let loopArray = [];

  //* wenn userInput 0 ist, soll Fehlermeldung erscheinen:
  if (userInput === 0) {
    loopOutput.innerHTML = "<p style='color:red'> Bitte Zahl ab 1 eingeben</p>";

    //* in allen anderen Fällen sollen Loops starten:
  } else {
    //- wenn userInput gerade ist, sollen nur kleine o eingefügt werden:
    if (userInput % 2 === 0) {
      for (
        let i = 1; // ab 1, da 0 Fehlermeldung ausgeben soll (siehe oberes if)
        i <= userInput; // immer nur so viele o hinzufügen, wie userInput da ist
        i++ // loop startet
      ) {
        loopArray.push("o"); // pusht die "o" in das leere array
      }

      //- wenn userInput ungerade ist, sollen kleines und großes o abwechselnd eingefügt werden:
    } else if (userInput % 2 !== 0) {
      for (
        let j = 0; // Positionszählung startet immer bei 0
        j < userInput; // wenn wir bei 0 starten, muss < sein und nicht <=
        j++ // wird geloopt
      ) {
        // ? wenn Position geraden index hat, soll ein kleines "o" eingefügt werden:
        if (j % 2 === 0) {
          loopArray.push("o");

          // ? wenn Position ungeraden index hat, soll ein großes "O" eingefügt werden:
        } else {
          loopArray.push("O");
        }
      }
    }
    // Output im HTML innerhalb der ersten if-else-Bedingung, damit Fehlermeldung von oben nicht überschrieben wird:
    loopOutput.innerHTML = `L${loopArray.join("")}p`;
  }
};

// for (let i = 1; i <= userInput; i++) {

// if (userInput % 2 === 0) {
//   loopOutput.innerHTML += "o";

//   // wenn userInput ungerade ist, sollen kleines und großes o abwechselnd eingefügt werden:
// } else if (userInput % 2 !== 0) {
//   loopOutput.innerHTML += "oO";
