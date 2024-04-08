function doubleNumber(num) {
  return new Promise((resolve, reject) => {
    // wenn Argument keine Ziffer ist, soll ein Fehler ausgegeben werden
    if (typeof num !== "number") reject("Para must be a number");

    // wenn Argument eine Ziffer ist, soll sie nach 2 Sekunden mit 2 multipliziert werden
    setTimeout(() => {
      const doubleNum = num * 2;
      resolve(doubleNum);
    }, 2000);
  });
}

// Funktionsaufruf mit Argument Number
doubleNumber(2)
  .then((number) => console.log(number)) //--> 4
  .catch((err) => console.log(err));

// Funktionsaufruf mit Argument String
doubleNumber("wort")
  .then((wort) => console.log(wort))
  .catch((err) => console.log(err)); //--> Para must be a number
