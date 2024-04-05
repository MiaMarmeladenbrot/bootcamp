const fs = require("fs");

// - Ändere den Textinhalt der Datei "blog1.txt" in “Ich bin ein Webdeveloper”
const text1 = "Ich bin ein Webdeveloper";
fs.writeFile("./blog1.txt", text1, (err) => {
  if (err) return console.log(err);
  //   console.log("Änderung done");
});

// - Erstelle eine neue Datei "blog2.txt" und trage dort einen beliebigen Text ein.
const text2 = "beliebiger Text";
fs.writeFile("./beliebig.txt", text2, (err) => {
  if (err) return console.log(err);
  //   console.log("beliebiger Text done");
});

// - Überprüfe, ob der Ordner "assets" bereits existiert. Falls ja, lösche diesen.
// if (fs.existsSync("./assets")) {
//     console.log("exists");
// } else {
//     console.log("doesnt exist");
// }

fs.access("./assets", fs.F_OK, (err) => {
  if (err) return console.log(err);
  console.log("file exists");
});

// - Erstelle einen neuen Ordner "assets".
if (!fs.existsSync("./assets")) {
  fs.mkdirSync("./assets");
}

const assets1 = "./assets1";
if (!fs.existsSync(assets1)) {
  fs.mkdirSync(assets1);
}

// - Überprüfe, ob die Datei "delete.txt" bereits existiert. Falls ja, lösche diese.
if (fs.existsSync("./delete.txt")) {
  fs.unlink("./delete.txt", (err) => {
    if (err) console.log(err, "deletion");
    console.log("file deleted");
  });
} else {
  console.log("file doesn't exist");
}

// - Erstelle eine Datei namens „delete.txt“.
const text3 = "delete, delete, delete";
fs.writeFile("./delete.txt", text3, (err) => {
  if (err) return console.log(err);
  console.log("delete was written");
});

// - Erstelle eine Datei namens "Hello.txt" und trage dort einen beliebigen Text ein. Benenne die Datei anschließend in "HelloWorld.txt" um.
const text4 = "Hello hello";
fs.writeFile("./hello.txt", text4, (err) => {
  if (err) return console.log(err);
  console.log("hello was written");
});

fs.rename("hello.txt", "HelloWorld.txt", (err) => {
  if (err) console.log(err);
  console.log("hello renamed");
});
