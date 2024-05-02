// - Lernziel: Verstehen und Anwenden der JavaScript-Methode getHours() zur Ermittlung der Stunden aus einem Datum.
// - Schreibe eine Function, um AM und PM zu erhalten.
// - Die Function enthält:
// - Ein Parameter
// - Ternary-Operator oder if/else
// - [getHours()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours?retiredLocale=de)
// - Teste deine Function in der Konsole mit folgenden Argumenten:
// - date1 = new Date(1999, 10, 5, 15) //PM
// - date2 = new Date()
// - date3 = new Date(2019, 12, 3, 12) //PM
// - date4 = new Date(2000, 1, 1, 11) //AM

// testen:
let date0 = new Date();
console.log(date0);
console.log(date0.getHours());

// 12am = midnight; 12pm = noon
// wenn <12 hours, dann AM; >= 12 hours bzw. alles andere, dann PM
const amPM = (date) => {
  let newDate = new Date(date);
  newDate.getHours() < 12 ? console.log("AM") : console.log("PM");
};

// amPM(1);
let date1 = new Date(1999, 10, 5, 15); //PM
amPM(date1);

let date2 = new Date();
amPM(date2);

let date3 = new Date(2019, 12, 3, 12); //PM
amPM(date3);

let date4 = new Date(2000, 1, 1, 11); //AM
amPM(date4);

let date5 = new Date(2020, 5, 20, 5, 30); //AM
amPM(date5);
