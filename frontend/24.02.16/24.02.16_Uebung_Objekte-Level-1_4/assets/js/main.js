// - Lernziel: Auf Objekte zugreifen.
// - Verwende den vorgegebenen Code (siehe Code-Snippet).
// - Greife auf die Werte "Nala" und "Droopy" in diesem Objekt zu.
// - Lasse dir einmal alle Hundenamen anzeigen.
// - Nutze eine Methode, um die Hundenamen zu ändern.

let unsereHaustiere = [
  {
    tiertyp: "Katze",

    names: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

//* Greife auf die Werte "Nala" und "Droopy" in diesem Objekt zu.
console.log(unsereHaustiere[0].names[1]); //--> Nala
console.log(unsereHaustiere[1].names[2]); //--> Droopy

//* Lasse dir einmal alle Hundenamen anzeigen.
console.log(unsereHaustiere[1].names); //--> alle Hundenamen als array

//* Nutze eine Methode, um die Hundenamen zu ändern.
unsereHaustiere[1].names[0] = "Rex";
unsereHaustiere[1].names[1] = "Mimi";
unsereHaustiere[1].names[2] = "Keks";
console.log(unsereHaustiere[1].names); //--> array: Rex, Mimi, Keks

// unsereHaustiere[1].names = "Mimi";
console.log(unsereHaustiere[1].names); //--> string: Mimi

// unsereHaustiere[1].names += "Mimi";
console.log(unsereHaustiere[1].names); //--> string: Knöpfchen,Pinselchen,DroopyMimi

// unsereHaustiere.push("Mimi");
console.log(unsereHaustiere); //--> array: Mimi an 2. Position
