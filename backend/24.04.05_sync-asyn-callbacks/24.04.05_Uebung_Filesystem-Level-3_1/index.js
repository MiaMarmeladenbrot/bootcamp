// - In dieser Übung geht es darum, zu überprüfen, ob eine .txt-Datei bereits existiert. Falls dies nicht der Fall ist, soll sie erstellt werden. Falls sie bereits existiert, soll mithilfe eines Parameters eine neue Zeile in der Datei hinzugefügt werden. Gehe dabei Schritt für Schritt vor:
// - Erstelle mithilfe des Node.js Filesystems einen Unterordner innerhalb deines Projektordners. In diesem Ordner soll die Datei später angelegt werden.
// - Schreibe eine Funktion, die einen Parameter annimmt.
// - Diese soll prüfen, ob die txt-Datei bereits existiert. Wenn dies nicht der Fall ist, soll sie erstellt werden.
// - In die Datei soll der Inhalt des Parameters geschrieben werden. Denk daran, diesen auch mitzuliefern, wenn du die Funktion aufrufst.

const fs = require("fs");

// neuen Ordner erstellen
const folder = "./folder";
if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder);
} else {
  console.log("Ordner besteht bereits");
}

// Funktion mit Parameter, die neue Datei im neuen Ordner erstellt bzw. die Datei befüllt
const dataFunc = (para) => {
  if (fs.existsSync("./folder/data.txt")) {
    // falls Datei schon existiert, ergänze den Parameter inkl Absatz (\n)
    fs.appendFile("./folder/data.txt", `${para} \n`, (err) => {
      if (err) return console.log(err);
      console.log(`Zeile hinzugefügt:`, para);
    });
  } else {
    // falls Datei noch nicht existiert, erstelle sie mit leerem Inhalt im Ordner namens folder
    fs.writeFile("./folder/data.txt", "", (err) => {
      if (err) return console.log(err);
      console.log("file was written");
    });
  }
};

// Funktionsaufrufe
dataFunc("text");
dataFunc("für");
dataFunc("alle");
