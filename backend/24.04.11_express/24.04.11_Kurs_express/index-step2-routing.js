// ! Express Routing
// Routing passiert im Hintergrund
// eine Request kommt an und geht den Code von oben nach unten durch und sucht nach dem passenden Endpunkt zu dem Endpunkt, den das Request-Paket im Header mitgeschickt hat
// sobald sie auf ein Match trifft, wird dieses ausgeführt und der darauffolgende Code nicht weiter durchsucht
// existiert der Endpunkt nicht, gibt express automatisch eine Fehlermeldung zurück (zB Cannot GET /xyz)
// Beispiel: Request-Packet: [[header: { method: "GET", url: "/hallo" }, body: <empty>]] --> durchsucht den Code nach einem passenden Enpunkt, in dem sowohl Methode als auch Route übereinstimmen und stoppt die Durchsuchung des Codes in diesem Fall dann nach Zeile 12

import express from "express"; // const express = require("express");

const app = express();

app.patch("/hallo", (req, res) => {
  console.log("new request", req.method, req.url);
  res.send("Hallo Ganz Oben!"); // das gleiche wie write() + end()
});

app.get("/", (req, res) => {
  console.log("new request", req.method, req.url);
  res.send("it works :)");
});

// wenn es wie hier zwei gleiche Endpunkte im Code gibt, wird der Durchlauf gestoppt, nachdem der erste Endpunkt erreicht ist und dessen response wird dann ausgegeben
// dh dieser Endpunkt hier würde nie erreicht werden und ist obsolet
app.get("/hallo", (req, res) => {
  console.log("new request", req.method, req.url);
  res.send("Hallo zurück!");
});

const PORT = 3003;
app.listen(PORT, () => console.log("Server ready at", PORT));
