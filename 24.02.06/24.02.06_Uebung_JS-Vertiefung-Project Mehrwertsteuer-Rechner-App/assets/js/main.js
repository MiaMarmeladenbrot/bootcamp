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
// 5. outputs festlegen (außerhalb der Funktion)
// 6. if/else?

// ! Funktion, um bei Auswahl des ersten Radio-Buttons das Eingabe-Textfeld zu ändern (verknüpft via onchange mit beiden radio-Buttons):
const changeToSubstract = () => {
  const betragInput = document.querySelector(".betrag-eingabe");
  // console.log(betragInput);

  const substractInput = document.querySelector("#substract").checked;
  // console.log(substractInput);

  const addInput = document.querySelector("#add").checked;
  // console.log(addInput);

  if (substractInput === true) {
    betragInput.innerHTML = `<label for="betrag7">Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro<input type="number" id="betrag7" value="1" min="1" name="betrag"/></label>`;
  } else if (addInput === true) {
    betragInput.innerHTML = `<label for="betrag19">Nettobetrag (Preis ohne Mehrwertsteuer) in Euro<input type="number" id="betrag19" value="1" min="1" name="betrag"/></label>`;
  } else {
    betragInput.innerHTML = `<p> Fehler </p>`;
  }
};

// ! Output-Werte außerhalb der folgenden Funktion, falls man später noch mal damit arbeiten will:
const outputMws = document.querySelector(".mws");
const outputBruttobetrag = document.querySelector(".bruttobetrag");

// ! Funktion, um bei Klick auf Berechnen die Ergebnisse in den Output-Feldern darunter auszugeben:
const mwsRechner = (event) => {
  event.preventDefault();
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
  console.log({ addOrSubstract });
  console.log({ nineteenOrSeven });
  console.log({ numberInput });
};
