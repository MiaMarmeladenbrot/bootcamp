import { User } from "../models/User.js";
import { createToken } from "../utils/createToken.js";
import { hash } from "../utils/hash.js";
import { userToView } from "./helpers.js";

export async function loginUser({ email, password }) {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid login");

  // HIER NEU: falls der User seine Mailadresse noch nicht verifiziert hat, soll er sich nicht einloggen dürfen und die Benachrichtung erhalten, dass er noch nicht verifiziert wurde
  if (!user.isEmailVerified)
    throw new Error("Email not verified, login aborted");

  const passwordHash = hash(`${password}${user.passwordSalt}`);
  const correctPassword = passwordHash === user.passwordHash;
  if (!correctPassword) throw new Error("Invalid login");

  const accessToken = createToken(user, "access");

  return {
    user: userToView(user),
    tokens: { accessToken },
  };
}
