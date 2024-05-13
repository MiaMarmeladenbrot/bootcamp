import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// um einen Token zu erstellen, müssen wir wissen, für welchen User das Token sein soll und welcher Typ es sein soll (access, refresh, etc.)
// den User übergeben wir beim Funktionsaufruf, der Typ ist in diesem Fall immer access, deshalb können wir das gleich so festschreiben
export function createToken(user, tokenType = "access") {
  const jwtSecret = process.env.JWT_SECRET;

  // unser Payload besteht aus folgenden Teilen:
  //    - sub
  //    - type
  //    - iat
  //    - exp

  // für iat legen wir eine Konstante in Sekunden fest:
  const issuedAtSeconds = Math.ceil(Date.now() / 1000);

  // alle Bestandteile werden in eigener Konstante gespeichert
  const tokenPayload = {
    sub: user._id,
    type: tokenType,
    iat: issuedAtSeconds,
    // exp: issuedAtSeconds + 10 * 60 // manuelle Schreibweise, jwt hat dafür aber eingebaute Funktionalität
  };

  // mit jwt.sign(), dem Payload und dem Schlüssel erstellen wir dann ein neues Token für diesen User, das nach einer Stunde abläuft:
  return jwt.sign(tokenPayload, jwtSecret, { expiresIn: "1h" });
}
