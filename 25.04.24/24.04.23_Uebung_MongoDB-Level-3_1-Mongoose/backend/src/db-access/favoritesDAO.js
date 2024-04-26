// mongodb importieren
import { ObjectId } from "mongodb";

// get-Funktion importieren
import { getDb } from "./getDb.js";

// * Funktion, um alle favorite movies anzuzeigen
// findAll favorites
// function findFavorites() {
//   return getDb().then((db) => db.collection("favorites").find().toArray()); // [{ _id: favid , movieId: movieId}]
// }

// mit gefundenen ids dann in movieDetails suchen, um weitere Infos zu den gespeicherten Filmen zu kriegen
const showFavoriteMovies = () => {
  return getDb()
    .then((db) => db.collection("favorites").find().toArray()) // [{ _id: favid , movieId: movieId}]
    .then(
      (foundFavorites) =>
        foundFavorites.map((singleFavorite) => singleFavorite.movieId) // ObjectId jedes gefundenen Movies
    )
    .then((movieIds) => Promise.all([getDb(), movieIds])) // hier müssen db von Funktion getDb() und gefundene movieIds weitergegeben werden, damit wir mit beiden weiterarbeiten können, denn wir ja mit getDb() in der collection movieDetails nach den gefundenen movieIds suchen
    .then(
      ([db, movieIds]) =>
        db
          .collection("movieDetails")
          .find({ _id: { $in: movieIds } }) // hier suchen nach den gefundenen IDs in der movieDetails collection
          .toArray() // und die gefundenen Ergebnisse als Array ausgeben
    );
};

//* Funktion, um eine bestimmte Favorisierung zu finden
function findOneFavorite(id) {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb().then((db) =>
    db.collection("favorites").findOne({ _id: idAsObjectId })
  );
}

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
    db.collection("favorites").findOneAndDelete({ movieId: idAsObjectId })
  );
}

// * Funktion, um die Favoriten eines bestimmten Films zu finden
const findByMovie = (movieId) => {
  const idAsObjectId = ObjectId.createFromHexString(movieId);
  return getDb().then((db) =>
    db.collection("favorites").find({ movieId: idAsObjectId }).toArray()
  );
};

// * Funktion, um einen favorisierten Film zu finden
const getOneFavorite = (movieId) => {
  const idAsObjectId = ObjectId.createFromHexString(movieId);

  return getDb().then((db) =>
    db.collection("favorites").findOne({ movieId: idAsObjectId })
  );
};

export const FavoritesDAO = {
  // findFavorites,
  showFavoriteMovies,
  findOneFavorite,
  addToFavorites,
  deleteFromFavorites,
  findByMovie,
  getOneFavorite,
};
