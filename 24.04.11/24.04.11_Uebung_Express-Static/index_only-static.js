// express importieren
import express from "express";

// Server mit express() erstellen
const app = express();

// logging middleware
// bevor irgendetwas anderes passiert, einmal alle requests in der Konsole loggen lassen und dann weitergehen zum nächsten Teil des Codes
app.use((req, _, next) => {
  console.log("new request: ", req.method, req.url);
  next();
});

// static file middleware
// static file server, die die Dateien aus public-Ordner veröffentlicht
app.use(express.static("public"));

// Port und Listener erstellen
const PORT = 3003;
app.listen(PORT, () => console.log("Server ready at", PORT));
