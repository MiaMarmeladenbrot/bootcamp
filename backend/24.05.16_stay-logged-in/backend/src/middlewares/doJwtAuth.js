import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

// Funktion für die invalid-Authorization-message:
const _invalidAuth = (res, message) =>
  res.status(401).json({ message: message || "Invalid auth" });

// Funktion, um den User zu authentifizieren:
export async function doJwtAuth(req, res, next) {
  if (!req.headers.authorization) return _invalidAuth(res);

  // req.headers.authorization ====> "Bearer eyJhbGciOiJIUzI1Ni..."
  const [authType, tokenString] = req.headers.authorization.split(" ");
  if (authType !== "Bearer" || !tokenString) return _invalidAuth(res);

  const verifyToken = createTokenVerifier(req, res, next);
  verifyToken(tokenString, "access");
}

// Funktion, um den refreshToken des users zu validieren:
// damit können wir dann einen neuen accessToken generieren und an den Client zurücksenden
export async function validateRefreshTokenInCookieSession(req, res, next) {
  // falls es keine cookie session mit refreshToken gibt, invalide Authentifizierung
  if (!req.session.refreshToken) return _invalidAuth(res);

  // Funktionsaufruf mit req, res und next, damit dort dann der jeweilige Token verifiziert werden kann
  const verifyToken = createTokenVerifier(req, res, next);
  // zusätzlich zum Funktionsaufruf übergeben wir an die Funktion innerhalb von createVerifyToken den eigentlichen Token und den jeweiligen Token-Typ
  verifyToken(req.session.refreshToken, "refresh");
}

// Funktion, um try/catch der Validierungen auszulagern
// Funktion in der Funktion, damit wir auch req, res, next übergeben können
// nur wenn User authentifiziert ist bzw. refreshToken validiert ist, soll next() aufgerufen werden
function createTokenVerifier(req, res, next) {
  return function (token, expectType = "access") {
    try {
      // erhalten über Parameter den Tokenstring sowie das Secret aus dotenv:
      const verifiedTokenClaims = jwt.verify(token, jwtSecret);
      // falls der Typ aus den verified-Claoims nicht der gleiche ist wie der erwartete Type, invalide Auth:
      if (verifiedTokenClaims.type !== expectType) return _invalidAuth(res);
      // falls alles passt, sub aus den Claims als userId speichern für spätere Verarbeitung:
      req.authenticatedUserId = verifiedTokenClaims.sub;
      // dann zur nächsten Funktion weitergehen:
      next();
    } catch (err) {
      console.log(err);
      return _invalidAuth(res);
    }
  };
}

// ! Verifizierungs-Funktionen ohne Zusammenfassung in externer Funktion
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// dotenv.config();

// const secret = process.env.JWT_SECRET;

// // * Validierung Access-Token
// export async function doJwtAuth(req, res, next) {
//   const bearerToken = req.headers.authorization;
//   if (!bearerToken) return res.status(401).json({ message: "unauthorized" });
//   // - ⬇ deconstruction ⬇
//   const [authType, tokenString] = bearerToken.split(" ");

//   if (authType !== "Bearer" || !tokenString) return res.status(401).json({ message: "unauthorized" });

//   try {
//     const verifiedClaims = jwt.verify(tokenString, secret);
//     // - ⬇ access ⬇
//     if (verifiedClaims.type !== "access") return res.status(401).json({ message: "unauthorized" });

//     req.authenticatedUserId = verifiedClaims.sub;

//     next();
//   } catch (err) {
//     console.log(err);
//     return res.status(401).json({ message: "unauthorized" });
//   }
// }
// // * Validierung Refresh-Token

// export async function validateRefreshToken(req, res, next) {
//   if (!req.session.refreshToken) return res.status(401).json({ message: "unauthorized" });
//   const bearerToken = req.headers.authorization;
//   if (!bearerToken) return res.status(401).json({ message: "unauthorized" });
//   // - ⬇ deconstruction ⬇
//   const [authType, tokenString] = bearerToken.split(" ");

//   if (authType !== "Bearer" || !tokenString) return res.status(401).json({ message: "unauthorized" });

//   try {
//     const verifiedClaims = jwt.verify(tokenString, secret);
//     // -  ⬇ refresh ⬇
//     if (verifiedClaims.type !== "refresh") return res.status(401).json({ message: "unauthorized" });
//     req.authenticatedUserId = verifiedClaims.sub;
//     next();
//   } catch (err) {
//     console.log(err);
//     return res.status(401).json({ message: "unauthorized" });
//   }
// }
