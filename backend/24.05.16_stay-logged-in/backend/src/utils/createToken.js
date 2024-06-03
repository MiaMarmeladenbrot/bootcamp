import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

// default-params: vergeben so einen default-Wert für den Parameter an letzter Stelle in den Klammern, der hier entweder der beim Funktionsaufruf übergebene Wert ist oder in allen anderen Fällen autoamtisch "access"
export function createToken(user, tokenType = "access") {
  const issuedAtMilliseconds = Math.ceil(Date.now() / 1000);
  const tokenPayload = {
    sub: user._id,
    type: tokenType,
    iat: issuedAtMilliseconds,
    // exp: issuedAtSeconds + 1 * 60 * 60 // 1h (manuell)
  };

  // ! Refresh Token
  // da wir ab jetzt mit mind. 2 token-Typen arbeiten, müssen wir eine Abfrage starten, welcher Typ denn überhaupt verwendet wird
  // je nach Typ gibt es unterschiedliche Expiration-Times
  // 1. Variante: // const expiresIn = tokenType === "refresh" ? "2w" : "10min";
  // 2. Variante - gut, falls noch weitere Typen dazu kommen:
  const expiresIn =
    {
      access: "10min",
      refresh: "2w",
      // verifyEmail: "1h" ...
    }[tokenType] || "10min"; // bracket notation, mit der wir dynamisch auf das Feld im Objekt zugreifen können: je nachdem welcher Value hinter tokenType aus Parameter-Klammern liegt, wird der entsprechende Key ausgewählt und der darin gespeicherte Value verwendet

  const token = jwt.sign(tokenPayload, jwtSecret, { expiresIn });
  return token;
}
