// - Heute sollst du einen Kalorienrechner programmieren.
// - Zuerst musst du den Grundumsatz berechnen. Der Grundumsatz wird mithilfe der Harris-Benedict-Formel berechnet.
// - Grundumsatz bei Männern (Kalorien je Tag):
//     - 66.47 + (13.7 * Körpergewicht in kg) + (5 * Körpergröße in cm) – (6.8 * Alter in Jahren) = Grundumsatz
// - Grundumsatz bei Frauen (Kalorien je Tag):
//     - 655.1 + (9.6 * Körpergewicht in kg) + (1.8 * Körpergröße in cm) – (4.7 * Alter in Jahren) = Grundumsatz
// - Achtung: Das Ergebnis wird in Kilokalorien ausgegeben!
// - Um den Gesamtumsatz auszurechnen, sollte der PAL-Faktor (PAL=Physical Activity Level) mit dem Grundumsatz multipliziert werden.

//* ToDos
// 1. Funktion verknüpfen ✅
// 2. Values auslesen ✅
// 3. outputs festlegen ✅
// 4. grundumsatz weiblich berechnen
// 5. grundumsatz männlich berechnen

const error = document.querySelector(".error");
const grundumsatzKcal = document.querySelector(".grundumsatz-kcal");
const grundumsatzKj = document.querySelector(".grundumsatz-kj");
const gesamtumsatzKcal = document.querySelector(".gesamtumsatz-kcal");
const gesamtumsatzKj = document.querySelector(".gesamtumsatz-kj");

const calculate = (event) => {
  event.preventDefault();
  //   console.log("läuft");

  //   values auslesen:
  const inputHeight = Number(document.querySelector("#height").value);
  const inputAge = Number(document.querySelector("#age").value);
  const inputWeight = Number(document.querySelector("#weight").value);
  const inputGender = document.querySelector(
    "input[name='gender']:checked"
  ).value;
  const inputPhysicalActivity = Number(
    document.querySelector("#physical").value
  );

  //   console.log(
  //     inputHeight,
  //     inputAge,
  //     inputWeight,
  //     inputGender,
  //     inputPhysicalActivity
  //   );

  //* Checken, ob alle Felder ausgefüllt sind:
  if (
    inputHeight > 0 &&
    inputAge > 0 &&
    inputWeight > 0
    // &&
    // inputGender > 0 &&
    // inputPhysicalActivity > 0
  ) {
    //* Berechnung:
    //* Grundumsatz, wenn weiblich ausgewählt wurde:
    if (inputGender === "female") {
      const grundumsatzFemale = (
        655.1 +
        9.6 * inputWeight +
        1.8 * inputHeight -
        4.7 * inputAge
      ).toFixed(2);

      // Grundumsatz in kcal:
      grundumsatzKcal.innerHTML = grundumsatzFemale;

      // Grundumsatz in kj:
      grundumsatzKj.innerHTML = (grundumsatzFemale * 4.1868).toFixed(2);

      // Gesamtumsatz in kcal
      gesamtumsatzKcal.innerHTML = (
        grundumsatzFemale * inputPhysicalActivity
      ).toFixed(2);

      // Gesamtumsatz in kJ
      gesamtumsatzKj.innerHTML = (
        grundumsatzFemale *
        4.1868 *
        inputPhysicalActivity
      ).toFixed(2);

      //* Grundumsatz, wenn männlich ausgewählt wurde:
    } else if (inputGender === "male") {
      grundumsatzMale = (
        66.47 +
        13.7 * inputWeight +
        5 * inputHeight -
        6.8 * inputAge
      ).toFixed(2);

      // Grundumsatz in kcal:
      grundumsatzKcal.innerHTML = grundumsatzMale;

      // Grundumsatz in kj:
      grundumsatzKj.innerHTML = (grundumsatzMale * 4.1868).toFixed(2);

      // Gesamtumsatz in kcal
      gesamtumsatzKcal.innerHTML = (
        grundumsatzMale * inputPhysicalActivity
      ).toFixed(2);

      // Gesamtumsatz in kJ
      gesamtumsatzKj.innerHTML = (
        grundumsatzMale *
        4.1868 *
        inputPhysicalActivity
      ).toFixed(2);
    }
  } else {
    error.innerHTML = "Bitte befülle alle Felder";
  }
};
