// ! array basics

let gericht1 = "Kuchen";
let gericht2 = "pizza";
let gericht3 = "Döner";

// mit array können wir alle Variablen in einem Datensatz speichern
// arrays kann man wie Variablen mit let oder const starten (man benutzt eigentlich immer const)
// dabei spielt der Datentyp keine Rolle
// arrays werden immer mit eckigem Klammerpaar angegeben
const lieblingsgerichte = ["Kuchen", "Pizza", "Döner", 3344, 111, true];
console.log(lieblingsgerichte);
console.table(lieblingsgerichte); //alternative Ausgabeweise als Tabelle für bessere Übersicht

// jedes Datenelement hat einen Index mit einem Wert ab 0
// mithilfe des Index-Wertes kann ich konkret dieses Datenelement ausgeben
console.log(lieblingsgerichte[0]); //--> Kuchen
console.log(lieblingsgerichte[5]); //--> true
console.log(lieblingsgerichte[2]); //--> Döner

// ! array methods
//* indexOf()
// sucht in einem array, an welcher Stelle sich ein Wort/eine Zahl befindet:
console.log(lieblingsgerichte.indexOf("Döner")); //--> 2
console.log(lieblingsgerichte.indexOf("Hallo")); //--> -1, nicht gefunden --> true = 1 und false = -1

// mithilfe des Index-Wertes können auch Werte überschrieben werden:
console.table(lieblingsgerichte);
lieblingsgerichte[2] = "Pasta";
console.table(lieblingsgerichte);

//- Statische Möglichkeit
const names = ["Tobi", "Mia", "Even", "Thomas"];
console.table(names);
names[0] = "Susi";
console.table(names);

//- Dynamische Möglichkeit, falls ich nicht genau weiß, an welcher Position sich Tobi befindet
names[names.indexOf("Mia")] = "Claudia";
console.table(names);

//* length
// gibt die Länge des array als Zahl zurück (Anzahl der Datenelemente)
console.log(names.length);

//* push()
// fügt ein neues Element am Ende des arrays hinzu und gibt die neue Länge zurück
let pushNames = names.push("Sebastian"); //--> gibt die neue Länge als Einzelwert zurück // geht auch ohne Zwischenvariable
console.table(pushNames); //--> gibt die neue Länge des arrays als Einzelwert zurück
console.table(names); //--> zeigt das gesamte array inkl. neuem Namen an

//* pop()
// entfernt das letzte Datenelement im array
let popNames = names.pop();
console.log(popNames); //--> gibt den Wert des gelöschten Elements aus (hier "Sebastian")
console.table(names); //--> zeigt das gesamte array exkl. gelöschtem Namen an

//* unshift()
// fügt ein neues Element am Anfang des arrays hinzu und gibt die neue Länge zurück
let unshiftNames = names.unshift("Tobi");
console.log(unshiftNames); //--> gibt die neue Länge des arrays als Einzelwert zurück
console.table(names); //--> zeigt das gesamte array inkl. neuem Namen an

//* shift()
// entfernt das erste Datenelement im array
let shiftNames = names.shift();
console.log(shiftNames); //--> gibt den Wert des gelöschten Elements aus (hier "Tobi")
console.table(names); //--> zeigt das gesamte array exkl. gelöschtem Namen an

//! Warum überwiegend const für array?
const meinArray = [1, 2, 3, 4];
// einzelne Werte kann ich manipulieren:
meinArray.push(103); // das ist erlaubt
meinArray[1] = 40; // das ist erlaubt
console.log(meinArray);

meinArray = [3, 2, 3, 2]; // das ist nicht erlaubt und führt zum error "Assignment to constant variable"
// --> ich kann nicht das gesamte Array abändern, sondern nur einzelne darin enthaltene Werte bzw. Inhalte
// --> deshalb werden arrays idR als const gespeichert
