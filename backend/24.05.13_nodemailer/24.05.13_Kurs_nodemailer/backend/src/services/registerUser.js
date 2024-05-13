import { User } from "../models/User.js";
import { generateRandomSalt, hash } from "../utils/hash.js";
import { sendEmail } from "../utils/sendEmail.js";
import { generateRandomSixDigitCode } from "../utils/sixDigitCode.js";
import { userToView } from "./helpers.js";

// userInfo = { firstname, lastname, email, password }
export async function registerUser({ firstname, lastname, email, password }) {
  const foundUserWithEmail = await User.findOne({ email });
  if (foundUserWithEmail)
    throw new Error("User with this email already has an account");

  const passwordSalt = generateRandomSalt();
  const passwordHash = hash(`${password}${passwordSalt}`); // Klartext password mit salt hashen

  // HIER NEU: sixDigitCode wird erstellt:
  const sixDigitCode = generateRandomSixDigitCode();

  const user = await User.create({
    firstname,
    lastname,
    email,
    passwordHash, // hash(password + passwordSalt)
    passwordSalt, // salt
    // email verification stuff:
    isEmailVerified: false, // can be set to true via NEW /verifyEmail endpoint
    sixDigitCode,
  });

  // Aufruf der unten gesetzten Funktion, um die Verifizierungsmail an den User zu senden
  await sendEmailVerification(user);

  return userToView(user);
}

// Funktion, um die Email zur Verifizierung an den User zu senden, hier legen wir die Inhalte fest, die in der Mail stehen sollen
// es wird definiert, an wen die Mail geht, welchen Betreff sie hat, welchen Text sie hat
async function sendEmailVerification(user) {
  return sendEmail({
    to: user.email,
    subject: "Welcomne to Todo.io",
    text: `Hi ${user.firstname},
welcome to Todo.io 🎉!!!
Please enter the below six-digit-code verify your account to be able to login.
${user.sixDigitCode}
See you on the other side :)
- Ahmed from Todo.io
`,
  });
}
