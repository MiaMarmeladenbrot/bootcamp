// ! Neue Schreibweise
// packet json datei bauen
// dort type: module vergeben (Gegenteil ist "common", das bezieht sich auf require-Methode)
// dann können wir import/export verwenden wie in react

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

export { person1, person2 };
