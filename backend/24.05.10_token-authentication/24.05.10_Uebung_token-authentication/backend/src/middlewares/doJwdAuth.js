import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// hiermit überprüfen wir bei jeder Anfrage des Users, ob er überhaupt berechtigt ist auf die angefragten Daten zuzugreifen

// geheimen Schlüssel aus .env-Datei speichern für signature
dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

export async function doJwdAuth(req, res, next) {
  const _invalidAuth = (message) =>
    res.status(401).json({ message: message || "Invalid auth" });

  // falls die request keinerlei Authorisierungsinfos enthölt, direkt invalid zurücksenden
  if (!req.headers.authorization) return _invalidAuth();

  // Authentifizierungsinfos erst mal destrukturieren, damit wir den Token einzeln haben und diesen abgleichen können
  const [authType, tokenString] = req.headers.authorization.split(" ");
  if (authType !== "Bearer" || !tokenString) return _invalidAuth();

  // dann wollen wir den Token mithilfe von jwt verifizieren, dazu brauchen wir verify() und übergeben dort den extrahierten Token-String sowie den Schlüssel aus der .envDatei
  // da dabei auch ein Fehler auftreten kann, nutzen wir try/catch, um den Fehler zu catchen und rückmelden zu können
  try {
    const verifiedClaims = jwt.verify(tokenString, jwtSecret);
    // damit wir später mit der User-Id weiterarbeiten können, speichern wir sie uns hier schon ab und geben sie mit next() an den Controller weiter
    req.authenticatedUserId = verifiedClaims.sub;
    next();
  } catch (err) {
    console.log(err);
    return _invalidAuth();
  }
}
