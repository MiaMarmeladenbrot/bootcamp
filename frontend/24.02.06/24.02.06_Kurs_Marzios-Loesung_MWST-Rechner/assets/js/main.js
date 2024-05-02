// - Funk1 (text ändern)
// 1. onchange funktion immer wenn der radio geändert wird
// 2. Values auslesen von Radio (netto zu brutton) / (brutton zu netto)
// 3. text was geändert werden soll selektieren
// 4. Abfragen welches value gesetzt ist und dann den text ändern

// - Funk2 (berechnung machen)
// 1. onSumit schrieben
// 2. Drei Values auslesen (input, radios Netto - Brutto, 7% oder 19%)
// 3. Output Selektieren
// 4. MWST Berechnung

const nettoBruttoText = document.querySelector(".netto-vs-brutto-text");
const nettoBruttoTextBottom = document.querySelector(".brutto-netto-betrag");
const outputMwst = document.querySelector(".mwst-betrag");
const totaloutput = document.querySelector(".endpreis");

// ! Funktion zum berechnen der MWST
const berechnen = (event) => {
  event.preventDefault();

  //   Holt Value von Brutto / Netto
  const bruttoNetto = document.querySelector(
    'input[name="brutto-netto"]:checked'
  ).value;

  //   Holt Value von 7%(1.07) / 19%(1.19)
  const siebenOderNeuzehnPro = Number(
    document.querySelector('input[name="prozent"]:checked').value
  );

  //   Holt Value von inputfeld (betrag)
  const inputVal = Number(document.querySelector(".val").value);

  //   Logs von Values
  console.log({ bruttoNetto }, { siebenOderNeuzehnPro }, { inputVal });

  //  Netto: Berechnung von 7% oder 19% Mwst
  const mwst = Number((inputVal * siebenOderNeuzehnPro - inputVal).toFixed(2));
  console.log({ mwst });

  //  Brutto: Berechnung von MWST und Restbetrag bei je 7% oder 19%
  const newMwst = Number((inputVal / siebenOderNeuzehnPro).toFixed(2));
  console.log({ newMwst });

  const mwstBruttozuNetto = Number((inputVal - newMwst).toFixed(2));
  console.log({ mwstBruttozuNetto });

  // checken was ausgewählt ist
  if (bruttoNetto === "netto-brutto-aufschlagen") {
    // 1 Netto zu Brutto
    outputMwst.innerHTML = `${mwst} €`;
    totaloutput.innerHTML = `${inputVal + mwst} €`;
  } else {
    // 2 Brutto zu Netto
    outputMwst.innerHTML = `${mwstBruttozuNetto} €`;
    totaloutput.innerHTML = `${newMwst} €`;
  }
};

// ! Funktion zum ändern des Textes
const changeText = () => {
  //   Holt sich das Value was gerade gesetzt ist in den Radio btn
  const bruttoNetto = document.querySelector(
    'input[name="brutto-netto"]:checked'
  ).value;

  console.log(bruttoNetto);

  //   Schreibt es ins html
  nettoBruttoText.innerHTML =
    bruttoNetto === "netto-brutto-aufschlagen"
      ? "Nettobetrag (Preis ohne Mwst.) in Euro*"
      : "Bruttobetrag (Preis inklusive Mwst.) in Euro*";

  //   Schreibt es ins html
  nettoBruttoTextBottom.innerHTML =
    bruttoNetto === "netto-brutto-aufschlagen"
      ? "Bruttobetrag (Endpreis)"
      : "Nettobetrag";
};
