// ! Alte Schreibweise / Standard
let personName = "Beate";
console.log(personName);

const person1 = {
  name: "Beate",
  alter: 36,
  emails: ["beate@gmail.com", "b.huber@company.com"],
  memberSince: Date.now(),
};

const person2 = {
  name: "Adrian",
  alter: 31,
  emails: ["adrian@gmail.com"],
  memberSince: Date.now(),
};

// Exportieren von Daten:
module.exports = person1;

// Bei mehreren zu exportierenden Daten werden beide Variablen in einem Objekt übergeben:
// * module.exports = { person1, person2 }
// oder wir vergeben keys, die wir dann im Import separat aufrufen können (eher unüblich):
// * module.exports = { beate: person1, adrian: person2 }
// die können auch einzeln exportiert werden:
//* exports.beate = person1;
//* exports.adrian = person2;
