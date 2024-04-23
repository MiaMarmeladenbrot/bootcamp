// ! Collection "bewertungen" durchsuchen und bearbeiten
// --> kommentierte Version in rezepteDAO.js

import { ObjectId } from "mongodb";
import { getDb } from "./getDb.js";

function findAll() {
  return getDb().then((db) => db.collection("bewertungen").find().toArray());
}

function findById(id) {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb().then((db) =>
    db.collection("bewertungen").findOne({ _id: idAsObjectId })
  );
}

function createOne(documentInfo) {
  return getDb()
    .then((db) => db.collection("bewertungen").insertOne(documentInfo))
    .then((result) =>
      result.acknowledged ? { ...documentInfo, _id: result.insertedId } : null
    );
}

function updateOne(id, updateInfo) {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb()
    .then((db) =>
      db
        .collection("bewertungen")
        .updateOne({ _id: idAsObjectId }, { $set: updateInfo })
    )
    .then((result) => {
      if (result.acknowledged && result.modifiedCount === 1)
        return findById(id);
      else return null;
    });
}

function deleteOne(id) {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb().then((db) =>
    db.collection("bewertungen").findOneAndDelete({ _id: idAsObjectId })
  );
}

function findByRecipe(recipeId) {
  const recipeIdAsObjectId = ObjectId.createFromHexString(recipeId);
  return getDb().then((db) =>
    db
      .collection("bewertungen")
      .find({ recipeId: recipeIdAsObjectId })
      .toArray()
  );
}

export const BewertungenDAO = {
  findAll,
  findById,
  createOne,
  updateOne,
  deleteOne,

  // extras zu den basic CRUDs
  findByRecipe,
};
