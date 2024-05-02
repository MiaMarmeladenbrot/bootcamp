// ! Middleware als logging middleware
// middleware = request handler, der aber nach seiner Verarbeitung weitergibt an den nächsten Teil vom Code (next())
// middleware wird definiert durch die mögliche Verwendung von next()
// middleware kann überall im Code stehen, aber da sie nur zum nächsten Schritt weiterläuft, werden vorhergehende Funktionen dann nicht beachtet
// und wenn eine vorherige Funktion bereits matcht und ausgeführt wird, gelangt der Durchlauf gar nicht bis zur middleware
// middleware in der Mitte des Codes kann sinnvoll sein, wenn du in der Mitte des Codes einen Zwischenschritt einbauen musst, bevor die folgenden Snippets ausgeführt werden
// im Folgenden Beispiel bauen wir die Middleware gleich zu Beginn ein, um alle Requests einmal zu loggen, bevor sie durch den restlichen Code weitergereicht und geprüft werden

import express from "express";

const app = express();

// app.use() => prüft alle Methoden und URLs
// also laufen jetzt alle requests durch diese middleware und werden einmal geloggt, bevor sie mit next() an den nächsten Codesnippet weitergegeben werden
app.use((req, res, next) => {
  console.log("new request", req.method, req.url);
  // next() zeigt uns hier an, dass middleware verwendet wird
  next();
});

app.patch("/hallo", (req, res) => {
  res.send("Hallo Ganz Oben!");
});

app.get("/", (req, res) => {
  res.send("it works :)");
});

const PORT = 3003;
app.listen(PORT, () => console.log("Server ready at", PORT));
