import { User } from "../models/users.js";

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
