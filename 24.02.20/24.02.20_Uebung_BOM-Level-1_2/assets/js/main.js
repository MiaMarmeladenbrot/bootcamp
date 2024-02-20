// - Lernziel: JavaScript-Eventhandling und Timer-Function.
// - Schreibe eine Function, die beim Klicken des Buttons von 100% bis 0% runterzählt.
// - Nutzen kannst du folgende Befehle und Methoden:  onclick, setInterval(), clearInterval(), if, else if und querySelector().

const btn = document.querySelector("button");
const output = document.querySelector(".output");

btn.addEventListener("click", () => {
  let zahl = 100;
  // console.log(zahl);

  const prozentCountDown = setInterval(() => {
    // Prozentzahl immer -1:
    zahl--;
    // console.log(zahl);

    // Prozentzahlen im HTML überschreiben:
    output.innerHTML = `${zahl} %`;

    // wenn 0 erreicht ist, stoppt Intervall, 0% bleibt im HTML stehen:
    if (zahl <= 0) {
      clearInterval(prozentCountDown);
    }
    // alle 100 Millisekunden:
  }, 100);
});
