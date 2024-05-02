// - Lernziel: mit JavaScript die Struktur und den Inhalt einer Webseite ändern (DOM-Manipulation)
// - Schreibe mithilfe des Befehls document.write() folgendes in dein HTML-Dokument: Eine h1 mit “Hello World!” und ein p-Element mit “Have a nice day!”.

document.write("<h1> Hello World! </h1>", "<p> Have a nice day! </p>");

// - Deklariere die Variable myText und fülle sie mit “Hello again”. Schreibe die Variable anschließend in dein Dokument.

let myText = "Hello again";
document.write(myText);

// - Deklariere Variablen: vorname, nachname und fülle sie mit deinem Namen. Schreibe sie anschließend in dein Dokument, sodass folgender Satz erscheint: "Hi, ich bin SuperCoder:in".

let vorname = "Mia";
let nachname = "Mecklenburg";
document.write("Hi, ich bin SuperCoderin " + vorname + " " + nachname);
