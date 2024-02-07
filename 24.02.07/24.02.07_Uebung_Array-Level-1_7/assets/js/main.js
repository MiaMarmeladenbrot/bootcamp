// ! Aufgabe 1_4
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

// ! Aufgabe 1_7
// - Lernziel: Array-Methode unshift() Verstehen und Anwenden.
// - Eine weitere Array-Methode ist [unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array/unshift?retiredLocale=de). Hierbei wird vorne ein Wert hinzugefügt und die Indexe von allen anderen Werten im Array rücken eine Position nach hinten.
// - Füge deinem Array friends und favoriteFood mindestens 2 Werte hinzu.
// - Lasse dir zum besseren Verständnis das Array vorher und nachher in der Konsole ausgeben.
friends.unshift("Julia", "Aron");
console.table(friends);

favoriteFood.unshift("Pho", "Lasagne");
console.table(favoriteFood);
