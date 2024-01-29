// - In dieser Aufgabe, soll ein Button erstellt werden, der beim Klicken eine Funktion ausführt. Füge dazu im HTML einen Button “Headline stylen” hinzu.
// - Gib dem Button die Funktion changeHeadline() mit. Im JavaScript nutzt du jetzt den Button, um der Headline das neue CSS Styling zuzuweisen.

function changeHeadline() {
  const headlineNew = document.querySelector("h1");
  headlineNew.classList.add("change-headline");
}

// - Erstelle auch einen Button “Headline zurücksetzen” und weise ihm die Funktion resetHeadline() zu. Wie der Name schon sagt, soll das Styling der Headline beim Klicken auf den Button zurückgesetzt werden, also musst du die Funktion im JavaScript dementsprechend definieren.

function resetHeadline() {
  const headlineNew = document.querySelector("h1");
  headlineNew.classList.remove("change-headline");
}
