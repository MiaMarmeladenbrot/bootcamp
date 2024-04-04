//# ==== Retrun ====
console.log("%c === Return ===", "background: red; color: white");

// * Ein return benötigen wir um ein wert auserhalb der funktion verfügbar zu machen.
// * Ein return beendet die funktion

// ! BSP 1
function returnSomthing() {
  return console.log("hallo return");

  // Das werden wir nicht in der console sehen das es nach dem return kommt.
  console.log("Hallo nach den return");
}
returnSomthing();

// ! BSP 2
function gehtNicht(a, b) {
  let outputGehtNicht = a + b;

  //   hier kann ich den output sehen
  console.log(outputGehtNicht);
}

// Fehler: weil die variable in einer funktion definiert wurde und nicht global
// console.log(outputGehtNicht);

gehtNicht(5, 6);

function add(a, b) {
  let outputGeht = a + b;
  return outputGeht;
}

let retunOutput = add(6, 10);
// let retunOutput = 16 <-> das steht sozusagen eine zeile darüber

console.log({ retunOutput });

// ! BSP 3

// - Checkebn ob gerade oder nicht

let num2 = 101;

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(num2));

let ergebnisGerade = isEven(num2)
  ? `die zahl ${num2} ist gerade` // das ist immer der true wert
  : `die zahl ${num2} ist nicht gerade`; // das ist immer der false wert

console.log(ergebnisGerade);

// ! BSP 4
// - Checken ob eine Zahl Postiv Negativ oder null ist

let nummerChecken = 111;

function checkNumber(reazysGlücksZahl) {
  if (reazysGlücksZahl > 0) {
    // Jedes If else kann ein eigenes retun haben
    return "positive";
  } else if (reazysGlücksZahl < 0) {
    return "negativ";
  } else {
    return "null";
  }
}

let result = `Die Zahl ${nummerChecken} ist ${checkNumber(nummerChecken)}`;

console.log(result);

// # ==== Arrow Function ====
console.log("%c === Arrow Funktion ===", "background: red; color: white");
// auch fat arrow function gennant
// ist mit ES6 gekommen

const bootcamp = "Vollzeitkurs";

// - Alte schreibweise:
function whichBootcamp() {
  console.log(`Wir sind im ${bootcamp}`);
}
whichBootcamp();

// - Neue Schreibweise:
const whitchBootcampNew = () => {
  console.log(`Wir sind im ${bootcamp}`);
};
whitchBootcampNew();

// - Verkürzte version - nur möglich bei einer zeile code

const bootcampSuperCode = (bootcamp) => console.log(`Wir sind im ${bootcamp}`);

bootcampSuperCode("FullStack Kurs");

// # ==== Scope ====
console.log("%c === Scope ===", "background: red; color: white");

// - Globaler Scope
// Der Globale Scope ist quasi unsere komplette JS Datei
// Wenn etwas im globalen scope definiert ist, kann ich von überall aus drauf zugreifen

const bootcampNew = "Vollzeit";
// frei verfügbar
console.log(bootcampNew);

const whitchBootcamp = () => {
  console.log(`Wir sind im ${bootcampNew}`);
};
whitchBootcamp();

// - Localer Scope
// Der Locale Scope kann zb in einen Funktionskörper sein
// Wenn wir eine Variable in locakaeln scope einer Funktion definieren, können wir nur in der funktion darauf zugreifen

const superBootcamp = () => {
  const superdupperBootcamp = `Vollzeit von Supercode :-)))`;
  //   Geht weil in der Funktion definiert
  console.log(superdupperBootcamp);
};

superBootcamp();

//   Geht nicht weil local definiert
// console.log(superdupperBootcamp);

// - gloable Variable in Funktion zuweisen

let mix;

const mixFunc = (superNummer) => {
  if (superNummer % 2 === 0) {
    mix = "gerade :-)";
  } else {
    mix = "ungerade :-(";
  }
};

// Funktionsaufruf
mixFunc(3);

console.log(mix);