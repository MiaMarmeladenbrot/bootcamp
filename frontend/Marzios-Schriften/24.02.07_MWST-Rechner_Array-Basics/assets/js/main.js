// # ==== MWST Rechner ====

// - Funk1 (text ändern)
// 1. onchange funktion immer wenn der radio geändert wird
// 2. Values auslesen von Radio (netto zu brutton) / (brutton zu netto)
// 3. text was geändert werden soll selektieren
// 4. Abfragen welches value gesetzt ist und dann den text ändern

// - Funk2 (berechnung machen)
// 1. onSumit schrieben
// 2. Drei Values auslesen (input, radios Netto - Brutto, 7% oder 19%)
// 3. Output Selektieren
// 4. MWST Berechnung

const nettoBruttoText = document.querySelector(".netto-vs-brutto-text");
const nettoBruttoTextBottom = document.querySelector(".brutto-netto-betrag");
const outputMwst = document.querySelector(".mwst-betrag");
const totaloutput = document.querySelector(".endpreis");

// ! Funktion zum berechnen der MWST
const berechnen = (event) => {
  event.preventDefault();

  //   Holt Value von Brutto / Netto
  const bruttoNetto = document.querySelector(
    'input[name="brutto-netto"]:checked'
  ).value;

  //   Holt Value von 7%(1.07) / 19%(1.19)
  const siebenOderNeuzehnPro = Number(
    document.querySelector('input[name="prozent"]:checked').value
  );

  //   Holt Value von inputfeld (betrag)
  const inputVal = Number(document.querySelector(".val").value);

  //   Logs von Values
  console.log({ bruttoNetto }, { siebenOderNeuzehnPro }, { inputVal });

  //  Berachnung von 7% oder 19% Mwst
  const mwst = Number((inputVal * siebenOderNeuzehnPro - inputVal).toFixed(2));
  console.log({ mwst });

  //   Hier Berechnen wir die 7% oder 19% von betrag
  const newMwst = Number((inputVal / siebenOderNeuzehnPro).toFixed(2));
  console.log({ newMwst });

  const mwstBruttozuNetto = Number((inputVal - newMwst).toFixed(2));
  console.log({ mwstBruttozuNetto });

  // checken was ausgewählt ist
  if (bruttoNetto === "netto-brutto-aufschlagen") {
    // 1 Netto zu Brutto
    outputMwst.innerHTML = `${mwst} €`;
    totaloutput.innerHTML = `${inputVal + mwst} €`;
  } else {
    // 2 Brutto zu Netto
    outputMwst.innerHTML = `${mwstBruttozuNetto} €`;
    totaloutput.innerHTML = `${newMwst} €`;
  }
};

// ! Funktion zum ändern des Textes
const changeText = () => {
  //   Holt sich das Value was gerade gesetzt ist in den Radio btn
  const bruttoNetto = document.querySelector(
    'input[name="brutto-netto"]:checked'
  ).value;

  console.log(bruttoNetto);

  //   Schreibt es ins html
  nettoBruttoText.innerHTML =
    bruttoNetto === "netto-brutto-aufschlagen"
      ? "Nettobetrag (Preis ohne Mwst.) in Euro*"
      : "Bruttobetrag (Preis inklusive Mwst.) in Euro*";

  //   Schreibt es ins html
  nettoBruttoTextBottom.innerHTML =
    bruttoNetto === "netto-brutto-aufschlagen"
      ? "Bruttobetrag (Endpreis)"
      : "Nettobetrag";
};

// # ==== Array Basics ====

let gericht1 = "Kuchen";
let gericht2 = "Pizza";
let gericht3 = "Döner";

// Mit Array können wir alle gerichte in einen Datensatz speichern. Dabei spielt der Datentyp keine Rolle
// Array kann man wie normale Variablen mit let oder const starten (man benutzt eig immer const)
// Array werde immer mit den [] Klammerpaar angegeben

const lieblingsGeriche = ["Kuchen", "Pizza", "Döner", 3344, 2334, true];

console.log(lieblingsGeriche);
// So bekommen wir eine tabellen übersicht vom Arry mit index
console.table(lieblingsGeriche);

// über den index kann ich ein einzelnes Element aus unseren Array ansprechen
console.log(lieblingsGeriche[0]);
console.log(lieblingsGeriche[5]);
console.log(lieblingsGeriche[2]);

// # === Array Methoden ===

// * indexOf
// Hier suchen wir in einen Array an welche stelle sich ein Wort / zahl  befindet

console.log(lieblingsGeriche.indexOf("Döner")); //  2
console.log(lieblingsGeriche.indexOf("hallo")); // -1 = nicht gefunden

//* 1 = true
//* -1 = false

// - Hier überschreiben wir mit hilfe von index ein wert
console.table(lieblingsGeriche);

// Hier überschriebn wir Döner mit Pasta
lieblingsGeriche[2] = "Pasta";

console.table(lieblingsGeriche);

// * .lenght
// Gib die länge von einen Array zurück, als Zahl
console.log(lieblingsGeriche.length);

const names = ["Tobi", "Mia", "Even", "Thomas"];
console.table(names);

// * namen überschrieben mit indeOf()
// - Statische Möglichkeit
names[0] = "Susi";
console.table(names);

// -Dynamische Möglichkeit
console.log(names.indexOf("Mia"));
names[names.indexOf("Mia")] = "Claudia";
console.table(names);

// * push()
// die push() Methode fügt ein neues Element am Ende hinzu und gibt und ein neue lenght zurück
let pushNames = names.push("Sebastian");
console.log(pushNames); // 5
console.table(names); // array mit Sebastian

// * pop()
// Die pop Methode enfhernt das letzte Element in einem Array und gibt den Wert, des gelöschten Elmentes zurück (Sebastian)
let popNames = names.pop();
console.log(popNames);
console.table(names); // Sebastian wurde wieder glöscht

// * unshift()
// Die unshift Methode fügt ein neues Element am Anfang hinzu und gibt die neue Länge zurück
let unshiftNames = names.unshift("Tobi");
console.log(unshiftNames);
console.table(names); // Tobi wurde an erster stelle hinzugefügt

// * shift()
// die shift Methode entfernt das erste Element in einem Array und gibt den Wert des Element wieder
let shiftNames = names.shift();
console.log(shiftNames);
console.table(names); // Tobi wurde an erster stelle gelöscht

// - Warum const in Array
// Einezelen Werte sind erlaubt mit verschiedene methoden die werte zu verändern
const meinArray = [1, 2, 4];
meinArray.push(103); // Das ist erlaubt
meinArray[1] = 40; // Das ist erlaubt

console.table(meinArray);

// Das gibt mir ein Fehler weil eine Array eine const ist
// meinArray = [3, 2, 3, 2];
