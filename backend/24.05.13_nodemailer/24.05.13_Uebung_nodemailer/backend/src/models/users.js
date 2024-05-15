import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    passwordHash: { type: String, required: true, trim: true }, // hash of password (not clear-text!)
    passwordSalt: { type: String, required: true, trim: true },
    failedLoginTries: { type: Number, default: 0 },
    isEmailVerified: { type: Boolean, default: false },
    sixDigitCode: {
      type: String,
      required: true,
      // alternativ kann die Funktion, um den six digit code zu generieren, auch direkt im Model aufgerufen werden über mongoose default function:
      // default: () => {
      //   return generateRandomSixDigitCode();
      // },
    },
  },
  { collection: "users", timestamps: false }
);

export const User = mongoose.model("User", usersSchema);
