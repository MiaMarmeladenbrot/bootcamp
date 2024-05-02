// - Lernziel: String-Methode [slice()](https://www.w3schools.com/jsref/jsref%5Fslice%5Fstring.asp) verstehen und anwenden.

// - Probiere es mit const A = 'Susi is going to codingschool' aus und wende slice() an, um in deinem HTML Folgendes angezeigt zu bekommen:
//     - Susi
//     - is
//     - is going to school
//     - school
//     - Susi is school
// - Speichere jedes Ergebnis in einer Variablen und verwende innerHTML, um das Ergebnis im Dokument auszugeben.

// Variablen für output im HTML festlegen:
const p1 = document.body.querySelector("p:nth-of-type(1)");
const p2 = document.body.querySelector("p:nth-of-type(2)");
const p3 = document.body.querySelector("p:nth-of-type(3)");
const p4 = document.body.querySelector("p:nth-of-type(4)");
const p5 = document.body.querySelector("p:nth-of-type(5)");
const p6 = document.body.querySelector("p:nth-of-type(6)");

// Variable für gesamten string festlegen:
const A = "Susi is going to codingschool";

// Variablen für slices festlegen:
// - Susi
const susi = A.slice(0, 5);

// - is
const is = A.slice(5, 7);

// - is going to school
const isGoing = A.slice(5, A.indexOf("c")) + A.slice(A.indexOf("sch"), 29);
// --> slice(-1) und lastIndexOf("l") funktionieren nicht, weil das l dann nicht mehr angezeigt wird, nur mit der konkreten Zahl 29 wird mir das l angezeigt:
// const isGoing = A.slice(5, A.indexOf("c")) + A.slice(A.indexOf("sch"), -1);
// const isGoing =
//   A.slice(5, A.indexOf("c")) + A.slice(A.indexOf("sch"), A.lastIndexOf("l"));

// - school
const school = A.slice(A.indexOf("school"));

// - Susi is school
const susiIsSchool = A.slice(0, A.indexOf("g")) + A.slice(A.indexOf("sch"), 29);

const susiIsSchool1 = `${A.slice(0, A.indexOf("g"))} ${A.slice(
  A.indexOf("sch"),
  29
)}`;

p1.innerHTML = susi;
p2.innerHTML = is;
p3.innerHTML = isGoing;
p4.innerHTML = school;
p5.innerHTML = susiIsSchool;
p6.innerHTML = susiIsSchool1;
