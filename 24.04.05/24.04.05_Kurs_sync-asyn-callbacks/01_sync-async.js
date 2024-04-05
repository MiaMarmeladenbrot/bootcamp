// ! Synchrone Code
// wird von oben nach unten gelesen
const person = {
  name: "Beate",
  alter: 39,
  emails: ["beate@gmail.com", "b.huber@gmail.com"],
};

person.emails[0] = "beate.privat@gmail.com";

console.log(person.emails[0]); //--> beate.privat@gmail.com

// wenn ich das console.log verschiebe, bekomme ich andere Ergebnisse
console.log(person.emails[0]); //--> beate@gmail.com

person.emails[0] = "beate.privat@gmail.com";
