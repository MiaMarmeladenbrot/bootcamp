// - In dieser Übung geht es darum, Arrays nicht alphabetisch von A-Z, sondern von Z-A zu sortieren.
// - Sortiere die Programmiersprachen in umgekehrter alphabetischer Reihenfolge.
// - Der Code steht im Code-Snippet.
// - Deklariere die Funktion sortierung2.
// - Verwende den Befehl sort() und reverse(), um die Aufgabe auszuführen.
// - Rufe die Funktion sortierung2 auf.
// - Überprüfe das Ergebnis in der Konsole.

// Variable aus Übung 1_1:
let languages = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];

languages.sort();
console.table(languages);

languages.sort().reverse();
console.table(languages);
