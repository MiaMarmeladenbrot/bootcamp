// mongodb importieren
import { ObjectId } from "mongodb";

// get-Funktion importieren
import { getDb } from "./getDb.js";

//* Funktion, um alle movies zu finden
function findAll() {
  return getDb().then((db) => db.collection("movieDetails").find().toArray());
}

//* Funktion, um einen bestimmten Movie zu finden
function findOne(id) {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb().then((db) =>
    db.collection("movieDetails").findOne({ _id: idAsObjectId })
  );
}

//* Funktion, um einen neuen Movie hinzuzufügen
function insertOne(documentInfo) {
  return getDb()
    .then((db) => db.collection("movieDetails").insertOne(documentInfo))
    .then((result) =>
      result.acknowledged ? { _id: result.insertedId, ...documentInfo } : null
    );
}

//* Funktion, um einen Film zu bearbeiten
function updateOne(id, updateInfo) {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb()
    .then((db) =>
      db
        .collection("movieDetails")
        .updateOne({ _id: idAsObjectId }, { $set: updateInfo })
    )
    .then((result) => {
      if (result.acknowledged && result.modifiedCount === 1) return findOne(id);
      else return null;
    });
}

//* Funktion, um einen Film zu löschen
function deleteOne(id) {
  const idAsObjectId = ObjectId.createFromHexString(id);

  return getDb().then((db) =>
    db.collection("movieDetails").findOneAndDelete({ _id: idAsObjectId })
  );
}

//* Funktionen exportieren, um in index.js drauf zuzugreifen
export const MoviesDAO = {
  findAll,
  findOne,
  insertOne,
  updateOne,
  deleteOne,
};
