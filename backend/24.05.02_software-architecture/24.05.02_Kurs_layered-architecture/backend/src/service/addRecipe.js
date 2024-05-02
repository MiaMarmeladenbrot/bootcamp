import { Rezept } from "../models/Rezept.js";

export function addRecipe(recipeInfo) {
  // bevor wir ein Rezept hinzufügen, wollen wir prüfen, ob bereits ein Rezept mit diesem Namen existiert
  // dafür suchen wir in allen Rezepten nach dem Namen ...
  return Rezept.findOne({ name: recipeInfo.name }).then((foundRecipe) => {
    // ... und falls er bereits existiert, werfen wir einen Error aus
    if (foundRecipe) {
      // throw ist wie ein "negatives return" (zitat resul) und schickt den wert new Error("...") an das .catch()
      throw new Error("Recipe with this name already exists");

      // ... und falls der Name noch nicht existiert, legen wir das neue Rezept an
    } else {
      return Rezept.create(recipeInfo);
    }
  });
}

// * Unterschied return und throw
// function f() {
//   return "wert"
// }

// const result = f()

/////////////

/*
function f(input) {
  if (!input) {
    throw "error :O";
  }

  return "wert";
}

function f() {
  return "wert";
}

try {
  const result = f(); // throw ? ======> catch
  console.log(result); // wert
} catch (err) {
  console.log(err); // error :O
}
*/
