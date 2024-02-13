//! for loop
// map/foreach/for-of braucht immer ein array, ist gebunden daran, immer ein array zu haben
// ohne array braucht man for-Loop
// for-Loop kann nicht wie map() in einer Variable gespeichert werden, steht immer für sich allein
// kann mit for() festlegen, wo Schleife starten und wie oft sie durchlaufen soll

//# Wann welcher Loop?
// Schleife ist von array/string abhängig --> map(), forEach(), for of(), (for(), findet Marzio bisschen unpraktisch)
// Schleife ist nicht abhängig von array/string --> for(), wo ich individuell festlegen kann, ab welchem Index und wie oft die Schleife durchlaufen soll

//* Klassischer for-Loop
// Syntax:
// for (statement1; statement2; statement3){was soll passieren?}
// for (let i = x; i <= y; i++;){was soll passieren?}
// der Variablenname ist frei wählbar, es wird idR aber i für index genutzt
// idR immer i++, weil ich eigentlich immer einen Durchlauf nach dem anderen machen will; +2 oder *2 oä deshalb eher sehr selten

for (
  let i = 1; // i wird als 1 definiert
  i <= 10; // i darf aber maximal 10 sein, soll nicht größer werden
  i++ // gebe i immer einen Wert mehr mit
) {
  console.log(i); // mit jedem i++ soll das hier ausgeführt werden, deshalb habe ich jetzt die Zahlen von 1 bis 10 als einzelne Ausgaben in der Konsole
}

for (let pfannkuchen = 0; pfannkuchen <= 20; pfannkuchen++) {
  console.log(pfannkuchen);
}

//# Achtung vor infinity loops!
// for (let i=9; i>=6; i++){
//     console.log(i)
// }
// --> wenn ich mit einem höheren i-Wert starte (hier 9), als meine Grenze ist (hier i>=6), erhalte ich einen infinity-loop, weil der Grenzwert nie erreicht werden kann, da er bereits mit i-Wert überschritten ist, und der Rechner hängt sich auf

// for (let i=50; i>=0; i--){
// console.log(i)
// }
// --> gleiches gilt, wenn i größer ist als der Grenzwert und runtergezählt werden soll

//* Mehrdimensionale Schleifen: nested loops
// die äußere Schleife startet, durchläuft die innere Schleife, dann geht sie in die nächste Runde der äußeren Schleife, durchläuft die innere Schleife, etc. - insgesamt 3x
// bei jedem Durchlauf der äußeren Schleife wird einmal die innere Schleife durchlaufen
// braucht man im echten Leben nicht sooo häufig
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(`Äußere Schleife: ${i}, Innere Schleife ${j}`);
  }
  console.log("äußere Schleife fertig", i);
}

//* for-Schleife mit arrays
let countries = ["France", "Germany", "Spain", "Italy"];

// so bekommen wir das array:
console.log(countries);

// so bekommen wir die Länge vom array:
console.log(countries.length);

// so bekomme ich einen bestimmten Wert aus dem array:
console.log(countries[1]);

// Länge brauchen wir für die Schleife; starten bei 0, weil auch die array-Zählung bei 0 anfängt:
for (let i = 0; i < countries.length; i++) {
  console.log(i); // gibt jede Position als Zahl raus (0-3)
  console.log(countries[i]); // gibt die einzelnen Werte aus dem array nacheinander aus
  console.log(countries[i].toUpperCase()); // kann die einzelnen Werte so auch manipulieren; hier werden alle Werte in Großbuchstaben ausgegeben
}

//* Checken, ob eine Zahl gerade oder ungerade ist:
// array mit Zahlen:
let zahlen = [3, 32, 23, 235, 5, 6, 88, 2, 4, 5, 65, 100];

// leeres array, in das später die geraden Zahlen via push() eingefügt werden:
let geradeZahlen = [];

// Schleife, um die geraden Zahlen zu finden und im neuen array zu speichern:
for (let i = 0; i < zahlen.length; i++) {
  if (zahlen[i] % 2 === 0) {
    geradeZahlen.push(zahlen[i]);
  }
}

console.table(geradeZahlen);

//* Berechnung der Durchschnittsnote:
let notenArray = [1, 3, 2, 5, 4, 3, 1, 3, 2];

// Funktion zur Berechnung der Noten:
const durchschnittsnote = (noten) => {
  // Startpunkt festlegen, ab dem die Noten hinzugezählt werden:
  let summe = 0;

  // loop, um durch alle Positionen des arrays zu laufen:
  for (let i = 0; i < noten.length; i++) {
    summe += noten[i]; // --> 0 (Startpunkt) + 1 + 3 + 2 etc => 24
    // summe = summe + noten[i]; --> Langschreibweise für Zeile 92
  }

  // Berechnen der Durchschnittsnote: Summe / Anzahl der Noten:
  let durchschnitt = summe / noten.length;
  return Number(durchschnitt.toFixed(2)); // Return, damit Wert außerhalb der Funktion zur Verfügung steht; Wert auf 2 Kommastellen gerundet und als Number ausgegeben
  // statt eines return hätte man auch außerhalb der Funktino zb die leere Variable let durchschnitt festlegen können, dieser den neuen Wert zuweisen können und dann hätte mana uch außerhalb der FUnktion damit weiterarbeiten können
};

console.log(durchschnittsnote(notenArray));

// da ich in der Funktion mit return arbeite, brauche ich eine Variable, in der ich den Wert aus der Funktion speichere, um damit weiterzuarbeiten:
let durchschnittsnotenVar = durchschnittsnote(notenArray);
console.log(`Die Durchschnittsnote des Schülers ist ${durchschnittsnotenVar}`);

//* string in einem for-Loop
let stringTest = "Deutschland";
for (let i = 0; i < stringTest.length; i++) {
  console.log(stringTest[i]); // --> gibt jeden Buchstaben einzeln aus
}

console.clear();

//! for-of-Schleife
// seit ES6; bündiger und kürzer; ohne zusätzliche Variablen, kann über alles iterieren, was einen Index hat
// läuft von index 0 bis zum Endindex durch
// Nachteil: wir brauchen zwingend array oder string, können Start- und Endpunkt nicht frei definieren
// Marzio benutzt sie nicht so häufig, weil er in solchen Fällen idR map() nutzt
// Syntax: for(let i of array){Was soll passieren?}
let colors = ["green", "red", "blue", "black"];
for (let i of colors) {
  console.log(i); //--> gibt Farbwerte aus array aus
}

let superString = "Text";
for (let i of superString) {
  console.log(i); //--> gibt jeden Buchstaben einzeln aus
}
