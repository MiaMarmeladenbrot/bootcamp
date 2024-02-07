// ! Aufgabe 1-1
// - In dieser Übung lernst du, wie du [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array?retiredLocale=de id=) in JavaScript definieren kannst.
// - Erstelle 3 Arrays mit den Namen: person, friends und favoriteFood.
// - In jedes dieser Arrays kommen 3 Werte. Bei person Angaben zu deiner Person, bei friends kommen deine Freund:innen rein und bei favoriteFood deine 3 Lieblingsgerichte.
// - Lasse dir jedes Array in der Konsole ausgeben.

const person = ["33 Jahre", "wohnhaft in MUC", "norddeutsch"];
const friends = ["Silas", "Theresa", "AK"];
const favoriteFood = ["Pizza", "Pasta", "Grünkohl"];

console.table(person);
console.table(friends);
console.table(favoriteFood);

// ! Aufgabe 1-2
// - Lernziel: Zugriff auf Array-Werte erlernen und anwenden.
// - Jetzt, da du weißt, wie man ein Array definiert, kannst du versuchen, auf einzelne Werte zuzugreifen.
// - Denke daran, dass [Arrays 0-indiziert](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array?retiredLocale=de#array%5Findices) sind, d.h. sie fangen bei 0 an zu zählen.
// - Um auf ein einzelnes Element zuzugreifen, verwende den Namen des Arrays gefolgt von eckigen Klammern und dem Index.
// - Zum Beispiel: friends\[1\] gibt den Wert an der Position 1 im Array friends zurück.
// - Lasse dir aus deinen vorhin erstellten Arrays person, friends und favoriteFood die einzelnen Werte in der Konsole ausgeben.

console.log(person[0]);
console.log(person[1]);
console.log(friends[2]);
console.log(friends[1]);
console.log(favoriteFood[0]);
console.log(favoriteFood[2]);
