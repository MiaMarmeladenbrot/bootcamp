// ! Collection "rezepte" durchsuchen und bearbeiten
// mongodb importieren
import { ObjectId } from "mongodb";

// get-Funktion importieren
import { getDb } from "./getDb.js";

//* Funktion, um alle Rezeptdaten zu finden und auszugeben
// find() returned gefundene Daten
function findAll() {
  // Datenbank connecten und die Collection namens "rezepte" in Gänze ausgeben:
  return getDb().then((db) => db.collection("rezepte").find().toArray());
}

//* Funktion, um die Daten eines bestimmten Rezepts zu finden und auszugeben
// findById() returned gefundene Daten
function findById(id) {
  // die Id im zurückgegebenen Objekt ist eine ObjectId, deshalb muss die aus der request geholte Id auch in eine Objekt-Id umgewandelt werden
  // wäre eigentlich ein HexString = hexadecimal representation of the string
  const idAsObjectId = ObjectId.createFromHexString(id);

  // Datenbank connecten und die collection namens rezepte nach dieser einen Id durchsuchen:
  return getDb().then((db) =>
    db.collection("rezepte").findOne({ _id: idAsObjectId })
  );
}

//* Funktion, um ein neues document in der collection "rezepte" zu erstellen
function createOne(documentInfo) {
  // die Datenbank connecten und in der collection "rezepte" ein neues document hinzufügen
  return (
    getDb()
      .then((db) => db.collection("rezepte").insertOne(documentInfo)) // --> returned: { acknowledged: true, insertedId: ObjectId("...") }
      // da wir nicht nur die Id zurückgeben wollen, sondern auch die Infos, die wir hinzugefügt haben, ergänzen wir die Id in documentInfo und geben das zurück
      .then(
        (result) =>
          result.acknowledged
            ? { ...documentInfo, _id: result.insertedId }
            : null // kopie com dokumnt mit _id (===> gleicher wert wie in der datenbank)
      )
  );
}
// das wäre dann der Funktionsaufruf in index.js, damit wir die geänderten Daten als Antwort an den Client zurückgeben:
// createOne({ name: "Kuchen ", }).then(documentMitId => res.json(documentMitId)))

//* Funktion, um ein document in der collection "rezepte" zu ändern
function updateOne(id, updateInfo) {
  // id wieder in ObjectId umwandeln:
  const idAsObjectId = ObjectId.createFromHexString(id);

  // Datenbank connecten
  return (
    getDb()
      // in collection "rezepte" mit der Id das richtige document suchen und dort die neuen Informationen übergeben mit $set
      .then((db) =>
        db
          .collection("rezepte")
          .updateOne({ _id: idAsObjectId }, { $set: updateInfo })
      )
      // wenn das erfolgreich war, suchen wir noch mal nach der Id und geben so die geänderten Daten zurück
      .then((result) => {
        if (result.acknowledged && result.modifiedCount === 1)
          return findById(
            id
          ); // returned das document nach dem update, also inkl geänderter Infos
        else return null;
      })
  );
}
// Das wäre eigentlich das Ergebnis von updateOne, deshalb ergänzen wir danach noch findById():
// --> result von updateOne : {
//   acknowledged: true,
//   modifiedCount: 1,
//   upsertedId: null,
//   upsertedCount: 0,
//   matchedCount: 1,
// };

//* Funktion, um ein bestimmtes document zu löschen
function deleteOne(id) {
  // id wieder in ObjectId umwandeln:
  const idAsObjectId = ObjectId.createFromHexString(id);

  // Datenbank connecten
  return getDb().then((db) =>
    // in collection "rezepte" nach Id suchen, dieses Document löschen und die gelöschten Daten returnen
    db.collection("rezepte").findOneAndDelete({ _id: idAsObjectId })
  );
}

// alle Funktionen exportieren
export const RezepteDAO = {
  findAll,
  findById,
  createOne,
  updateOne,
  deleteOne,
};
