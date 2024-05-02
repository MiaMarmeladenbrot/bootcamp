// # ===== WDH ======

const heros = ["Superman", "Spiderman", "Hulk", "Ironman"];

// - Welchen index hat Spiderman?
// console.log(heros.indexOf("Spiderman"));

// - Wo fängt der index an zu zählen?
// bei 0

// - Wie kann ich ein Element zum Ende hinzufügen?
heros.push("Thor");
// console.log(heros);

// - Wie kann ich ein Element am Anfang hinzufügen?
heros.unshift("SuperMario");
// console.log(heros);

// - Wie kann ich ein Element am Ende entfernen?
heros.pop();
// console.log(heros);

// - Wie kann ich ein Element am Anfang entfernen?
heros.shift();
// console.log(heros);

// # NEUES THEMA
console.log("%c Array Methoden 2", "color: white; background-color: red;");

const carName = ["Audi", "BMW", "Seat", "Skoda", "Mercedes"];

// ! .splice()

// Damit kann man geziel sachen löschen / ersetzen
// Erster Wert: Wo soll hinzugefügt/gelöscht werden?
// Zweiter Wert: Wieviel Elemente sollen gelöscht / überschrieben werden?
// ab Driter Wert: Neue Element (optionl)

carName.splice(2, 0, "VW", "Fiat");
console.table(carName);

// VW löschen
// 2 = ab wo soll gelöscht werden
// 1 = wieviele sachen sollen gelöscht werden
carName.splice(2, 1);
console.table(carName);

// Seat löschen
// 3 = ab wo soll gelöscht werdne
// 1 = Wieviele sachen sollen gelöscht werden
carName.splice(3, 1);
console.table(carName);

// Audi soll zu Audoli werden
carName.splice(0, 1, "Audoli");
console.table(carName);

// Audi soll zu Audoli werden mit indexof
console.log(carName.indexOf("Audi"));

carName.splice(carName.indexOf("Audi"), 1, "Audoli");
console.table(carName);

// ! slice()
// Mit .slice() können wir ein Teil einse Array ausschneiden und geben ein neues Array zurück
// Erste Wert: Start
// Zweite Wert: Ende (option)

let newCars = carName.slice(0, 3);
console.table(newCars);

// Wenn ich kein End wert angeben, dann macht er das automatisch bis ans ende
let otherCarName = carName.slice(2);
console.table(otherCarName);

// Macht nichts. Daher muss ich es in einer Variable speichern
carName.slice(3);

// - WICHTIG: slice verändert das ursprungs array nicht
console.table(carName);

// ! sort()
// Mit .sort() können wir sortieren

// Nummern sortierne
const numbers = [3, 5, 6, 1, 2, 9];
console.log(numbers);
numbers.sort();
console.log(numbers);

// Strings Sortieren
const strings = ["B", "A", "Z", "C"];
console.log(strings);
strings.sort();
console.log(strings);

// Hohe Nummern Sortieren
const numbers2 = [10, 100, 1, 32, 111, 222, 2, 33];
numbers2.sort();
console.log(numbers2);

// * Mit einer Callback Funktion bekommen wir das hin
numbers2.sort(function (a, b) {
  return a - b;
});

// Kurzschriebform
// bei einzeiligen befeheln benötige ich kein return mehr, macht er automatisch
numbers2.sort((a, b) => a - b);
console.log(numbers2);

// So von groß auf klein
numbers2.sort((a, b) => b - a);
console.log(numbers2);

// ! reverse()
const reversNum = [1, 2, 3, 4, 5];

reversNum.reverse();
console.log(reversNum);

// ! filter()

let filmTitel = [
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
  "superking",
];

console.table(filmTitel);

// So filtern wir nun alle title die länge als 20 Zeichen sind und speicher sin in einer Varibale mit dem namen "longMovies"
const longMovies = filmTitel.filter((singleMoveTitleMarzio) => {
  return singleMoveTitleMarzio.length > 25;
});

console.table(longMovies);

// So filtern wir nach einem Suchwort
let suchwort = "KING";

const nameFilter = filmTitel.filter((einzelneFilme) => {
  return einzelneFilme.includes(suchwort);
});

console.table(nameFilter);

// So Filtern wir nach einen Suchwort egal ob Groß oder Kleinschriebung
const nameFilterGroßKlein = filmTitel.filter((einzelneFilme) => {
  return einzelneFilme.toLowerCase().includes(suchwort.toLowerCase());
});

// - daher kommen die klammern
// filter() => gelb
// paremeter() => lila
// funktionskalmmern {} => lila
// toLowerCase() => blau
// includes() => blau
// toLowerCase() => gelb

console.table(nameFilterGroßKlein);

// # ==== LOOPS ====

const names = ["Lisa", "Tobi", "Izel", "Mia", "Even", "Stefan", "Adrain"];

// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

// ! forEach
// ich benötige immer mindesten ein parameter
names.forEach((döner) => {
  console.log(döner);
});

// Mit einer Schleife ins html schreiben
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
  "https://picsum.photos/210",
];

const bilderBox = document.querySelector(".img-box");

images.forEach((singleImg, index) => {
  // zeigt mir den index von das element ( immer an zweiter stelle bei den Parameter )
  console.log(index);
  //   Zeigt mir den inhalt von array (immer an erste stelle bei den Parameter)
  console.log(singleImg);

  bilderBox.innerHTML += `<img src="${singleImg}" alt="">`;
});

// So würden wir das Manuell machen
// bilderBox.innerHTML += `<img src="${images[0]}" alt="">`;
// bilderBox.innerHTML += `<img src="${images[1]}" alt="">`;
// bilderBox.innerHTML += `<img src="${images[2]}" alt="">`;
// bilderBox.innerHTML += `<img src="${images[3]}" alt="">`;
// ...

// ! map()
// .map() geht durch jede element des array und gibt ein neues Array zurück
// map verändert das ursprungsarray NICHT!

const number3 = [10, 4, 2, 22];
console.log(number3);

// - Falsch
// Geht nicht weil sich das ursprungs Array nicht veränder.
// number3.map((Pfannkuchen) => {
//   return Pfannkuchen * 2;
// });

console.log(number3);

// - Richtig
let dubbleNum = number3.map((izelsNummer) => {
  return izelsNummer * 2;
});

console.log(dubbleNum);

// ! forEach() vs. map()

// - forEach() -> Gibt uns kein neues Array zurück
// - map() -> Gibt uns ein neus Array zurück. Wenn ich mit den Werten später weiter arbeiten muss ist das the way to go :-)

let studenNames = ["Nina", "Susi", "Max"];

// * forEach()
// langschriebform
console.log(
  studenNames.forEach((names) => {
    return names.toUpperCase();
  })
);

// kurzschreibform
console.log(studenNames.forEach((names) => names.toUpperCase())); //undefinde -> weil forEach gibt uns kein Array zurück :-(

// *  map()
console.log(studenNames.map((names) => names.toUpperCase())); // geht -> weil map gibt uns ein neues array zurück :-)

// - Werte in eine neue Variabel Speicherm
// map()
const mapLowName = studenNames.map((names) => names.toLowerCase());
console.log(mapLowName); // ['nina', 'susi', 'max'] -> geht weil map uns ein neues Arraay zurück gibt

// foreach()
const forEachLowName = studenNames.forEach((names) => names.toLowerCase());
console.log(forEachLowName); // undefinde -> weil forEach uns ein KEIN(!!!) neues Array zurück gibt

// das ursprungsArray bleib unverändert
console.log(studenNames);
