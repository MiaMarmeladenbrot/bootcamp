import { Rezept } from "../models/Rezept.js";

export async function addRecipe(recipeInfo) {
  const foundRecipe = await Rezept.findOne({ name: recipeInfo.name });
  if (foundRecipe) {
    // rezept mit dem namen exisitert bereits!! (wollen wir nicht)
    // throw ist wie ein "negatives return" (zitat resul) und schickt den wert new Error("...") an das .catch()
    throw new Error("Recipe with this name already exists");
  }
  return Rezept.create(recipeInfo);
}
