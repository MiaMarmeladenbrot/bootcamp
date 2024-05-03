function greet(name) {
  return new Promise((resolve, reject) => {
    if (!name) return reject("name must be defined");

    setTimeout(() => {
      resolve("Hallo " + name + "!");
    }, 1000);
  });
}

// async = returned ausnahmslos ein Promise
// await = Gegenstück zu async, wartet die Auflösung des Promises ab
// so können wir die asynchrone Aktivität des Promises in eine synchrone umwandeln und die Inhalte der .thens auch außerhalb der Promise benutzen
async function greetLowerCaseAndWelcome(name) {
  const greeting = await greet(name);
  const greetingLowerCase = greeting.toLowerCase();
  return { greeting, greetWelcome: greetingLowerCase + " Willkommen!" };
}

// auf äußerster Eben müssen wir trotzdem mit .then und .catch arbeiten:
greetLowerCaseAndWelcome("Beate")
  .then((greeting) => console.log(greeting))
  .catch((err) => console.log(err));

// oder wir lagern das noch mal aus in eine eigene Funktion, in der wir Erfolg und Misserfolg via try/catch auflösen und die Funktion dann gesondert aufrufen:
async function run() {
  try {
    const result = await greetLowerCaseAndWelcome();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

run();
