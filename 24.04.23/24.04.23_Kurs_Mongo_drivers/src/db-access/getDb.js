// ! Datenbank in MongoDb verbinden

// MongoClient importieren
import { MongoClient } from "mongodb";

// dotenv importieren
import dotenv from "dotenv";
dotenv.config();

// Mongo-Url aus env holen
// connection string auf MongoDb in env speichern: in MongoDB Connect-Methode auswählen: Drivers/Treiber → node.js auswählen → connection string anpassen mit Username und Passwort und das in env-Datei des Projekts speichern
const url = process.env.MONGO_URL;

// neuen Mongo Client starten
const client = new MongoClient(url);

// Funktion, die uns die Datenbank zurückgibt, damit wir damit weiterarbeiten können
export function getDb() {
  return (
    client
      // connecten den neuen Mongo Client mit unserer DB
      .connect()
      // returned eine Promise
      .then((connectedClient) => {
        // wir brauchen die Datenbank aus MongoDb
        // Variable für Datenbanknamen festlegen
        const dbName = "rezeptDb";
        // Variable für Datenbank anlegen: das ist die Datenbank rezeptDb
        const db = connectedClient.db(dbName);
        return db;
      })
  );
}
