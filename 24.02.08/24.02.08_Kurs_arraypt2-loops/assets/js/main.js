// ! array methods pt 2
const carName = ["Audi", "BMW", "Seat", "Skoda", "Mercedes"];
console.table(carName);

//* .splice()
// kann gezielt Werte löschen bzw. ersetzen
// 1. Parameter => Wo soll was hinzugefügt werden?
// 2. Parameter => Wie viele Elemente sollen gelöscht/überschrieben werden? (0=keins, 1=eins, 2=eins und das folgende, etc)
// 3. Parameter (optional) => neues Element

//? VW & Fiat hinzufügen:
carName.splice(2, 0, "VW", "Fiat");
console.table(carName);
// idR wird das wenig genutzt, da man  neue Werte idR am Ende des arrays hinzufügen will

//? VW löschen:
// 2 = Position des zu löschenden Elements
// 1 = Anzahl der zu löschenden Elemente ab Pos. 2
carName.splice(2, 1);
console.table(carName);

//? Seat % Skoda löschen:
// 3 = Position des zu löschenden Elements
// 2 = Anzahl der zu löschenden Elemente ab Pos. 3
carName.splice(3, 2);
console.table(carName);

//? Audi mit Audoli ersetzen:
carName.splice(0, 1, "Audoli");
console.table(carName);

//? Audoli mit Audi ersetzen mithilfe von indexOf():
console.log(carName.indexOf("Audoli"));
carName.splice(carName.indexOf("Audoli"), 1, "Audi");
console.table(carName);

//* slice()
// schneidet einen Teil des arrays aus und gibt ein neues array zurück
// 1. Parameter => Startindex
// 2. Parameter => Endindex (optional), wie viele Positionen ab Startindex sollen übernommen werden (hier 0+1+2 = 3 Werte)?
const newCars = carName.slice(0, 3);
console.table(newCars);
// - Wichtig: Ursprungsarray bleibt gleich, slice wird in einer neuen Variablen gespeichert
console.table(carName);

// wenn ich keinen Endindex angebe, zieht er automatisch alle Werte bis zum Ende:
const otherCarNames = carName.slice(2);
console.table(otherCarNames);

//* sort()
// sortiert die Werte im array
// zB nützlich für Filter in Onlineshops

//? numbers:
const numbers = [3, 5, 6, 1, 2, 9];
console.log(numbers);
numbers.sort();
console.log(numbers); //--> 1, 2, 3, 5, 6, 9

//? strings:
const strings = ["B", "A", "Z", "K"];
console.log(strings);
strings.sort();
console.log(strings); //--> A, B, K, Z

//* sort() als Funktion:
//? Hohe Nummern sortieren:
// hier gibt es ein Problem, weil sort() die Ziffernkette in einen string umwandelt
// deshalb wird nur nach der ersten Ziffer einer Zahl sortiert und die folgenden Ziffern werden ignoriert:
const highNumbers = [10, 100, 1, 32, 111, 222, 2, 33];
console.log(highNumbers);
highNumbers.sort();
console.log(highNumbers); //--> 1, 10, 100, 111, 2, 222, 32, 33

//? Hohe Nummern sortieren - Lösung (gilt auch für Wörter):
// Lösung ist eine anonyme Callback-Function (eine Funktion direkt in einer Methode)
// callback-function braucht immer mind. 1 Parameter
// Parameter a und b stehen für sämtliche Zahlen, die nebeneinander stehen
// alle Zahlenpaar werden von links nach rechts subtrahiert
// bei negativem Ergebnis ändert sich nichts (zB 10 - 100 = -90)
// bei positivem Ergebnis werden die Werte getauscht (zB 100 - = 90)
// bei Null passiert nichts
// lange Schreibweise mit return (von Marzio wg. Übersichtlichkeit bevorzugt):
highNumbers.sort((a, b) => {
  return a - b;
});
// Kurze Schreibweise - bei einzeiligen Befehlen kein return nötig, da er bereits automatisch enthalten ist:
highNumbers.sort((a, b) => a - b);
console.log(highNumbers); //--> 1, 2, 10, 32, 33, 100, 111, 222

//* sort() groß -> klein
highNumbers.sort((a, b) => b - a);
console.log(highNumbers); //--> 222, 111, 100, 33, 32, 10,2, 1

//* reverse
// hat Marzio noch nie benutzt
// dreht die numbers bzw. strings um
// nützlich um gemeinsam mit sort() Wörter von Z - A zu sortieren, siehe unten
const reverseNum = [1, 2, 3, 4, 5];
reverseNum.reverse();
console.log(reverseNum); //--> 5, 4, 3, 2, 1

//* sort + reverse
// sortiert von Z-A
let languages = ["German", "English", "French"];
languages.sort().reverse();
console.table(languages);

//* filter
// filtert die Werte nach bestimmten Kriterien und gibt neues array aus
// notwendig für Filter- und Suchfunktionen (zB wenn ich nach Juras suche, sollen alle Jurassic Park Filme erscheinen)
// gefilterte Daten sollen in Variable gespeichert werden
// filter braucht immer eine callback-function
// wenn er mit Filter nichts findet, kommt einfach ein leeres Feld in der Konsole

