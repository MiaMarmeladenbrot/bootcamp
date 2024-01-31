// - Verwende den Code aus der Aufgabe Level 1\_1.
// - Füge zu den Zusatzcode aus dem Code-Snippet hinzu.
// - Ändere die Bedingung und schreibe (document.getElementById(‘input’).value >= 18).
// - Wenn die Bedingung wahr ist, gib im HTML "Ja, Du kannst Shisha rauchen" aus.
// - Wenn die Bedingung falsch ist, gib "Du darfst noch nicht Shisha rauchen" aus.
// - Schreibe in die erste Zeile deiner Funktion: event.preventDefault();
// - Es verhindert einen Link die URL zu öffnen.
// - [Beispiel](https://www.w3schools.com/jsref/event%5Fpreventdefault.asp)

// ! Erste Funktion, um Alter zu verifizieren aus Aufgabe 1_1:
function adult() {
  const userAge = document.body.querySelector("form input:first-of-type").value;

  const outputH2 = document.body.querySelector("form h2");

  if (userAge < 18) {
    outputH2.innerHTML = "minderjährig";
  } else {
    outputH2.innerHTML = "volljährig";
  }
}

// ! umgeschriebene Funktion für Aufgabe 1_3, um das Alter zum Shisha-Rauchen zu verifizieren - diesmal ohne Konstanten:
function greaterThan() {
  if (document.getElementById("input").value >= 18) {
    document.body.querySelector("form h4").innerHTML =
      "Du kannst Shisha rauchen.";
    ("Du kannst Shisha rauchen.");
  } else {
    document.body.querySelector("form h4").innerHTML =
      "Du kannst noch nicht Shisha rauchen.";
  }
}
