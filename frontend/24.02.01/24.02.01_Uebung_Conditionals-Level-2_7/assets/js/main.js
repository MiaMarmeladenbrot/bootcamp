// - Lernziel: Anwendung von Switch/Case.
// - Schreibe eine Function, um die Daten der Selectbox zu erhalten.
// - HTML und CSS ist vorgegeben (siehe Code-Snippet).
// - switch  case  default (extragroße Größe)
// - Definiere die Function showtxt();

function showtxt() {
  // Variable für value der ausgewählten Option, indem wir den value von select, also dem Über-Tag ansteuern:
  const inputType = document.body.querySelector("form select").value;

  // Variable für das Output-div:
  const outputErgebnis = document.body.querySelector(".boxMasse");

  // switch-Bedingung ist der value der ausgewählten Versandart (oben als inputType deklariert), und je nachdem welche Art von Paket ausgewählt wurde, soll eine andere Größe/Gewicht in den div-container ausgegeben werden:
  switch (inputType) {
    case "0":
      outputErgebnis.innerHTML =
        "<p><b>Brief und Postkarte</b> <br> L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm</p>";
      break;
    case "1":
      outputErgebnis.innerHTML =
        "<p><b>DHL Paket 2 kg</b> <br>bis 60 x 30 x 15 cm</p>";
      break;
    case "2":
      outputErgebnis.innerHTML =
        "<p><b>DHL Paket 5 kg</b> <br>bis 120 x 60 x 60 cm</p>";
      break;
    case "3":
      outputErgebnis.innerHTML =
        "<p><b>DHL Paket 10 kg</b> <br>bis 120 x 60 x 60 cm</p>";
      break;

    default:
      outputErgebnis.innerHTML =
        "extra große Größe, bitte kontaktieren Sie uns persönlich";
  }
}
