function randomNum(timeout) {
  return new Promise((resolve, reject) => {
    // falls keine Zahl, Fehlermeldung
    if (typeof timeout !== "number") reject("Bitte gib eine Zahl ein");

    // falls Zahl, timeOut mit Parameter, der eine zufällige Zahl ausgibt
    setTimeout(() => {
      const randomNumber = Math.ceil(Math.random() * 1000);
      resolve(randomNumber);
    }, timeout);
  });
}

// Einzelaufruf
// randomNum(2000)
//   .then((num) => console.log(num))
//   .catch((err) => console.log(err));

// Mehrfachaufruf mit einem Ergebnis
Promise.all([randomNum(1000), randomNum(2000)])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
