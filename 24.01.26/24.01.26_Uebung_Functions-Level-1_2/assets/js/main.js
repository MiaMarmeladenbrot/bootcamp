// - Deklariere die Funktion intro2() mit dem Parameter (paramName). Im Funktionskörper {} passiert dann Folgendes:
// - Deklariere die Variable name mit dem Wert “SuperCoder:in”.
// - Gib dazu folgendes in der Konsole aus: Hi SuperCoder:in. Mein Name ist xyz.
// - Rufe die Funktion mit verschiedenen Argument auf und schaue was passiert.

function intro2(paramName) {
  let name = "SuperCoder:in";
  console.log("Hi " + name + "! Mein Name ist " + paramName + ".");
}

intro2("Mia");
intro2("Silas");
intro2("Felix");
