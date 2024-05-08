// ! Basic Authorization Middleware
// middleware function hat req, res, next
// im req.headers werden bei jeder request des users die authorization infos des Users mitgeschickt
// middleware prüft diese UND setzt den authorized user in die req
// erst dann kann mithilfe des festgesetzten Users im Controller die eigentliche Funktion folgen

import { User } from "../models/User.js";
import { hash } from "../utils/hash.js";

export async function doBasicAuth(req, res, next) {
  // bei egal welchem fehler, soll Antwort immer unauthorized sein
  // wir wollen keine konkreten Hinweise geben, was Fehler ist, damit wir möglichen Hackern keine Zusatzinfos liefern
  // Funktion, die wir bei jeder Fehlerabfrage als return aufrufen
  const _invalidAuth = (
    message // _variable bedeutet, dass es eine private Variable ist
  ) => res.status(401).json({ message: message || "Invalid auth" }); // 401 Status Unauthorized

  // im req.headers stehen die Login-Daten
  // req.headers.authorization -->  'Basic YWhtZWRAc3VwZXItY29kZS5kZTpoYWxsbzEyMw=='
  if (!req.headers.authorization) return _invalidAuth("No authorization");

  // den String müssen wir splitten, sodass wir Basic und Base64-String getrennt voneinander kriegen
  // ["Basic", "YWhtZWRAc3VwZXItY29kZS5kZTpoYWxsbzEyMw=="]
  const [authType, authInfoBase64] = req.headers.authorization.split(" ");

  // falls eins von beidem nicht vorhanden sein sollte, invalid Fehler ausgeben
  if (authType !== "Basic") return _invalidAuth();
  if (!authInfoBase64) return _invalidAuth();

  // den abgetrennten Base64-String wollen wir jetzt noch umwandeln in normalen UTF-8-Format:
  // authInfo = "ahmed@super-code.de:hallo123"
  const authInfoClearText = Buffer.from(authInfoBase64, "base64").toString(
    "utf-8"
  );
  // und dann soll der String gesplittet werden, damit wir email und passwort separat haben
  const [email, password] = authInfoClearText.split(":");
  // falls eins von beidem nicht vorhanden sein sollte, invalid Fehler ausgeben
  if (!email || !password) return _invalidAuth();

  //! Hier beginnt erst der eigentliche login process:
  // finde mithilfe der Email den passenden User
  const user = await User.findOne({ email });
  // falls keiner vorhanden sein sollte, invalid Fehler ausgeben
  if (!user) return _invalidAuth("Incorrect Email"); // falsche email!

  // Möglichkeit, um 3 Fehlversuche zu zählen:
  //   if (user.failedLoginTries >= 3)
  // return res.json({
  //   message:
  //     "3 failed login tries - your account was locked, please contact the admin via admin@quizzio.com.",
  // });

  // dann müssen wir das password zusammen mit dem salt des gefundenen Users hashen, um den Passwortabgleich durchzuführen:
  const passwordHash = hash(`${password}${user.passwordSalt}`);
  const correctPassword = passwordHash === user.passwordHash;
  // falls die gehashten Passwörter nicht übereinstimmen, invalid Fehler ausgeben
  if (!correctPassword) {
    // await User.updateOne(
    //   { _id: user._id },
    //   { $set: { failedLoginTries: user.failedLoginTries + 1 } } // counter, um failed logins hochzuzählen bei jeder falschen Passworteingabe
    // );
    return _invalidAuth("Incorrect Password"); // korrekte email, aber falsches passwort!
  }

  // await User.updateOne({ _id: user._id }, { $set: { failedLoginTries: 0 } }); // reset failedLoginTries

  // wenn das alles geklappt hat, speichern wir den User in einer Variable namens req.authenticatedUser, die wir mit next() an den Controller weitergeben, damit dort mit dem authentifizierten User weitergearbeitet werden kann
  req.authenticatedUser = user; // user ZWISCHENSPEICHERN für die Weiterverabeitung durch die Controller!

  next(); // valid auth, go to controller....!
}
