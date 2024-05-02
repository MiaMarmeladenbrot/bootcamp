// # String Trennungsmaschine

// * todo
// 1. onsumit Funktion schrieben ✔️
// 2. Values Auslesen ✔️
// 3. Output Selektieren ✔️
// 4. Checken ob das Trennwort im Satz vorkommt ✔️
// 5. Index des Trennwortes suchen ✔️
// 6. checken wielange das suchwort ist
// 7. ins html schreiben

// Outout
const davorOutput = document.querySelector(".davor");
const danachOutput = document.querySelector(".danach");

const trennen = (event) => {
  event.preventDefault();

  // Values Auslesen
  const inputZeichen = document.querySelector(".zeichenkette").value;
  const trennZeichen = document.querySelector(".trennung").value;
  const vorneOdHinten = document.querySelector(
    "input[name='davor-dannach']:checked"
  ).value;

  // logs
  console.log({ inputZeichen }, { trennZeichen }, { vorneOdHinten });

  // * Hier kommen wir rein wenn er das trennword findet
  if (inputZeichen.includes(trennZeichen)) {
    // ermittelt den index des Suchwortes / Zeichen
    const indexTrennung = inputZeichen.indexOf(trennZeichen);
    console.log({ indexTrennung });

    // schaut wie lange das trennwort ist
    const trennlenght = trennZeichen.length;
    console.log({ trennlenght });

    // gibt mir den index des suchwortes aus und berechnet die lände der zeichen
    const afterTrennWortIndex = indexTrennung + trennlenght;
    console.log({ afterTrennWortIndex });

    // * Hier kommen wir rein wenn wir davor ausgewählt haben
    if (vorneOdHinten === "davor") {
      // gibt den vorderen teil zurück
      const vordererTeil = inputZeichen.slice(0, indexTrennung);
      // gibt den hinteren zeil zurück
      const hintererTeil = inputZeichen.slice(indexTrennung);

      console.log({ vordererTeil }, { hintererTeil });

      // schreibt es ins html
      davorOutput.innerHTML = vordererTeil;
      danachOutput.innerHTML = hintererTeil;

      // * Hier kommen wir rein wenn wir dannach ausgewählt haben
    } else {
      // gibt den vorderne teil zurück
      const vordererTeil = inputZeichen.slice(0, afterTrennWortIndex);
      // gibt den hinteren teil zurück
      const hintererTeil = inputZeichen.slice(afterTrennWortIndex);

      console.log({ vordererTeil }, { hintererTeil });

      // schreibt es ins html
      davorOutput.innerHTML = vordererTeil;
      danachOutput.innerHTML = hintererTeil;
    }

    // * Hier kommen wir rein wenn das trennwort nicht vorkommt
  } else {
    console.log("Trennwort nicht gefunden");
  }
};

// # Neue Themen

// # == Number Methoden ==
console.log("%c === Number Methoden ===", "background: red; color: white");

// * toFixed()
// Die toFixed methode rundet auf oder ab. Gleichzeitig wandelt sie einen Zahl in einen string um
const num1 = 14.2394893989;
console.log(typeof num1.toFixed());
console.log(num1.toFixed());

// Als Argument können wir eine nummer mitgeben wo sie in demsen fall zwei stellen nach den . rundet
console.log(num1.toFixed(2));

// So können wir to fixed benutzen und es direkt in eine Number umwandeln
console.log(Number(num1.toFixed(2)));

// Klammern müssen wir manuell setzen. So kommen die kalmmern in Zeile 91 zustande
// console.log();
// Number()
// toFixed()

// * Number()
// Wandelt String in eine Number

const num2 = "33.343345";
console.log(Number(num2));
console.log(typeof Number(num2));

const num3 = "Max32432";
console.log(Number(num3)); //Nan = Not a number

// - Wie bekomme ich einen Number typen aus den Inputfeld:
const getInput = () => {
  const value = Number(document.querySelector("#zahl").value);
  console.log(value);
};

// # == Math Object Methoden ==
console.log("%c === Math Methoden ===", "background: red; color: white");

// so sehen wir alle Methoden von Math
console.log(typeof Math);
console.log(Math);

// * Math.round()
// die Math.round Methode rundet wir toFixed auf oder ab
const num4 = 14.432323334;
console.log(Math.round(num4));

// Math.round vs toFixed()
// Math.round rundet immer zum ganzen ab oder auf
// toFixed kann ich die zahlen nach dem . angeben

// * Math.ceil
// Rundet immer auf
const num5 = 14.00000001;
console.log(Math.ceil(num5));

// * Math.floor
// Rundet immer ab
const num6 = 16.99999999999;
console.log(Math.floor(num6));

// * Math.random
// Gib uns eine Random zahl raus

console.log(Math.random() * 3);

// So bekommen wir eine Zahl von 0 - 3 raus
console.log(Math.round(Math.random() * 3));

// So bekommen wir eine Zahl von 1 - 3 raus
console.log(Math.ceil(Math.random() * 3));

// So bekommen wir eine zwischen 11 - 20
console.log(Math.ceil(Math.random() * 10 + 10));

const loveSkala = Math.ceil(Math.random() * 3);
// loveSkala === 0 => Big love
// loveSkala === 1 => mittel love
// loveSkala === 3 => Heiraten
