// - Schreibe eine Funktion mit zwei Parametern (Zahlen).
// - Die Funktion soll die Summe dieser Zahlen berechnen.
// - Wenn beide Parameter gleich sind, soll sie (Summe * 5) ausgeben.

function result(num1, num2) {
  // Variable für die Summe festlegen:
  let sum = num1 + num2;

  // wenn Zahl1 = Zahl 2 ist, soll deren Summe mit 5 multipliziert werden:
  if (num1 === num2) {
    console.log(sum * 5);
  } else {
    // in allen anderen Fällen soll nur die Summe beider Zahlen ausgegeben werden:
    console.log(sum);
  }
}

result(16, 14);
result(10, 10);
