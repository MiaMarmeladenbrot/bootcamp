// - Verwende den Befehl [toUpperCase()](https://www.w3schools.com/jsref/jsref%5Ftouppercase.asp id=), um aus der Variable const text = "Sam is going to codingschool" die veränderte Zeichenkette zu erhalten: SAM IS GOING TO SCHOOL.
// - Neben toUpperCase() gibt es auch noch den Befehl [toLowerCase()](https://www.w3schools.com/jsref/jsref%5FtoLowerCase.asp id=). Schaue, was passiert, wenn du dies auf die Variable text anwendest.
// - Erzeuge mit den beiden Befehlen folgende Zeichenketten und gib sie in deinem HTML aus:
// - SAM is going to SCHOOL
// - sam IS GOING TO school
// - Sam Is Going To School

const text = "Sam is going to codingschool";
const div1 = document.body.querySelector("div:nth-of-type(1)");
const div2 = document.body.querySelector("div:nth-of-type(2)");
const div3 = document.body.querySelector("div:nth-of-type(3)");
const div4 = document.body.querySelector("div:nth-of-type(4)");
const div5 = document.body.querySelector("div:nth-of-type(5)");

// - SAM IS GOING TO CODINGSCHOOL
div1.innerHTML = text.toUpperCase();

// - sam is going to codingschool
div2.innerHTML = text.toLowerCase();

// - SAM is going to CODINGSCHOOL
const text1 = text.slice(0, 4).toUpperCase();
const text2 = text.slice(4, 15);
const text3 = text.slice(15).toUpperCase();
div3.innerHTML = text1 + text2 + text3;

// - sam IS GOING TO codingschool
const text4 = text.slice(0, 4);
const text5 = text.slice(4, 15).toUpperCase();
const text6 = text.slice(15);
div4.innerHTML = text4 + text5 + text6;

// - Sam Is Going To Codingschool
div5.innerHTML =
  text[0].toUpperCase() +
  text.slice(1, 4) +
  text[4].toUpperCase() +
  text.slice(5, 7) +
  text[7].toUpperCase() +
  text.slice(8, 13) +
  text[13].toUpperCase() +
  text.slice(14, 16) +
  text[16].toUpperCase() +
  text.slice(17);
