// - Eine weitere string-Methode ist: \[replace()\](https://www.w3schools.com/jsref/jsref%5Freplace.asp). Auch diesen Befehl kannst du verwenden, um die gewünschten Zeichenketten zu erhalten.
// - Nutze wiedereinmal die folgende Variable const text = "Sam is good at codingschool" und zeige mit der Methode "replace" folgende Ausgabe in einem HTML-Dokument an:
// - Sam is bad at school
// - Susi is good at school
// - Sam is good at tennis
// - Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar + "  "), um das Ergebnis anzuzeigen.

const text = "Sam is good at codingschool";
console.log(text);
document.write(text);

const bad = text.replace("good", "bad", "", "coding").replace("coding", "");
console.log(bad);
document.write(bad);

const Susi = text.replace("Sam", "Susi").replace("coding", "");
console.log(Susi);
document.write(Susi);

const tennis = text.replace("codingschool", "tennis");
console.log(tennis);
document.write(tennis);