// Ursprungs-Array:
const filmTitel = [
  "Inception",
  "The Shawshank Redemption",
  "Pulp Fiction",
  "The Dark Knight",
  "Forrest Gump",
  "The Matrix",
  "The Godfather",
  "Schindler's List",
  "Fight Club",
  "The Lord of the Rings: The Fellowship of the Ring",
  "The Silence of the Lambs",
  "Star Wars: Episode IV - A New Hope",
  "The Avengers",
  "Titanic",
  "The Lion King",
  "Jurassic Park",
  "Gladiator",
  "The Departed",
  "Casablanca",
  "The Wizard of Oz",
  "Gone with the Wind",
  "The Shining",
  "Avatar",
  "Eternal Sunshine of the Spotless Mind",
  "Inglourious Basterds",
  "The Grand Budapest Hotel",
  "The Revenant",
  "The Social Network",
  "Interstellar",
];
console.table(filmTitel);

//? So filtern wir alle Titel, die länger als 20 Zeichen sind, und speichern sie in einer Variable namens longMovies
// die Variable wird automatisch als array gespeichert, auch ohne eckige Klammern, weil das Element, auf das es zugreift, ein array ist
// in den Klammern ein Parameter (frei benennbar), der für jeden einzelnen Wert steht
// mit length des Parameters checkt er nun jeden Wert, ob er länger als 20 Zeichen ist

const longMovies = filmTitel.filter((singleMovieTitelMarzio) => {
  return singleMovieTitelMarzio.length > 20;
});
console.table(longMovies);

//? So filtern wir nach einem Suchwort:
// funktioniert nur mit korrekter Groß/Kleinschreibung:
const suchwort = "the";
const nameFilter = filmTitel.filter((einzelneFilme) => {
  return einzelneFilme.includes(suchwort);
});
console.table(nameFilter); //--> 5 Ergebnisse nur mit the

//? Filterfunktion verbessern
// nicht mehr case sensitive
const nameFilterGroßKlein = filmTitel.filter((einzelneFilme) => {
  return einzelneFilme.toLowerCase().includes(suchwort.toLowerCase());
});
console.table(nameFilterGroßKlein); //--> 16 Ergebnisse mit the und The

// ! Schleifen / Loops
// gibt mehrere Schleifentypen, heute geht es nur um Schleifen in Bezug auf array
// machen eine Automatisierung eines array
// können verschiedene Operationen in einer Schleife zusammenfassen

const names = ["Lisa", "Tobi", "Izel", "Mia", "Even", "Stefan", "Adrian"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

//* forEach()
// benötigt callback-Function, also auch immer mind. einen Parameter
// erster Parameter bezieht sich auf den Wert des arrays
// später im React brauchen wir zwingend auch index als Parameter an 2. Stelle in den Klammern
// folgende Schleife console.logt jeden Wert in einem einzelnen console.log:
names.forEach((döner) => {
  console.log(döner);
});

// Mit einer Schleife ins HTML schreiben:
let images = [
  "https://picsum.photos/200",
  "https://picsum.photos/201",
  "https://picsum.photos/202",
  "https://picsum.photos/203",
  "https://picsum.photos/204",
  "https://picsum.photos/205",
  "https://picsum.photos/206",
  "https://picsum.photos/207",
  "https://picsum.photos/208",
  "https://picsum.photos/209",
];

const imgBox = document.querySelector(".img-box");
images.forEach((singleImg, index) => {
  console.log(index);
  console.log(singleImg);

  // können die imgBox jetzt mit += ins HTML einfügen; nur + überschreibt jeweils das vorhergehende Bild:
  imgBox.innerHTML += `<img src="${singleImg}" alt="">`;
});

// Alternative ohne array sähe so aus, ist also viel komplizierter:
imgBox.innerHTML += `<img src="${images[0]}" alt="">`;
imgBox.innerHTML += `<img src="${images[1]}" alt="">`;
imgBox.innerHTML += `<img src="${images[2]}" alt="">`;
imgBox.innerHTML += `<img src="${images[3]}" alt="">`;

//* map()
// funktioniert grundsätzlich wie forEach()
// gibt uns aber ein neues array zurück, verändert das Ursprungs-Array aber nicht
const number3 = [10, 4, 2, 22];
console.log(number3);

const doubleNum = number3.map((izelsNumer) => {
  return izelsNumer * 2;
});
// Ursprungs-array bleibt unverändert:
console.log(number3); //--> 10, 4, 2, 22
// die geänderten Werte sind im zweiten array gespeichert:
console.log(doubleNum); //--> 20, 8, 4, 44

//# forEach() vs. map()
const studentNames = ["Nina", "Susi", "Max"];
// forEach() gibt kein neues array zurück, sondern nur einzelne Werte aus dem ersten array (um sie zB ins HTML zu schreiben); kann also nur innerhalb von forEach() genutzt werden
// map() gibt neues array zurück, dessen veränderte Werte ich auslesen kann und damit weiterarbeiten kann; kann also auch außerhalb von map() verwendet werden, indem ich der map()-Methode zB eine neue Variable gebe
// --> map() geht für alles, forEach() nur für manches

console.log(studentNames.forEach((names) => names.toUpperCase())); //--> undefined
console.log(studentNames.map((names) => names.toUpperCase())); //--> neues array mit den Werten NINA, SUSI, MAX

//
const mapLowName = studentNames.map((names) => names.toLowerCase());
console.log(mapLowName); //--> neues array mit den Werten nina, susi, max

const forEachLowName = studentNames.forEach((names) => names.toLowerCase());
console.log(forEachLowName); //--> undefined

console.log(studentNames); //--> weiterhin unverändert
