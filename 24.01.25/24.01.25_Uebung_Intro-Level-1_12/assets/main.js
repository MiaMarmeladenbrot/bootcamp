// - Lernziel: arithmetische Operatoren (Multiplikation, Inkrementierung, Dekrementierung) und die Reihenfolge der Berechnungen durch Verwendung von Klammern ().

// - Übertrage folgende arithmetische Operatoren in deinen Code-Editor und schaue dir das Ergebnis an.
// - Multiplikation geht vor und so wird 5 * 10 zuerst durchgeführt:  let score = 5 + 5 * 10;  console.log('Ergebnis: ' + score);
let score1 = 5 + 5 * 10;
console.log("Ergebnis: " + score1);

// - Du kannst Klammern() hinzufügen, um die Reihenfolge der Prioritäten zu ändern:
let score2 = (5 + 5) * 10;
console.log("Ergebnis: " + score2);

// - Du kannst Werte auf Variablen addieren:
let score3 = 0;
score3 = score3 + 10;
console.log("Ergebnis: " + score3);

// - Hiervon gibt es eine verkürzte Version:
score3 += 10;
console.log("Ergebnis: " + score3);

// - Nun probiere es hiermit:
// - Inkrementierungen und Dekrementierungen können wie folgt verwendet werden:
let zahl = 1;
zahl = zahl + 1;
zahl += 1;

// - Verwende den Inkrement-Operator:
zahl++;
console.log("increment: " + zahl);

// - Verwende den Dekrement-Operator:
zahl--;
console.log("dekrement: " + zahl);
