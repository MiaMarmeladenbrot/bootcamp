// # ==== for loop ====

// for(statement1: statment2; statmant3)

// * Klassischer For Loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// i ist frei wählbar. Es Wird aber meistens i = index benutzt
// hier heißt i = pfannkuchen
for (let pfannkuchen = 1; pfannkuchen <= 20; pfannkuchen++) {
  console.log(pfannkuchen);
}

// ! ACHTUNG vor: INFINITY LOOPS

// for (let i = 9; i >= 6; i++) {
//      console.log(i);
// }

// # ===== Runterzählen =====
// Wenn ich von groß auf klein zählen möchte muss der start index höher als der zweiter statment sein.
for (let i = 50; i >= 45; i--) {
  console.log(i);
}

// # ==== Schleife in einer Schleife "nestet Loops" ====
// In diesem Beispiel haben wir eien äusere schleife, die vio 1 bis 3 läuft, und eine inner schleife die von 1 bis 5 läuft. Bei dene Durchlauf der äussen schleife wied die inne schleife vollständig durchlaufen (5)

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(`Äußere Schleife: ${i}, Innere Schleife: ${j}`);
  }

  console.log("Äußere schleife fertig", i);
}

// # ===== # For Schleife mit Array =======

let contrys = ["france", "germany", "span", "italy"];

// So bvekommen wir das array
console.log(contrys);

// So bekommen wir die länge von array
console.log(contrys.length);

//So bekomme ich die einzelene werte raus (von array)
console.log(contrys[3]);
console.log(contrys[1]);
console.log(contrys[0]);

for (let i = 0; i < contrys.length; i++) {
  console.log(i);
  console.log(contrys[i].toUpperCase());
}

// * Sowas geht übrigens nicht
// let big = for (let i = 0; i < contrys.length; i++) {
//   console.log(contrys[i].toUpperCase());
// }

// # Checken ob eine Zahl gerad oder ungerade ist
// array mit zahlen
let zahlen = [
  3, 32, 2, 4, 2, 54, 56, 34, 45, 3, 4, 23, 5, 67, 66, 45, 3, 4, 5, 34, 3, 100,
  8,
];

// Array wo die gerade zahlen drinnen sind
let geradeZahlen = [];

// schleife umd die geraden zahlen zu finden und im neuen array zu speichern
for (let i = 0; i < zahlen.length; i++) {
  if (zahlen[i] % 2 === 0) {
    geradeZahlen.push(zahlen[i]);
  }
}

// Logs
console.table(geradeZahlen);

// # Berechnung der durschnittsnote

let notenArray = [6, 5, 22, 8, 4, 3, 1, 3, 2, 1, 2];
let maxNoten = [7, 2, 2, 4, 2, 4, 2];

// Funktion zur Berrechnung der Noten
const durchschnittsNote = (noten) => {
  let summe = 0;

  //   Addieren der noten zu einer großen zahl
  for (let i = 0; i < noten.length; i++) {
    console.log(noten[i]);
    summe = summe + noten[i];
  }

  //   berechnen der durschnittsnote
  let durschnitt = summe / noten.length;

  //   Return mir die durch. note und wandelt es in in 2 nachkommserstellen um + nummer
  return Number(durschnitt.toFixed(2));
};

let durchschnittsNotenVariabele = durchschnittsNote(notenArray);

let maxSeinNotenDursch = durchschnittsNote(maxNoten);

console.log(
  `die Durchschnittsnote des Schülers ist: ${durchschnittsNotenVariabele}`
);

console.log("Max seine noten sind", maxSeinNotenDursch);

// leer console
console.clear();

// # String in For Loop

let stringText = "Deutschland";

for (let i = 0; i < stringText.length; i++) {
  console.log(stringText[i]);
}

// leer console
console.clear();

// # "for of"  Schleife
// ist mti es6 gekommen, kurz und bündiger. Ohne zusätzliche Variablen und kann übe ralkles interieren was ein index hat zb Array oder String.
// wir benötigen auch ein array / string

let colors = ["green", "red", "blue", "black"];

// i = index (frei wählbar)
// colores = der array name
for (let i of colors) {
  console.log(i);
}

let superString = "Text";

for (let i of superString) {
  console.log(i);
}

// # Wann welcher Loop
// * mit Array / String
// Wenn ich über ein Array, String iterieren will benutzen wir map(), forEach(), for of(), {for()}

// * ohne Array / String
// Wenn ich eine schleife benötige die nicht abhängig ist von einen index wie vom string / Array benutzen wir eine ->for<- schleife. hier kann ich individuell den start und den end punkt asuwählen wieoft die schleife durchlaufen soll.
