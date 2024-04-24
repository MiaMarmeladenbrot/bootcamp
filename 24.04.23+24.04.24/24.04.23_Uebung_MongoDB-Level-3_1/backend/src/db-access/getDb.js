// mongodb importieren
import { MongoClient } from "mongodb";

// auf .env-Datei zugreifen
import dotenv from "dotenv";
dotenv.config();

// url aus .env-Datei in Variable speichern
const url = process.env.MONGO_URL;

// neuer client zur MongoDb-URL aus .env-Datei
const client = new MongoClient(url);

export function getDb() {
  // URL-Client connecten, dann Datenbank namens "video", in der die movies liegen, returnen
  return client.connect().then((connectedClient) => {
    const dbName = "video";
    const db = connectedClient.db(dbName);
    // console.log("client", client);
    // console.log("DB:", db);
    return db;
  });
}
// getDb();
