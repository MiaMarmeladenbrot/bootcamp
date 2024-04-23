import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.MONGO_URL;

const client = new MongoClient(url);

client
  .connect()
  // returned eine Promise
  .then((connectedClient) => {
    // wir brauchen die Datenbank aus MongoDb
    // Variable für Datenbanknamen festlegen
    const dbName = "rezeptDb";

    // Variable
    const db = connectedClient.db(dbName);

    return db.collection("rezepte").insertOne({
      name: "Kuchen mit Schoko",
      personen: 2,
    });
  })
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => client.close());
