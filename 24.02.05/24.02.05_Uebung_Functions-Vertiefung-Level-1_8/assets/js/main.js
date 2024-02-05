// - Diesesmal sollst du eine Funktion zur Berechnung deines Alters schreiben. Setze dafür folgende Schritte nacheinander um
// - Definiere eine Funktion, die einen Parameter hat: yearBorn.
// - Nutze im Funktionskörper return, um dein Alter zu berechnen und zurückzugeben.
// - Gib dein Alter schließlich in der Konsole aus.

const age = (yearBorn) => {
  let yourAge = 2024 - yearBorn;
  return yourAge;
};

let returnAge = age(1990);
console.log(returnAge);

// - Die erste Funktion ist geschafft - super! Schreibe nun eine Funktion, die dein Alter mit dem Alter einer/s anderen Teilnehmer:in vergleicht.
// - Definiere eine Funktion die zwei Parameter hat.
// - Benutze im Funktionskörper die Parameter um die Differenz eurer Alter zu berechnen und speichere es dir in der Variablen alterDiff ab.
// - Returne dir das Ergebnis und gib die Altersdifferenz in der Konsole aus.

const ageDiff = (myYear, yourYear) => {
  let alterDiff = myYear - yourYear;
  return alterDiff;
};

let returnAgeDiff = ageDiff(1990, 1976);
console.log(returnAgeDiff);
