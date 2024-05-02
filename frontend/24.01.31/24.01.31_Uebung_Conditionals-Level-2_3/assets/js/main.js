// - Schreibe eine Funktion, um die Differenz zwischen einer bestimmten Zahl und 27 zu erhalten.
// - Wenn die Zahl größer als 27 ist, multipliziere die Differenz mit 2.
// - Lass dir das Ergebnis in der Konsole ausgeben.
// - Teste die Nummern: 35, 74, 123.

// * Funktion, um die Differenz zw. einer Zahl und 27 zu erhalten mit änderbarem Parameter num:
function difference(num) {
  console.log(num - 27);
}

difference(35);

// * Funktion, um bei einer Zahl größer als 27 die Differenz mit 2 zu multiplizieren und in allen anderen Fällen (x < 27) aber weiterhin die Differenz zw. der Zahl und 27 anzuzeigen; mit änderbarem Parameter num1:
function difference27(num1) {
  // Variable, um Differenz zu bestimmen:
  let differenz = num1 - 27;
  // if-else-Bedingung - nur wenn die Zahl > als 27 ist, soll die Differenz multipliziert werden:
  if (num1 > 27) {
    console.log(differenz * 2);
  } else {
    // Andernfalls soll weiterhin nur die Differenz berechnet werden:
    console.log(differenz);
  }
}

difference27(15);
difference27(35);
difference27(74);
difference27(123);
