// ! Aufgabe 1_4
// - Lernziel: Verstehen und Anwenden der Array-Methode push().
// - Erstelle ein Array und ergänze es mit der Array-Methode [push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array/push). Mit push() kannst du einen oder mehrere Werte gleichzeitig an das Ende eines Arrays hinzufügen.
// - Verwende push(), um mindestens 2 neue Werte zu deinem Array hinzuzufügen.
// - Verwende console.log(), um den Inhalt und die Länge deines Arrays vor und nach dem Hinzufügen neuer Werte anzuzeigen. Beobachte die Veränderungen in der Konsole.
const charactersDC = ["Batman", "Superman", "Wonderwoman"];
console.table(charactersDC);
charactersDC.push("Aquaman", "Harley Quinn");
console.table(charactersDC);

const lieblingsGerichte = ["Pizza", "Pasta", "Lasagne"];
console.table(lieblingsGerichte);
lieblingsGerichte.push("Pho", "Grünkohl");
console.table(lieblingsGerichte);

// ! Aufgabe 1_5
// - Lernziel: Array-Methode pop() Verstehen und Anwenden.
// - Wer hinzufügt, der muss es auch wieder entfernen können. Dafür wird die Array-Methode [pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array/pop) genutzt. Bei pop() wird der letzte Wert von einem Array entfernt und der entfernte Wert wird zurückgegeben.
// - Nutze wiedereinmal die Arrays aus der vorherigen Übung. Entferne jeweils einen Wert aus deinen Arrays und lasse dir den entfernten Wert in der Konsole ausgeben.
// - Zur besseren Darstellung kannst du dir das Array vor dem pop() ausgeben lassen, dann den entfernten Wert und dann das Array nochmal. Schau dir die Ergebnisvorschau an.
let characterDCPop = charactersDC.pop();
console.log(characterDCPop);
console.table(charactersDC);

let lieblingsGerichtePop = lieblingsGerichte.pop();
console.log(lieblingsGerichtePop);
console.table(lieblingsGerichte);
