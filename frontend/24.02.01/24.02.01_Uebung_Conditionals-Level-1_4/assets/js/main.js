// - Lernziel: Verstehen und Anwenden des Ternary Operators.
// - Nun sollst du eine Abfrage erstellen, in der du prüfst, ob das User:innen-Passwort „sicher“ genug ist.
// - Als Anforderung für das Passwort gilt, dass es mindestens 8 Zeichen lang sein muss. --> wie zähle ich strings?

//* "bedingung" ? "wenn bedingung true" : "wenn bedingung false"

// Bedingung = Passwort ist mind. 8 Zeichen lang
// wenn Bedingung true = Willkommen
// wenn Bedingung false = too short

function pwCheck() {
  // Variable für den value aus dem input-Feld vom Passwort deklarieren:
  const password = document.body.querySelector(
    "form label input[type='password'"
  ).value;

  // Variable für output im div deklarieren:
  const outputDiv = document.body.querySelector("div");

  // Variable deklarieren, die ternary enthält:
  const passwordCheck =
    password.length >= 8
      ? (outputDiv.innerHTML =
          "<p style='color:green'>Welcome to your Account </p>")
      : (outputDiv.innerHTML =
          "<p style='color:red'>This password is too short.</p>");
}
