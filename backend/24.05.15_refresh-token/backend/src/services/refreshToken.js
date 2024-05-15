import { User } from "../models/User.js";
import { createToken } from "../utils/createToken.js";

// ! accesToken refreshen mit refreshToken
// refreshToken wird zusammen mit der request an Endpunkt .post("/refresh-token" gesendet
// in der doJwtAuth wird überprüft, ob der token-Typ wirklich refresh ist
// falls ja, wird diese Funktion aufgerufen, mit der wir einen neuen accessToken erstellen und zurücksenden

// refreshToken -> refreshToken() -> newAccessToken
export async function refreshToken(authenticatedUserId) {
  const user = await User.findById(authenticatedUserId);
  if (!user) throw new Error("User not found");

  if (!user.isEmailVerified) throw new Error("User is not verified");
  //   if (user.isBlocked) throw new Error("User blocked");

  const newAccessToken = createToken(user, "access");
  return { newAccessToken };
}
