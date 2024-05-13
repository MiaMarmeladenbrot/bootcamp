import { User } from "../models/User.js";

// Funktion, um sixDigitCodes des Users abzugleichen und bei Gleichheit den Status von isEmailVerified auf true zu setzen
// userId und sixDigitCode kommen aus verifyEmailInfo vom Ctrl bzw. von der Route bzw. vom Aufruf des Users der VerifyEmail-Page und der Eingabe seiner Daten
export async function verifyUserEmail({ userId, sixDigitCode }) {
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");

  const codeMatched = user.sixDigitCode === sixDigitCode;
  if (!codeMatched) throw new Error("Invalid six digit code, please try again");

  user.isEmailVerified = true;
  await user.save(); // .save() ist eine mongoose method, die wir statt update verwenden können

  // alternativ ginge es auch so:
  // await User.findByIdAndUpdate(userId, { $set: { isEmailVerified: true } });

  return { message: "You can now log in" }; // return; empty result (aber 200 OK wird im controller gesendet)
}
