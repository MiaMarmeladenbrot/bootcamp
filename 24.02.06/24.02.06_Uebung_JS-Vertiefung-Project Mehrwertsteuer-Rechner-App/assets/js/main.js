// - In diesem Projekt erstellst du eine Mehrwertsteuer-Rechner-App.
// - In Deutschland gibt es zwei Mehrwertsteuersätze: 19 % und 7 %.
// - Mit dieser App kannst du Netto zu Brutto oder Brutto zu Netto berechnen.
// - Achte darauf, wenn du auf einen der Radio-Buttons klickst (Netto zu Brutto || Brutto zu Netto), dass sich der Text in den Feldern anpasst. Schaue dir beide Vorschaubilder genau an, um die Änderungen zu erkennen.

//*ToDos
// 1. Formular erstellen ✅
// 2. Formular stylen ✅
// 3. Funktion1 mit radio-Buttons verknüpfen ✅
//    3.1 values auslesen ✅
//    3.2 outputs festlegen ✅
//    3.3 if/else für entweder add oder substract === true ✅
// 4. Funktion2 mit Formular verknüpfen ✅
//    4.1 values auslesen ✅
//    4.2 outputs festlegen (außerhalb der Funktion)✅
//    4.3 if/else für die vier Fälle NzB+19, NzB+7, BzN+19, BzN+7✅

// ! Funktion, um bei Auswahl des ersten Radio-Buttons "Was soll berechnet werden?" das Eingabe-Textfeld in Brutto bzw. Netto zu ändern (verknüpft via onchange mit beiden radio-Buttons):
const changeToSubstract = () => {
  // value für ausgewählten radio-Button:
  const addOrSubstract = document.querySelector(
    "input[name='was']:checked"
  ).value;

  // Variable für div-Container, in den Brutto- bzw. Nettobetrag eingegeben werden soll:
  const betragInput = document.querySelector(".betrag-eingabe");
  // console.log(betragInput);

  // Variable für h2 gannz unten, in der Netto- bzw. Bruttobetrag stehen soll:
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
// output-span-Element, in dem der errechnete MWS-Betrag stehen soll:
const outputMws = document.querySelector(".mws");
// output-span-Element, in dem errechneter Brutto- bzw. Nettobetrag stehen soll:
const outputBruttobetrag = document.querySelector(".bruttobetrag");
// console.log(outputMws);
// console.log(outputBruttobetrag);

// ! Funktion, um bei Klick auf Berechnen die Ergebnisse in den Output-Feldern darunter auszugeben:
const mwsRechner = (event) => {
  event.preventDefault();

  //* values auslesen:
  // value auslesen für radio-Buttons, ob NzB oder BzN berechnet werden soll:
  const addOrSubstract = document.querySelector(
    "input[name='was']:checked"
  ).value;

  // value auslesen für radio-Buttons, mit welchem MWS-Satz gerechnet werden soll:
  const nineteenOrSeven = document.querySelector(
    "input[name='satz']:checked"
  ).value;

  // value auslesen für Eingabe des Betrags:
  const numberInput = Number(
    document.querySelector("input[name='betrag']").value
  );

  // logs:
  // console.log({ addOrSubstract });
  // console.log({ nineteenOrSeven });
  // console.log({ numberInput });

  // # einfacher wäre es, wenn man den Prozent-radio-Buttons direkt einen value von 1.07 und 1.19 mitgibt und die ausliest und damit weiterarbeitet, das vereinfacht und verkürzt den Code - siehe Marzios Lösung
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

    // wenn keins davon, Fehlermeldung:
  } else {
    console.log("error");
  }
};
