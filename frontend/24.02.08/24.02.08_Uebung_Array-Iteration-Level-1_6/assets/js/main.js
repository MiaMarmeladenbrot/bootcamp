// - Lernziel: Anwenden von JavaScript map() oder forEach(), um Dateiendungen zu verändern
// - Erstelle ein neues Array auf Basis des gegebenen Arrays (siehe Code-Snippet).
// - Entferne die Dateiendungen (z.B. "image.jpg" => "image").
// - Falls keine Dateiendung vorhanden ist, soll der Wert "invalid" gespeichert werden (z.B. "dog" => "invalid").
// - Die Werte sollen in Kleinbuchstaben gespeichert werden.
// - Es sollte entweder mit der map() oder forEach() Methode gearbeitet werden.

let album = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];
console.log("%c album:", "color:red");
console.table(album);

//! .-Endungen gelöscht:
const albumNew = album.map((data) => {
  if (data.includes(".")) {
    return data.slice(0, data.indexOf("."));
  } else {
    return (data = "invalid");
  }
});
console.log("%c albumNew:", "color:red");
console.table(albumNew);

//! in Kleinbuchstaben:
const albumNew1 = album.map((data) => {
  let newTitle = data.toLowerCase(); //--> ersetzt im Folgenden data-Parameter, weil data bereits in dieser neuen Variablen enthalten ist und dann alles als lower case ausgegeben wird

  if (newTitle.includes(".")) {
    return newTitle.slice(0, newTitle.indexOf("."));
  } else {
    return (newTitle = "invalid");
  }
});
console.log("%c albumNew1 in lower case:", "color:red");
console.table(albumNew1);
