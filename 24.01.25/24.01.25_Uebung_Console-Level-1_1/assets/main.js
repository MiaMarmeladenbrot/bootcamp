// - Lernziel: Funktionalität der Konsole im Browser und Basiswissen zu Variablen. Bonus: einen Wert ins HTML schreiben.

// - Übernimm den vorgegebenen JS-Code (siehe Code-Snippet) und sieh dir das Ergebnis mithilfe des console.log()-Befehls an. Starte deinen Liveserver, um in der Konsole des Chrome-Browsers das Ergebnis zu sehen.

let a = 12;
let b = a * 3;
console.log(b);

// - Gib dann ein "Hello World" in der Konsole aus. Deklariere die Variable firstName mit dem Wert "Anton" und die Variable age mit dem Wert 28\. Zeige nun beide Variablen in der Konsole an.
console.log("Hallo World");

const firstName = "Anton";
let age = "28";

console.log(firstName + age);

// - Deklariere die Variable job mit dem Wert "Trainer:in" und gib sie in der Konsole aus. Deklariere danach die Variable married mit dem Befehl: let married = true; und gib die Variable dann in der Konsole aus.
let job = "Trainer:in";
console.log(job);

let married = true;
console.log(married);

// - Zum Schluss gib alle vorher deklarierten Variablen in einem kombinierten Satz in der Konsole aus, sodass es folgendermaßen aussieht: "Anton ist 28 Jahre alt, von Beruf Trainer:in und ist verheiratet: true."
console.log(
  firstName +
    " ist " +
    age +
    " und arbeitet als " +
    job +
    "und ist verheiratet: " +
    married
);
