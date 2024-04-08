function randomNum() {
  return new Promise((resolve, reject) => {
    // Random Number generieren
    const randomNumber = Math.ceil(Math.random() * 10);

    // falls kleiner als 6 => reject
    if (randomNumber < 6) reject("weniger als 6: " + randomNumber);

    // falls größer als 6 => resolve
    resolve("6 oder größer: " + randomNumber);
  });
}

randomNum()
  .then((number) => console.log(number))
  .catch((err) => console.log(err));
