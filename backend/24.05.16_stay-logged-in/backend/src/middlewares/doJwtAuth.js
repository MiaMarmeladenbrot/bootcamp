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
  if (!req.session.refreshToken) return _invalidAuth(res);
  const verifyToken = createTokenVerifier(req, res, next);
  verifyToken(req.session.refreshToken, "refresh");
}

// Funktion, um try/catch der Validierungen auszulagern
// nur wenn User authentifiziert ist bzw. refreshToken validiert ist, soll next() aufgerufen werden
function createTokenVerifier(req, res, next) {
  return function (token, expectType = "access") {
    try {
      const verifiedTokenClaims = jwt.verify(token, jwtSecret);
      if (verifiedTokenClaims.type !== expectType) return _invalidAuth(res);
      req.authenticatedUserId = verifiedTokenClaims.sub;
      next();
    } catch (err) {
      console.log(err);
      return _invalidAuth(res);
    }
  };
}
