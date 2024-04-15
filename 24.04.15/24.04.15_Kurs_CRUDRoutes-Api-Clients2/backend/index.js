import cors from "cors";
import express from "express";
import { readTransactions, writeTransactions } from "./filesystem.js";

const app = express();
app.use(cors());

app.use((req, _, next) => {
  console.log("new request", req.method, req.url);
  next();
});

// * body parser für post/patch/put-Anfragen
// Ressourcen werden im Body versendet
// Body einer Request muss aber geparsed werden, um auf seinen Inhalt zugreifen zu können
// dazu verwenden wir einen body-Parser wie express.json()
//     express.json = body-parser-middleware, der json-Inhalte parsed
// könnte auch direkt bei app.post() genutzt werden:
//          app.post("/api/v1/transactions", express.json(), (req, res) => {});
// wird idR aber ganz oben im Code eingefügt, falls sich später am Code noch was ändert und er sich so immer auf alles bezieht, was folgt
app.use(express.json());

//* Endpunkt 1: alle transactions lesen - GET
app.get("/api/v1/transactions", (_, res) => {
  // - Plan:
  // 1. read transactions.json
  // 2. parse content to js-array
  // 3. send to client as json
  // Funktion geschrieben in filesystem.js
  readTransactions()
    .then((transactions) => res.status(200).json(transactions)) // Status OK
    .catch((err) =>
      res.status(500).json({ err, message: "Could not read transactions" })
    ); // error handling
});

//* Endpunkt 2: eine bestimmte transaction finden und lesen - GET
app.get("/api/v1/transactions/:id", (req, res) => {
  const transactionId = req.params.id; // Id des aufgerufenen Pfads auslesen

  // Funktionsaufruf
  readTransactions()
    .then(
      (transactions) => transactions.find((item) => item.id == transactionId) // ausgelesene Id im json finden
    )
    .then((foundTransaction) => res.status(200).json(foundTransaction || {})) // Daten der gefundenen Id zurückgeben; //- falls nichts gefunden wurde bzw. undefined oder null rauskommt, soll er ein leeres Objekt zurücksenden
    .catch((err) =>
      res.status(500).json({ err, message: "Could not read new transactions" })
    ); // error handling
});

//* Endpunkt 3: neue Transaktion anlegen - POST
// - Plan:
// readTransactions() => transaction [...]
// => transactions[oldTransaction, newTransaction] // wie transactions.push(newTransactions)
// writeTransactions(newTransaction) // save to file
app.post("/api/v1/transactions", (req, res) => {
  // neue Daten aus dem Body der Request in einer Variable speichern
  const newTransaction = {
    id: Date.now(),
    timestamp: Date.now(),
    type: req.body.type,
    description: req.body.description,
    amount: req.body.amount,
  };

  // Funktionsaufruf, um Transactions-Datei zu lesen und dann die Variable der neuen Transaktion hinzuzufügen
  readTransactions() // liest transactions-file ein und gibt Inhalt als js-Objekt zurück
    .then((transactions) => [...transactions, newTransaction]) // mit spread wird im eingelesenen js-Objekt die Variable der neuen Transaktion hinzugefügt und das neue Array returned
    .then((transactionsArray) => writeTransactions(transactionsArray)) // das neue Array mit alten und neuen Daten wird mit Funktion ins json-file geschrieben und returned
    .then((transactionsArray) => res.status(200).json(transactionsArray)) // neues Array wird als response, dass alles geklappt hat, ausgegeben
    .catch((err) =>
      res.status(500).json({ err, message: "Could not add new transaction" })
    ); // error handling
});

//* Endpunkt 4: Transaktion ändern - PUT/PATCH
// put = update or create: Ressource modifizieren, aber man muss ganze Ressource senden, die man ändern will, nicht nur einen Teil; falls Ressource nicht gefunden wird, wird sie erstellt
// patch = just update: nur Ressource modifizieren; muss nur die geänderten Daten eingeben; falls Datei nicht vorhanden ist, gibt es Fehlermeldung
app.patch("/api/v1/transactions/:id", (req, res) => {
  // Id des Requests in Variable speichern
  const transactionIdToUpdate = req.params.id;

  // Update-Informationen aus dem Request-Body in Variable speichern
  const updateInfo = req.body;

  readTransactions() // transactions.json lesen
    .then((transactions) =>
      transactions.map((currentTransaction) => {
        // Abgleich der Request-Id mit allen transaction-Ids:
        if (currentTransaction.id.toString() === transactionIdToUpdate) {
          // falls Id zutrifft, update current Transaction with update Info from request body:
          return {
            ...currentTransaction,
            ...updateInfo,
          };
        } else {
          // die Transactions, die nicht übereinstimmen, sollen unverändert bleiben
          return currentTransaction;
        }
      })
    )
    .then((transactions) => writeTransactions(transactions)) // transactions.json überschreiben mit neuem Inhalt
    .then((transactions) => res.status(200).json(transactions)) // OK-Status und neues Array als response zurückgeben
    .catch((err) =>
      res.status(500).json({ err, message: "Could not update transaction" })
    );
});

//* Endpunkt 5: Transaktion löschen - DELETE
app.delete("/api/v1/transactions/:id", (req, res) => {
  // Id der Anfrage auslesen
  const transactionIdToDelete = req.params.id;

  // Funktionsaufruf, um Transactions-Datei zu lesen und dann die Variable der neuen Transaktion hinzuzufügen
  readTransactions() // liest transactions-file ein und gibt Inhalt als js-Objekt zurück
    .then((transactions) =>
      transactions.filter(
        (item) => item.id.toString() !== transactionIdToDelete // filtered alle Ids raus, die NICHT die angegebene sind
      )
    )
    .then((transactionsArray) => writeTransactions(transactionsArray)) // überschreibt die transactions.json mit allen gefundenen Ids, also allen  außer der gelöschten
    .then((transactionsArray) => res.status(200).json(transactionsArray)) // OK-Status und neues Array werden als response zurückgegeben
    .catch((err) =>
      res.status(500).json({ err, message: "Could not add new transaction" })
    ); // error handling
});

const PORT = 3003;
app.listen(PORT, () => console.log("Server ready at Port", PORT));
