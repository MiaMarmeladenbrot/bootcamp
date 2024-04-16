import cors from "cors";
import multer from "multer";
import express from "express";
import { readTransactions, writeTransactions } from "./filesystem.js";

// create server
const app = express();

// cors middleware
app.use(cors());

// logging middleware
app.use((req, _, next) => {
  console.log("new request", req.method, req.url);
  next();
});

// gleicht automatisch alle Pfade ab mit den vorhandenen Dateien im Ordner "uploads" und veröffentlicht so alle verfügbaren Daten im uploads-Ordner
app.use(express.static("uploads"));

// body parser middleware
app.use(express.json());

// GET all
app.get("/api/v1/transactions", (_, res) => {
  readTransactions()
    .then((transactions) => res.status(200).json(transactions)) // .json wandelt das übergebene Objekt in eine json String um (durch JSON.stringify)
    .catch((err) =>
      res.status(500).json({ err, message: "Could not read all transactions" })
    );
});

// GET one
app.get("/api/v1/transactions/:id", (req, res) => {
  const transactionId = req.params.id;
  readTransactions()
    .then((transactions) =>
      transactions.find((t) => t.id.toString() === transactionId)
    )
    .then((foundTransaction) => res.status(200).json(foundTransaction || {}))
    // .then((foundTransaction) => res.status(200).json(foundTransaction ? foundTransaction : {}))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not read transaction" })
    );
});

// ! MULTER
// multer-destination festlegen: uploads-Ordner
const upload = multer({ dest: "./uploads" });

// POST new file
// lädt die angegebene Datei (nur eine, weil single) in den uploads-Ordner
// gibt ein JSON mit dem Dateinamen zurück
app.post("/api/v1/files/upload", upload.single("attachment"), (req, res) => {
  res.json({ fileName: req.file.filename });
});

// POST new transaction
app.post("/api/v1/transactions", (req, res) => {
  const newTransaction = {
    id: Date.now(),
    timestamp: Date.now(),
    type: req.body.type,
    description: req.body.description,
    amount: req.body.amount,
    fileName: req.body.fileName, // Dateinamen des hochgeladenen Files hinzufügen, damit auch das ab jetzt in den json-Daten gespeichert werden
  };
  readTransactions()
    .then((transactions) => [...transactions, newTransaction])
    .then((transactionsWithNew) => writeTransactions(transactionsWithNew))
    .then((transactionsWithNew) => res.status(200).json(transactionsWithNew))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not add new transaction" })
    );
});

// PATCH one
app.patch("/api/v1/transactions/:id", (req, res) => {
  const transactionIdToUpdate = req.params.id;
  const updateInfo = req.body; // request body { amount?, description?, type? }
  readTransactions()
    .then((transactions) =>
      transactions.map((currentTransaction) => {
        if (currentTransaction.id.toString() === transactionIdToUpdate) {
          // update transaction
          return {
            ...currentTransaction,
            ...updateInfo,
          }; // overwrite currentTransaction (to be updated) with updateInfo
        } else {
          return currentTransaction; // leave non-target transactions unmodified
        }
      })
    )
    .then((transactions) => writeTransactions(transactions)) // transactions sind hier ALLE aber OHNE der gelöschten transaction
    .then((transactions) => res.status(200).json(transactions))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not update transaction" })
    );
});

// DELETE one
app.delete("/api/v1/transactions/:id", (req, res) => {
  const transactionIdToDelete = req.params.id;
  readTransactions()
    .then((transactions) =>
      transactions.filter((t) => t.id.toString() !== transactionIdToDelete)
    )
    .then((transactions) => writeTransactions(transactions)) // transactions sind hier ALLE aber OHNE der gelöschten transaction
    .then((transactions) => res.status(200).json(transactions))
    .catch((err) =>
      res.status(500).json({ err, message: "Could not remove transaction" })
    );
});

const PORT = 3003;
app.listen(PORT, () => console.log("Server ready at port", PORT));
