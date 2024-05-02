// - Lernziel: Verstehen und Anwenden des Ternary-Operators.
// - Schreibe eine Function, die durch einen **onClick** aufgerufen wird.
// - Mit dem [Ternary-Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator?retiredLocale=de) erstellst du eine Abfrage, ob die Person volljährig oder minderjährig ist.
// - Lass dir das Ergebnis im HTML ausgeben.

function age() {
  // Variable für den Value des Input-Feldes number deklarieren:
  const userAge = document.body.querySelector(
    "form label input[type='number']"
  ).value;

  //  Variable für das output-Feld im div deklarieren:
  const outputDiv = document.body.querySelector("div");

  // * "bedingung" ? "wenn bedingung true" : "wenn bedingung false"
  // Bedingung = userAge >= 18
  // true = volljährig im div
  // false = minderjährig im div

  // Variable, in der der Wert aus dem ternary gespeichert wird:
  const userAgeOver18 =
    userAge >= 18
      ? (outputDiv.innerHTML = "volljährig")
      : (outputDiv.innerHTML = "minderjährig");
}
