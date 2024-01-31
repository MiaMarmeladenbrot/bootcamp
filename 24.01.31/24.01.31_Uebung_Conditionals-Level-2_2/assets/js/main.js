// - Lernziel: Verstehen und Anwenden von Conditional-Statements (if/else).
// - Erstelle ein HTML-Formular, um mit einem [Range-Slider](https://www.w3schools.com/tags/att%5Finput%5Ftype%5Frange.asp) die Luftqualität (AQI:air-quality-index) in einem Bereich von 0 bis 150 anzuzeigen.
// - Das Ergebnis soll in HTML ausgegeben werden. Dazu sollte jeweils die Hintergrundfarbe vom body angepasst werden.
// - Deklariere die Funktion checkAirQuality() und nutze im Funktionskörper Conditional-Statements (if...else).

function checkAirQuality() {
  // * Variablen festlegen:
  // Variable für input-Feld-value:
  const airQuality = document.body.querySelector("form input").value;
  // Variable für Output-Feld der h2:
  const outputH2 = document.body.querySelector("form h2");
  // Variable für Output-Feld der h3:
  const outputH3 = document.body.querySelector("form h3");
  // Variable für Body:
  const body = document.querySelector("body");

  // * if-else-Bedingungen festlegen:
  if (airQuality <= 50) {
    // if-else-Kondition bis 50
    // Ausgabe der Werte als h2 und h3 im HTML:
    outputH2.innerHTML = "Level of health concern:  Good";
    outputH3.innerHTML = "Level of health effect: Little or no risk";
    // Änderung der Body-Farbe in grün:
    body.style.backgroundColor = "green";
  } else if (airQuality > 50 && airQuality <= 100) {
    // if-else-Kondition 50 bis 100
    outputH2.innerHTML = "Level of health concern:  Moderate";
    outputH3.innerHTML = "Level of health effect: Acceptable quality";
    body.style.backgroundColor = "orange";
  } else if (airQuality > 100 && airQuality <= 150) {
    // if-else-Kondition 100 bis 150:
    outputH2.innerHTML = "Unhealthy for sensitive groups";
    outputH3.innerHTML =
      "Level of health effect: Generable publics not likely affected";
    body.style.backgroundColor = "red";
  }
}
