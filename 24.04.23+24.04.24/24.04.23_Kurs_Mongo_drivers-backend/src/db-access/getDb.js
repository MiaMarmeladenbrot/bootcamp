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

// ! singleton-Pattern
// singleton = hat im Code einen Wert, der nur ein einziges Mal gesetzt werden darf
// singleton = Variable für Datenbank-Referenz, die am Anfang null ist
// steht für die Datenbank, zu der wir uns über den Client verbinden werden
// brauchen die variable Konstante, um zu prüfen, ob die Datenbank schon verbunden ist
let dbRef = null;

// Funktion, die uns die Datenbank zurückgibt, damit wir damit weiterarbeiten können
export function getDb() {
  // erst prüfen, ob die DB schon connected wurde
  // falls ja, returne die fertige DB
  return new Promise((resolve, reject) => {
    if (dbRef) {
      return resolve(dbRef);
    }

    // falls nicht verbinde die DB:
    client
      // connecten den neuen Mongo Client mit unserer DB
      .connect()
      // returned eine Promise
      .then((connectedClient) => {
        // wir brauchen die Datenbank aus MongoDb
        // Variable für Datenbanknamen festlegen
        const dbName = "rezepteDb";
        // Variable für Datenbank anlegen: das ist die Datenbank rezeptDb
        const db = connectedClient.db(dbName);
        dbRef = db; // Datenbankreferenz zwischenspeichern, damit ich beim nächsten Aufruf prüfen kann, ob die DB shcon verbunden ist
        resolve(dbRef);
      })
      .catch((err) => reject(err));
  });
}
