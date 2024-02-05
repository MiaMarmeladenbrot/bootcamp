// ! Return
console.log("%c === Return ===", "background: red; color: white");
// Einen Return benötigen wir,um einen Wert außerhalb der Funktion verfügbar zu machen
// Ein Return beendet die Funktion, dh es kann nur einen Return geben, alles, was danach kommt, wird nicht mehr ausgeführt.

//* Beispiel 1
function returnSomething() {
  return console.log("hallo return");

  // den folgenden Befehl werden wir in der Konsole nicht sehen, da er nach dem Return kommt
  console.log("hallo nach dem return");
}
returnSomething();

//* Beispiel 2
function gehtNicht(a, b) {
  let outputGehtNicht = a + b;
  console.log(outputGehtNicht);
}
// Konsolen-Befehl triggert error, weil die Variable innerhalb der Funktion definiert wurde und nicht global:
// console.log(outputGehtNicht);
gehtNicht(5, 6);

function add(a, b) {
  let outputGeht = a + b;
  return outputGeht;
}
// da wir in der Funktion einen return genutzt haben, kann ich den Wert der lokalen Variable (aber nicht die lokale Variable selbst!) jetzt auch im globalen Scope ausgeben lassen und damit weiterarbeiten:
console.log(add(4, 1));
// damit ich nicht immer die Funktion aufrufen muss und einfacher mit dem ausgegebenen Wert weiterarbeiten kann, erstelle ich eine Zwischenvariable für den Funktionsaufruf:
let returnOutput = add(6, 10);
console.log({ returnOutput });
// --> geschweifte Klammern innerhalb des console.logs gibt auch den Variablennamen mit aus in der Konsole

//* Beispiel 3
// checken, ob gerade oder nicht
let num2 = 10;

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let ergebnisGerade = isEven(num2)
  ? `Die Zahl ${num2} ist gerade` // ist immer der true-Wert
  : `Die Zahl ${num2} ist nicht gerade`; // ist immer der false-Wert

console.log(ergebnisGerade);

//* Beispiel 4
// chekcken, ob eine Zahl positiv, negativ oder null ist

let nummerChecken = 111;

function checkNumber(num) {
  if (num > 0) {
    return "positiv";
    // jedes if/else kann einen eigenen Return haben
  } else if (num < 0) {
    return "negativ";
  } else {
    return "null";
  }
}

// checken, ob Funktion funktioniert:
console.log(checkNumber());

let result = `Die Zahl ${nummerChecken} ist ${checkNumber(nummerChecken)}`;
console.log(result);

// ! Arrow Function
console.log("%c === Arrow Function ===", "background: red; color: white");
// neue Schreibweise einer Funktion, seit ES6
// auch fat arrow function genannt
// Vorteil: Möglichkeit, einzeilige Funktion zu schreiben
// - alte Schreibweise:
const bootcamp = "Vollzeitkurs";
function whichBootcamp() {
  console.log(`Wir sind im ${bootcamp}`);
}
whichBootcamp();

// - neue Schreibweise:
// wird idR immer als konstante Variable festgelegt:
const whichBootcampNew = () => {
  console.log(`Wir sind im ${bootcamp}`);
};
whichBootcampNew();

// - verkürzte Version (ohne {}) - nur für einzeiligen Code!
// Marzio ist nicht so Fan, weil es unübersichtlicheren Code produziert, seiner Meinung nach lieber etwas mehr Zeilen, dafür aber strukturierteren Code
const bootcampSuperCode = () => console.log(`Wir sind im ${bootcamp}`);
bootcampSuperCode();

// - verkürzte Version mit Parameter
const bootcampSuperCode1 = (bootcamp) => console.log(`Wir sind im ${bootcamp}`);
bootcampSuperCode1("FullStack");

// ! scope Wdh.
console.log("%c === Scope ===", "background: red; color: white");

//- Globaler Scope
// innerhalb unserer kompletten JS Datei
// kann überall aufgerufen werden
const bootcampNew = "Vollzeit";
console.log(bootcampNew);

const whitchBootcamp = () => {
  console.log(`Wir sind im ${bootcampNew}`);
};
whitchBootcamp();

//- lokaler Scope
// liegt zb innerhalb eines Funktionskörpers
// können nur innerhalb der Funktion darauf zugreifen
const superBootcamp = () => {
  const superDuperBootcamp = "Teilzeit";
};
// der folgende Befehl triggert error, da die Variable lokal definiert ist und nicht im globalen Scope aufgerufen werden kann
// console.log(superDuperBootcamp);

//- globale Variable erst in einer Funktion zuweisen:
let mix; //muss eine let-Variable sein
const mixFunc = (superNummer) => {
  if (superNummer % 2 === 0) {
    mix = "gerade";
  } else {
    mix = "ungerade";
  }
};
mixFunc(3);
console.log(mix);
