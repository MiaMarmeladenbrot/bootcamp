// - Für diese Übung brauchst du ein Formular.
// - Im Formular sollen zwei Zeichenketten eingegeben werden können.
// - Die erste Zeichenkette soll an der Stelle in zwei Teile getrennt werden, wo die zweite Zeichenkette innerhalb der ersten gefunden wird. Die zweite Zeichenkette kann mehrere Zeichen enthalten.
// - Über Radio-Buttons kann spezifiziert werden, ob die Trennung vor oder nach der Trennungs-Zeichenkette geschehen soll.

function trennen() {
  //* Variablen für die input-Felder:
  // Variable für input-Feld Zeichenkette:
  const inputText = document.body.querySelector("#input-text").value;

  // Variable für input-Feld Trennungspunkt:
  const cutText = document.body.querySelector("#cut-text").value;

  // Variable für radio-Button davor:
  const davor = document.body.querySelector("#davor").checked;

  // Variable für radio-Button danach:
  const danach = document.body.querySelector("#danach").checked;

  //* Variablen für die output-Felder:
  // Variable für Fehlermeldung in h5:
  const error = document.body.querySelector(".error");

  // Variable für Ausgabe vorderer Teil:
  const vordererTeil = document.body.querySelector(".vorderer-teil");

  // Variable für Ausgabe hinterer Teil:
  const hintererTeil = document.body.querySelector(".hinterer-teil");

  //* if-else, um string zu teilen und beide Teile auszugeben:
  if (
    inputText.length > 0 &&
    cutText.length > 0 &&
    (davor === true || danach === true)
  ) {
    // wenn alle Felder befüllt sind, soll die Fehlermeldung wieder verschwinden:
    error.innerHTML = "";

    // wenn cutText in inputText enthalten ist, soll die Trennung stattfinden, sonst Fehlermeldung:
    if (inputText.indexOf(cutText) > 0) {
      // wenn das erfüllt ist, soll Fehlermeldung wieder verschwinden:
      error.innerHTML = "";

      // wenn davor = true, dann soll die Zeichenkette vor dem gewählten Zeichen getrennt werden und in zwei Feldern ausgegeben werden:
      if (davor === true) {
        // wenn das erfüllt ist, soll Fehlermeldung wieder verschwinden:
        error.innerHTML = "";

        // Ausgabe des ersten string-Teils:
        vordererTeil.innerHTML = inputText.slice(0, inputText.indexOf(cutText));

        // Ausgabe des zweiten string-Teils:
        hintererTeil.innerHTML = inputText.slice(inputText.indexOf(cutText));

        // wenn danach = true, dann soll die Zeichenkette nach dem gewählten Zeichen getrennt werden (+1) und in zwei Feldern ausgegeben werden:
      } else if (danach === true) {
        // wenn die beiden Bedingungen erfüllt sind, soll Fehlermeldung wieder verschwinden:
        error.innerHTML = "";

        // Ausgabe des ersten string-Teils:
        vordererTeil.innerHTML = inputText.slice(
          0,
          inputText.indexOf(cutText) + 1
        );

        // Ausgabe des zweiten string-Teils:
        hintererTeil.innerHTML = inputText.slice(
          inputText.indexOf(cutText) + 1
        );
      } else {
        // wenn weder davor noch danach ausgewählt ist, Fehlermeldung:
        error.innerHTML =
          "Bitte wähle, wo deine Zeichenkette getrennt werden soll";
      }
    } else {
      // wenn zweite if-Bedingung (Zeichen aus cutText nicht in inputText vorhanden) nicht erfüllt ist, soll Fehlermeldung kommen:
      error.innerHTML = "Zeichen nicht vorhanden";
    }
  } else {
    // wenn allererste if-Bedingung (jedes Feld muss befüllt sein) nicht erfüllt ist, soll Fehlermeldung kommen:
    error.innerHTML = "Bitte befülle jedes Feld.";
  }
}
