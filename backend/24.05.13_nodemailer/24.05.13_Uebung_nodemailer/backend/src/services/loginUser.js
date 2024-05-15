import { User } from "../models/users.js";
import { createToken } from "../utils/createToken.js";
import { hash } from "../utils/hash.js";
import { userToView } from "./helpers.js";

// im Backend gibt es keinen Login im eigentlichen Sinne
// bei jeder Anfrage des Clients wird geprüft, ob er überhaupt auf die Daten zugreifen darf
// es wird kein login state o# gespeichert
// aber um dem User im Frontend einmalig rückzumelden, dass seine Anmeldung erfolgreich war, gibt es eine Post-Anfrage, mit der wir im Backend erstmals prüfen, ob der User angelegt ist und Berechitungen hat
// im Frontend kann diese Rückmeldung gespeichert werden für weitere Anfragen des Users
// so erscheint er für sich selbst als eingeloggt
// im Backend nutzen wir das bei der ersten Login-Anfrage erstellte Token sowie die doJwdAuth.js für alle weitern Anfragen des Users, um seinen Status immer wieder neu zu prüfen

export async function loginUser({ email, password }) {
  // erst mal prüfen, ob der User überhaupt existiert:
  const user = await User.findOne({ email });
  if (!user) throw new Error("User doesn't exist");

  // HIER NEU: falls der User seine Mailadresse noch nicht verifiziert hat, soll er sich nicht einloggen dürfen und die Benachrichtung erhalten, dass er noch nicht verifiziert wurde
  if (!user.isEmailVerified)
    throw new Error("Email not verified, login aborted");

  // dann abgleichen, ob das Passwort korrekt ist für diesen User:
  const passwordHash = hash(`${password}${user.passwordSalt}`);
  const correctPassword = passwordHash === user.passwordHash;
  if (!correctPassword) throw new Error("Wrong Password");

  // dann einen Token für den User erstellen, den wir für all seine weiteren Anfragen anstelle von email/passwort verwenden werden
  // Token-Erstellung in eigene Funktion auslagern im utils-Ordner
  const accessToken = createToken(user);

  // Rückmeldung nicht der gesamte User, sondern nur die Daten ohne passwortHash + salt sowie die generierten Tokens
  return { user: userToView(user), tokens: { accessToken } };
}
