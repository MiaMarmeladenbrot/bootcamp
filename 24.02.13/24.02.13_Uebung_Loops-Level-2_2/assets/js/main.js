// - Lernziel: Textausgabe je nach Eingabe der User:innen erstellen unter Verwendung von Bedingungen und Schleifen.
// - In deinem HTML ist ein Inputfeld zu sehen, in das User:innen eine Zahl eingeben können. So wird die Anzahl des Buchstabens "o" festgelegt.
// - Schreibe eine Funktion, mit der du am Ende in deinem HTML das Wort "Loop" ausgibst, mit der eingebenen Anzahl aus dem Input-Feld.

const loopOutput = document.querySelector("p");

const loopMe = (event) => {
  event.preventDefault();
  const userInput = Number(
    document.querySelector("input[type='number']").value
  );
  console.log(userInput);

  // L + i-mal O + P
  loopOutput.innerHTML = "L";

  for (let i = 1; i <= userInput; i++) {
    // userInput zB = 2 => dann soll 2x ein "O" hinzugefügt werden innerhalb des Wortes
    // loopOutput.innerHTML = `L${i}P`; //--> gibt mir input-Wert raus, also zB L2P
    // loopOutput.innerHTML += "L" + "O" + "P"; //--> gibt mir die 3 Buchstaben hintereinander raus, zB LOPLOP
    // loopOutput.innerHTML += `LOOP`; //--> gibt mir die Loops hintereinander raus, zB LOOPLOOPLOOP
    // loopOutput.innerHTML += "o"; //--> gibt mir die o nach hintendran raus, zB LOOPoooo

    loopOutput.innerHTML += "O";
  }

  loopOutput.innerHTML += "P";
};
