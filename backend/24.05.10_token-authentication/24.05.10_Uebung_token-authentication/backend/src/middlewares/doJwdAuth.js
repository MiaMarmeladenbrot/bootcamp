import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// hiermit überprüfen wir bei jeder Anfrage des Users seinen accessToken, also ob er überhaupt berechtigt ist, auf die angefragten Daten zuzugreifen
// der Bearer-Token des Users wird also auf Aktualität/Validität geprüft

// geheimen Schlüssel aus .env-Datei speichern für token signature
dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

export async function doJwdAuth(req, res, next) {
  const _invalidAuth = (message) =>
    res.status(401).json({ message: message || "Invalid auth" });

  // falls die request keinerlei Authorisierungsinfos enthält, direkt invalid zurücksenden
  //    req.headers.authorization ====> "Bearer eyJhbGciOiJIUzI1Ni..."
  if (!req.headers.authorization) return _invalidAuth();

  // Authentifizierungsinfos werden mit split in einem array mit 2 Elementen gespeichert
  // das destrukturieren wir, damit wir die Inhalte in zwei Einzelteilen haben und diese überprüfen/abgleichen können
  const [authType, tokenString] = req.headers.authorization.split(" ");
  if (authType !== "Bearer" || !tokenString) return _invalidAuth();

  // dann wollen wir den Token mithilfe von jwt verifizieren, dazu brauchen wir verify() und übergeben dort den extrahierten Token-String sowie den Schlüssel aus der .env-Datei
  // da dabei auch ein Fehler auftreten kann, nutzen wir try/catch, um den Fehler zu catchen und rückmelden zu können
  try {
    const verifiedClaims = jwt.verify(tokenString, jwtSecret);
    // console.log(verifiedClaims);
    // {
    //     sub: '66430cd7212f413eb9449ccd',
    //     type: 'access',
    //     iat: 1715670776,
    //     exp: 1715674376
    //   }
    // damit wir später mit der User-Id weiterarbeiten können, speichern wir sie uns hier schon ab und geben sie mit next() an den Controller weiter
    req.authenticatedUserId = verifiedClaims.sub;
    next();
  } catch (err) {
    console.log(err);
    return _invalidAuth();
  }
}
