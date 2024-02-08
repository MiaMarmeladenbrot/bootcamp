// - Lernziel: Unterschied von Push-Pop und Shift-Unshift.
// - Erstelle ein Array und ordne es einer Variable zu.
// - Das Array hat folgende Werte: 23, 54, 75;
// - Verwende die Push-Methode, um 5 Werte in dein Array einzufügen.
// - Verwende die Unshift-Methode, um 5 Werte an der Vorderseite deines Arrays hinzuzufügen.
// - Verwende die Pop-Methode, um 2 Werte von der Rückseite deines Arrays zu entfernen.
// - Verwende die Shift-Methode, um 2 Werte von der Vorderseite deines Arrays zu entfernen.

const numbers = [23, 54, 75];
console.log(numbers);

// - Verwende die Push-Methode, um 5 Werte in dein Array einzufügen.
numbers.push(12, 50, 23, 40, 88);
console.log(numbers);

// - Verwende die Unshift-Methode, um 5 Werte an der Vorderseite deines Arrays hinzuzufügen.
numbers.unshift(3, 4, 5, 6, 7);
console.log(numbers);

// - Verwende die Pop-Methode, um 2 Werte von der Rückseite deines Arrays zu entfernen.
numbers.pop();
numbers.pop();
console.log(numbers);

// - Verwende die Shift-Methode, um 2 Werte von der Vorderseite deines Arrays zu entfernen.
numbers.shift();
numbers.shift();
console.log(numbers);
