// # String Trennungsmaschine

// * todo
// 1. onsumit Funktion schrieben ✔️
// 2. Values Auslesen ✔️
// 3. Output Selektieren ✔️
// 4. Checken ob das Trennwort im Satz vorkommt ✔️
// 5. Index des Trennwortes suchen ✔️
// 6. checken wielange das suchwort ist
// 7. ins html schreiben

// Output
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
