// - Lernziel: auf Objekt-Inhalte zugreifen.
// - Verwende den vorgegebenen Code (siehe Code-Snippet).
// - Greife auf die Eigenschaften dieses Objekts zu und gib folgende Werte in der Konsole aus:
// - Geheimnisse
// - Cola
// - Hefter

let unserLager = {
  schreibtisch: {
    schublade: "Hefter",
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse",
    },
    "Untere Schublade": "Cola",
  },
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);
