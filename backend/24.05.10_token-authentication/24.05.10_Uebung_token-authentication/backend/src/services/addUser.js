import { User } from "../models/users.js";
import { generateRandomSalt, hash } from "../utils/hash.js";
import { userToView } from "./helpers.js";

export async function addUser({ name, surname, email, password }) {
  // abgleichen, ob der User bereits existiert
  const foundUser = await User.findOne({ email });
  if (foundUser) throw new Error("User mit dieser Email existiert bereits");

  // salt an den User vergeben
  const passwordSalt = generateRandomSalt();
  // vom User angegebenes Passwort zsm mit salt hashen
  const passwordHash = hash(`${password}${passwordSalt}`);

  const user = await User.create({
    name,
    surname,
    email,
    passwordHash,
    passwordSalt,
  });

  // await sendVerificationEmail(user)

  // const userToView = {
  //   name: user.name,
  //   surname: user.surname,
  //   email: user.email,
  // };
  // --> in Funktion ausgelagert, da wir das jetzt auch in loginUser.js brauchen

  return userToView(user);
}
