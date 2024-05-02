//* To Dos:
// 1. onsubmit function schreiben ✅
// 2. Values auslesen ✅
// 3. Output selektieren ✅
// 4. chekcen, ob das Trennwort im Satz vorkommt ✅
// 5. index des Trennwortes suchen ✅
// 6. checken, wie lang das Suchwort ist ✅
// 7. ins html schreiben ✅

//* Output deklarieren
// kann auch außerhalb der Funktion deklariert werden, falls ich später mit einer anderen Funktion noch mal auf diese Variablen zugreifen möchte:
const davorOutput = document.querySelector(".davor");
const danachOutput = document.querySelector(".danach");

//* Funktion startet
const trennen = (event) => {
  event.preventDefault();

  //* values auslesen
  // MÜSSEN lokal definiert werden, da vor Ausführen der Funktion noch keine Werte dahinter liegen; erst wenn der User in der Funktion auf Trennen geklickt hat, können wir Werte auslesen:
  const inputZeichen = document.querySelector(".zeichenkette").value;
  const trennZeichen = document.querySelector(".trennung").value;

  // bei zwei radio-Buttons kann man über .checked gehen, da es nur einen true und einen false-wert geben kann; falls es aber mehrere radio-Buttons gibt, geht das nicht mehr; da brauchen wir dann zwingend den value des ausgewählten radio-Buttons und das geht so:
  const vorneOdHinten = document.querySelector(
    "input[name='davor-danach']:checked"
  ).value;

  // logs
  console.log({ inputZeichen }, { trennZeichen }, { vorneOdHinten });

  //* Hier kommen wir erst rein, wenn er das Trennwort in der Zeichenkette findet:
  if (inputZeichen.includes(trennZeichen)) {
    // ermittelt den index des Suchwortes:
    const indexTrennung = inputZeichen.indexOf(trennZeichen);

    // schaut, wie lang das Trennwort ist
    const trennlength = trennZeichen.length;

    // gibt mir den Index des Suchwortes aus und berechnet die Länge der Zeichen:
    const afterTrennWortIndex = indexTrennung + trennlength;

    // * Hier kommen wir rein, wenn der User "davor" ausgewählt hat:
    if (vorneOdHinten === "davor") {
      // Zeichenkette soll von 0 bis zum eingegebenen Trennungsort ausgegeben werden:
      const vordererTeil = inputZeichen.slice(0, indexTrennung);
      // restliche Zeichenkette:
      const hintererTeil = inputZeichen.slice(indexTrennung);

      // schreibt es ins HTML:
      davorOutput.innerHTML = vordererTeil;
      danachOutput.innerHTML = hintererTeil;

      // * Hier kommen wir rein, wenn der User "danach" ausgewählt hat:
    } else {
      // Zeichenkette soll von 0 bis hinter dem Suchwort ausgegeben werden:
      const vordererTeil = inputZeichen.slice(0, afterTrennWortIndex);
      // restliche Zeichenkette:
      const hintererTeil = inputZeichen.slice(afterTrennWortIndex);

      // schreibt es ins HTML
      davorOutput.innerHTML = vordererTeil;
      danachOutput.innerHTML = hintererTeil;
    }

    // * Hier kommen wir rein, wenn das Trennwort nicht in der Zeichenkette vorkommt:
  } else {
    console.log("Trennwort nicht gefunden");
  }
};
