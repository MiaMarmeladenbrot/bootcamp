// mongodb importieren
import { ObjectId } from "mongodb";

// get-Funktion importieren
import { getDb } from "./getDb.js";

// * Funktion, um alle favorite movies zu finden
// id finden
// Daten der gefundenen ID zu favorites hinzufügen
function addToFavorites(id) {
  return getDb();
  //    nicht mit insert, da das Ding ja bereits eine ID besitzt
}

// * Funktion, um einen Film aus favorites zu löschen

// * Funktion, um alle favorite movies anzuzeigen
