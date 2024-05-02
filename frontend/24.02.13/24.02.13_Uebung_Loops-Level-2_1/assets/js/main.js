// - Lernziel: Anwendung for-Schleife und Conditional Statements.
// - Nehmen wir an, wir haben 100 Bilder in unserem Ordner. Wir wollen ein Array von Bildern erstellen und die Dateinamen standardisieren – wie in der Ergebnisvorschau.
// - Deklariere dafür die Function imageArray.
// - Deklariere im Funktionskörper die Variable returnArray als leeres Array.
// - Schreibe eine for-Schleife.
// - Nutze push() und Conditionals Statements (if, else if, else).
// - Lasse dir returnArray wie in der Ergebnisvorschau von image\_001.jpg bis image\_100.jpg in der Konsole ausgeben.

const imageArray = () => {
  let returnArray = [];
  for (let i = 1; i <= 100; i++) {
    // returnArray.push(`image_${i}.jpg`);

    // wenn i 0-9 ist, dann 00i
    // wenn i 10-99 ist, dann 0i
    // wenn i 100 ist, dann i
    if (i < 10) {
      returnArray.push(`image_00${i}.jpg`);
    } else if (i > 9 && i < 100) {
      returnArray.push(`image_0${i}.jpg`);
    } else {
      returnArray.push(`image_${i}.jpg`);
    }
  }
  console.table(returnArray);
};

imageArray();
