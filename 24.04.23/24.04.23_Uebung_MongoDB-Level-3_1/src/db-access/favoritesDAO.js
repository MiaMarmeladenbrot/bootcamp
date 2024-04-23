// mongodb importieren
import { ObjectId } from "mongodb";

// get-Funktion importieren
import { getDb } from "./getDb.js";

// * Funktion, um einen Film zu favorites hinzuzufügen
// id des movies aus req auslesen
// diese als Inhalt im neuen favorites-document speichern
// favorites-document hat 2 Inhalte: _id und movieId
// dann müsste es für jeden Film, den ich in favorites abspeichere, ein eigenes document in favorites-collection geben
// -> movieId darf sich in keinem document doppeln -> Abfrage? wenn movieId exists, nimm den raus, falls es keinen gibt, füge ihn hinzu
// -> im Frontend dann Endpunkte togglen, dabei die Id des jeweils getoggelten Movies in der req mitgeben und so Daten hinzufügen oder löschen?
function addToFavorites(newFavoriteInfo) {
  return getDb()
    .then((db) => db.collection("favorites").insertOne(newFavoriteInfo))
    .then((result) =>
      result.acknowledged
        ? { _id: result.insertedId, ...newFavoriteInfo }
        : null
    );
}

// * Funktion, um einen Film aus favorites zu löschen
// Favoriten-Id finden und löschen
function deleteFromFavorites(id) {
  const idAsObjectId = ObjectId.createFromHexString(id);

  return getDb().then((db) =>
    db.collection("favorites").findOneAndDelete({ _id: idAsObjectId })
  );
}

// * Funktion, um alle favorite movies anzuzeigen
// findAll favorites
// --> mit id Aufruf von movieDetails, um weitere Infos zu den gespeicherten Filmen zu kriegen
function showFavorites() {
  return getDb().then((db) => db.collection("favorites").find().toArray());
}

export const FavoritesDAO = {
  addToFavorites,
  deleteFromFavorites,
  showFavorites,
};
