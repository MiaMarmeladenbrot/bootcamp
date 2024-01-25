// - Lernziel: Variablen deklarieren und initialisieren. Anwendung der arithmetischen Operatoren.
// - Deklariere die Variablen x = 20 und y = 30\. Für diese Variablen sollst du nun arithmetische Operatoren verwenden.

let x = 20;
let y = 30;

// - Addiere x und y und gib das Ergebnis in der Konsole aus.
console.log(x + y);

// - Substrahiere y von x und zeige das Ergebnis in der Konsole. Dann subtrahiere x von y und gib das Ergebnis in der Konsole aus.
console.log(x - y);
console.log(y - x);

// - Multipliziere x und y und gib das Ergebnis in der Konsole aus.
console.log(x * y);

// - Teile x durch y und gib das Ergebnis in der Konsole aus.
console.log(x / y);

// - Deklariere eine weitere Variable z mit dem Wert 10\. Multipliziere x und y. Teile dann das Ergebnis durch z. Speichere das Ergebnis in einer neuen Variablen namens resultOne.
let z = 10;
console.log((x * y) / z);

let resultOne = (x * y) / z;
console.log(resultOne);

// - Weiter geht es mit zwei weiteren Variablen a und b. Die Variable a hat den Wert 15 und b den Wert 9\. Nutze auch hier für die folgenden Beispiele arithmetische Operatoren.
let a = 15;
let b = 9;

// - Zeige den Rest an, wenn a durch b geteilt wird. Nutze [Remainder(%)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder), auch Modulus Operator genannt.
console.log(a % b);

// - Deklariere eine weitere Variable c mit dem Wert 20\. Addiere a und b und multipliziere das Ergebnis mit c. Speichere das Ergebnis in der Variable resultTwo. Gib resultTwo in der Konsole aus.
let c = 20;
console.log((a + b) * c);

let resultTwo = (a + b) * c;
console.log(resultTwo);

// - Inkrementiere a. Gib das Ergebnis in der Konsole aus.
a++;
console.log(a);
// - Dekrementiere b. Gib das Ergebnis in der Konsole aus.
b--;
console.log(b);
// - Substrahiere b von a und speichere das Ergebnis in einer neuen Variablen resultThree.
let resultThree = a - b;
console.log(resultThree);
// - Gib den Rest aus, wenn resultOne durch resultTwo geteilt wird. Nutze den Remainder(%) bzw. Modulu-Operator.
console.log(resultOne % resultTwo);
