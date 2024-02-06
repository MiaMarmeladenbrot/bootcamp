// ! number methods
//* toFixed()
// rundet eine Zahl auf oder ab:
const num1 = 14.912293953573;
console.log(num1.toFixed()); //--> 15
// wandelt number in string um:
console.log(typeof num1.toFixed()); //--> string
// kann in den Klammern als Argument angeben, auf wie viele Stellen nach dem Komma gerundet werden soll:
console.log(num1.toFixed(2)); //--> 14.91

//* Number()
// wandelt string in number um:
const num2 = "33.248595";
console.log(Number(num2)); //--> 33.248595

// geht natürlich nur mit Zahlen
const num3 = "Max123";
console.log(Number(num3)); //--> NaN, not a number

// sinnvoll zB bei input-Feldern, die den value immer als string ausgeben, selbst wenn es eine Zahl ist:
const getInput = () => {
  const value = Number(document.querySelector("#zahl").value);

  console.log(value); //--> input aus dem Feld als number
};

//* toFixed() + Number()
// nutzt Marzio eigentich immer so in Kombi, weil man mit toFixed() eigentlich immer mit Zahlen arbeiten und die sollen auch immer numbers bleiben
console.log(Number(num1.toFixed(2)));

//! math object methods
console.log("%c math methods", "background: blue; color:white");

console.log(typeof Math); //--> object
console.log(Math);

//* Math.round()
// rundet auf/ab
// Nachteil: Kommastellen können nicht bestimmt werden wie bei toFixed()
// Vorteil: gibt Ergebnis als number aus
const num4 = 14.3948473;
console.log(Math.round(num4)); //--> 14

//* Math.ceil()
// rundet immer auf
const num5 = 14.00000001;
console.log(Math.ceil(num5)); //--> 15

//* Math.floor()
// rundet immer ab
const num6 = 16.999999;
console.log(Math.floor(num6)); //--> 16

//* Math.random()
// sinnvoll fürs Programmieren von Spielen
// gibt uns eine zufällige Zahl raus
console.log(Math.random()); //--> 0.xxxxx

// gibt uns eine zufällige Zahl zw. 0 & 3 raus:
console.log(Math.random() * 3); //--> 1.xxx - 2.xxx

// gibt uns eine zufällige, gerundete Zahl zw. 0 & 3 raus:
console.log(Math.round(Math.random() * 3)); //-> 0, 1, 2 oder 3

// gibt uns eine zufällige, aufgerundete Zahl zw. 1 & 3 raus:
console.log(Math.ceil(Math.random() * 3)); //--> 1,2 oder 3

// gibt uns eine zufällige, aufgerundete Zahl zw. 11 & 20:
// Bereich von 0-10 = *10
// Bereich von 10-20 = +10
// ceil rundet hoch auf 11-20
console.log(Math.ceil(Math.random() * 10 + 10));

// Beispiel: eine loveSkala, die immer einen ganzen Wert ausgeben soll zw. 1 und 3 und je nach Wert soll der User eine andere Rückmeldung erhalten:
const loveSkala = Math.ceil(Math.random() * 3);
// loveSkala === 1 => Big love
// loveSkala === 2 => mittel
// loveSkala === 3 => heiraten
