// - Schreibe eine Funktion, die beim Auslösen die Zahlen runter zählt. Schau dir dazu die Ergebnisvorschau an.
// - HTML und CSS ist vorgegeben (siehe Code-Snippet).
// - Nutzen kannst du: setInterval(), clearInterval(), getElementsByClassName() oder getElementById() und if/else if.

// * Variable festlegen:
const message = document.querySelector(".message");
const countOutput = document.querySelector("#count");

// * Funktion mit Intervall, das runterzählt:
const countDown = () => {
  // Variable für Zahl, erste Zahl = 10:
  let number = 10;

  // Intervall starten, von 10 runterzählen:
  const intervalCountDown = setInterval(() => {
    number--;

    // jeweilige Zahl ins HTML schreiben:
    countOutput.innerHTML = number;

    // wenn 0 erreicht ist, soll Intervall stoppen und div nicht mehr gezeigt werden:
    if (number <= 0) {
      clearInterval(intervalCountDown);
      message.classList.add("fade-out");
    }
  }, 1000);
};

countDown();
