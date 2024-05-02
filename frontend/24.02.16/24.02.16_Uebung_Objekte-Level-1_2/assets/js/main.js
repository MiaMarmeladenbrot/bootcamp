// - Lernziel: Objects in JavaScript verstehen.
// - In dieser Übung werden wir [Objects](https://wiki.selfhtml.org/wiki/JavaScript/Objekte%5F-%5FEigenschaften%5Fund%5FMethoden) kennenlernen.
// - Erstelle ein Object und speichere es in einer Variable namens person.
// - Deklariere die Eigenschaft name mit dem Wert deines Namens.
// - Deklariere die Eigenschaft alter mit dem Wert deines Alters.
// - Deklariere eine Function sagNameAlter im Object.
// - Nutze den Befehl alert() im Funktionskörper um name & alter anzuzeigen.
// - Gib in der Konsole name und alter aus.
// - Rufe die Function sagNameAlter aus dem Object auf.

const person = {
  name: "Mia",
  age: 33,
  sagNameAlter: function () {
    alert(`Ich bin ${person.name} und ${person.age} Jahre alt`);
    console.log(person.name, person.age);
  },
};

person.sagNameAlter();
