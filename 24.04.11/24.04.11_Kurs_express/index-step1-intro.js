// ! Intro: Import Express

import express from "express"; // const express = require("express");

// Variable für den Server festlegen, Konvention ist Benennung als “app”
// analog zu vorher const server = http.createServer((request, response) => { /* Request handling happens here */})
const app = express();

// Request Handling - jetzt für jeden Endpoint separat möglich!
app.get("/", (request, response) => {
  console.log("new request", request.method, request.url);
  response.write("it works :)");
  response.end();
});

// Port deklarieren und Listener erstellen
const PORT = 3003;
app.listen(PORT, () => console.log("Server ready at", PORT));
