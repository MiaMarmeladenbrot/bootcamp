// erste Funktion: Zahl mit sich selbst multiplizieren
function multiplyNum(num) {
  return new Promise((resolve, reject) => {
    // falls keine Zahl als Argument, Fehlermeldung
    if (typeof num !== "number") reject("Bitte gib eine Zahl ein");

    // andernfalls Zahl mit sich selbst multiplizieren und das Ergebnis ausgeben
    const result = num * num;
    resolve(result);

    console.log(result);
  });
}

// Test, ob erste Funktion läuft:
// multiplyNum(2)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// zweite Funktion: mehrere Aufrufe von Funktion 1
function severalFunc(num) {
  return multiplyNum(num)
    .then((num1) => multiplyNum(num1))
    .then((num2) => multiplyNum(num2))
    .then((num3) => multiplyNum(num3))
    .catch((err) => console.log(err));
}

// Funktionsaufruf von Funktion 2 mit Ziffern-Argument
severalFunc(2); //--> 4, 16, 256, 65536
// severalFunc(4); //--> 16, 256, 65536, 4294967296

// Funktionsaufruf von Funktion 2 mit Wort-Argument
// severalFunc("wort"); //--> Bitte gib eine Zahl ein.
