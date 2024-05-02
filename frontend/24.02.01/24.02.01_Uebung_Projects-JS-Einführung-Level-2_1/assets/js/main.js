// - In dieser Übung sollst du ein Formular erstellen, das einen Bereich hat, wo man eine Nachricht eingeben kann, und einen weiteren Bereich, in dem die Nachricht ausgegeben wird. Falls keine Nachricht eingeben wird, soll eine Warnung erscheinen. Schau dir die Vorschau an und versuche es umzusetzen.

function sendMessage() {
  // Variable für den Inhalt des text-input-Felds festlegen:
  const inputMessage = document.body.querySelector(
    "section form input[type='text']"
  ).value;

  // Variable für das Output-p-tag mit der Klasse letzte-nachricht
  const letzteNachricht = document.body.querySelector(".letzte-nachricht");

  // Variable für das Output-p-tag mit der Klasse Warning
  const warning = document.body.querySelector(".warning");

  // # Steffen: Zweckentfremdung, weil der ternary so keinen Wert zurückgibt, was eigentlich seine Aufgabe ist; so stehen im Ternary Befehle, was eigentlich if/else wäre:
  // * "bedingung" ? "wenn bedingung true" : "wenn bedingung false"
  // Bedingung = Nachricht eingeben, also mindestens ein Buchstabe
  // true = wenn mind. ein Buchstabe, soll die Nachricht im p-tag letzte-nachricht erscheinen
  // false = wenn kein Buchstabe, soll p-tag warning erscheinen

  // const sendNachricht =
  //   inputMessage.length >= 1
  //     ? (letzteNachricht.innerHTML = inputMessage)
  //     : (warning.innerHTML =
  //         "<p style=color:red>Gib bitte eine Nachricht ein.</p>");

  // ! Steffens Lösung:
  //* 2 ternarys, einer für die letzte Nachricht und einer für Warnung:
  // Transfer der Message aus dem Input in den Output und die Nachricht soll bestehen bleiben, wenn der User im Folgenden nichts eingibt:
  letzteNachricht.textContent =
    inputMessage.length === 0 ? letzteNachricht.textContent : inputMessage;

  // Fehlermeldung: wenn User nichts eingegeben hat, soll Warnung erscheinen, wenn er was eingegeben hat, soll der string leer sein:
  warning.textContent =
    inputMessage.length === 0 ? "Bitte gib eine Nachricht ein" : "";
}
