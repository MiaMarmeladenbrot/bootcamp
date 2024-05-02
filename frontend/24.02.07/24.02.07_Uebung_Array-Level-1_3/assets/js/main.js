// ! Aufgabe 1_1
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

// ! Aufgabe 1_3
// - Jetzt kannst du Arrays erstellen und deren einzelne Werte ausgeben.
// - Um die Anzahl der Werte in einem Array zu ermitteln, kannst du die Array-Methode [length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array/length) verwenden.
// - Verwende die length-Methode, um zu überprüfen, wie viele Werte sich in deinen Arrays befinden.
// - Lasse das Ergebnis in der Konsole ausgeben.
// - Achte darauf, welches Ergebnis dir die Methode in der Konsole anzeigt.
console.log(person.length);
console.log(friends.length);
console.log(favoriteFood.length);
