// - In diesem Projekt erstellst du eine Mehrwertsteuer-Rechner-App.
// - In Deutschland gibt es zwei Mehrwertsteuersätze: 19 % und 7 %.
// - Mit dieser App kannst du Netto zu Brutto oder Brutto zu Netto berechnen.
// - Achte darauf, wenn du auf einen der Radio-Buttons klickst (Netto zu Brutto || Brutto zu Netto), dass sich der Text in den Feldern anpasst. Schaue dir beide Vorschaubilder genau an, um die Änderungen zu erkennen.

//*ToDo
// 1. Formular erstellen ✅
// 2. Funktion mit Formular verknüpfen ✅
// 3. Formular stylen ✅
// 4. values auslesen ✅
// 4.1. wenn substract ausgewählt ist, Bruttobetrags-Input anzeigen --> neue Funktion mit radio-Button verknüpfen? ✅
// 5. outputs festlegen (außerhalb der Funktion)✅
// 6. if/else für die vier Fälle NzB+19, NzB+7, BzN+19, BzN+7✅

// ! Funktion, um bei Auswahl des ersten Radio-Buttons "Was soll berechnet werden?" das Eingabe-Textfeld zu ändern (verknüpft via onchange mit beiden radio-Buttons):
const changeToSubstract = () => {
  const addOrSubstract = document.querySelector(
    "input[name='was']:checked"
  ).value;

  const betragInput = document.querySelector(".betrag-eingabe");
  // console.log(betragInput);

  const bruttoNettoOutput = document.querySelector(".brutto-netto-output");
  // console.log(bruttoNettoOutput);

  // wenn MWS abziehen ausgewählt, soll Eingabefeld zu Brutto und Ausgabefeld zu Netto geändert werden:
  if (addOrSubstract === "substract") {
    betragInput.innerHTML = `<label for="betrag7">Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro<input type="number" id="betrag7" value="1" min="1" name="betrag"/></label>`;

    bruttoNettoOutput.innerHTML = `<h2 class="brutto-netto-output">Nettobetrag</h2>`;

    // wenn MWS aufschlagen ausgewählt, soll Eingabefeld zu Netto und Ausgabefeld zu Brutto geändert werden:
  } else if (addOrSubstract === "add") {
    betragInput.innerHTML = `<label for="betrag19">Nettobetrag (Preis ohne Mehrwertsteuer) in Euro<input type="number" id="betrag19" value="1" min="1" name="betrag"/></label>`;

    bruttoNettoOutput.innerHTML = `<h2 class="brutto-netto-output">Bruttobetrag (Endpreis)</h2>`;
  } else {
    betragInput.innerHTML = `<p> Fehler </p>`;
  }
};

// ! Output-Werte außerhalb der folgenden Funktion, falls man später noch mal damit arbeiten will:
const outputMws = document.querySelector(".mws");
const outputBruttobetrag = document.querySelector(".bruttobetrag");
// console.log(outputMws);
// console.log(outputBruttobetrag);

// ! Funktion, um bei Klick auf Berechnen die Ergebnisse in den Output-Feldern darunter auszugeben:
const mwsRechner = (event) => {
  event.preventDefault();

  //* values auslesen:
  // value auslesen für radio-Buttons, was berechnet werden soll:
  const addOrSubstract = document.querySelector(
    "input[name='was']:checked"
  ).value;

  // value auslesen für radio-Buttons, mit welchem Satz gerechnet werden soll:
  const nineteenOrSeven = document.querySelector(
    "input[name='satz']:checked"
  ).value;

  // value auslesen für Eingabe des Betrags:
  const numberInput = document.querySelector("input[name='betrag']").value;

  // logs
  // console.log({ addOrSubstract });
  // console.log({ nineteenOrSeven });
  // console.log({ numberInput });

  //* Berechnung mit if/else-Bedingungen:
  // wenn NzB & 19% => Betrag * 0.19 & Betrag * 1,19:
  if (addOrSubstract === "add" && nineteenOrSeven === "prozent19") {
    outputMws.innerHTML = Math.round(numberInput * 0.19);
    outputBruttobetrag.innerHTML = Math.round(numberInput * 1.19);

    // wenn NzB & 7% => Betrag * 0.07 & Betrag * 1,07:
  } else if (addOrSubstract === "add" && nineteenOrSeven === "prozent7") {
    outputMws.innerHTML = Math.round(numberInput * 0.07);
    outputBruttobetrag.innerHTML = Math.round(numberInput * 1.07);

    // wenn BzN & 19% => Betrag / (1,19 * 0,19) & Betrag / 1,19:
  } else if (
    addOrSubstract === "substract" &&
    nineteenOrSeven === "prozent19"
  ) {
    outputMws.innerHTML = Math.round((numberInput / 1.19) * 0.19);
    outputBruttobetrag.innerHTML = Math.round(numberInput / 1.19);

    // wenn BzN & 7% => Betrag / (1,07 * 0,07) & Betrag / 1,07:
  } else if (addOrSubstract === "substract" && nineteenOrSeven === "prozent7") {
    outputMws.innerHTML = Math.round((numberInput / 1.07) * 0.07);
    outputBruttobetrag.innerHTML = Math.round(numberInput / 1.07);
  } else {
    console.log("error");
  }
};
