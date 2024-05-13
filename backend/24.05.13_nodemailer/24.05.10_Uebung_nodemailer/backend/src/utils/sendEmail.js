import { google } from "googleapis"; // oauth and credentials from google apis
import nodemailer from "nodemailer"; // email senden via nodemailer
import dotenv from "dotenv";

dotenv.config();

// aus der .env-Datei die jeweiligen geheimen Daten holen, um Google Apis tatsächlich nutzen zu können:
const GMAIL_ADRESS = process.env.GMAIL_ADRESS; // meine gmail-adresse
const CLIENT_ID = process.env.GMAIL_CLIENT_ID; // meine client id (zu finden unter google apis)
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET; // mein client schlüssel (zu finden unter google apis)
const REDIRECT_URI = process.env.GMAIL_REDIRECT_URI; // https://developers.google.com/oauthplayground
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN; // OAUTH2 Refresh token

// oAuthClient erstellen mit credentials via methode von google apis
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
// refresh token aufrufen (1 Monat gültig):
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// Funktion, um die Email tatsächlich auch zuversenden
// die braucht 3 Infos: Empfänger, Betreff, Textinhalt
// bekommt sie beim Auruf in registerUser.js mit dem dort gefundenen user
export async function sendEmail({ to, subject, text }) {
  try {
    // Step 0. get access token for sending email
    // get access Token based on oAuth2Clients credentials and refresh_token
    const accessToken = await oAuth2Client.getAccessToken(); // 1h gültig, wir verwenden ihn aber sowieso nur 1 mal

    // 1. email transporter erstellen mit nodemailer
    // darin sind alle für den transport der email wichtigen Informationen enthalten
    // # stattdessen das hier: https://stackoverflow.com/questions/59188483/error-invalid-login-535-5-7-8-username-and-password-not-accepted
    // 1. Open this link https://myaccount.google.com/security
    // 2. Enable 2 factor authentication
    // 3. Click on App passwords just below the 2 factor authentication // Update after July 2023-> There is a change in the 3rd step, i.e. App passwords can be found at the bottom of the page of the Two-Factor Authentication screen.
    // 4. From Select App options select Other and write your app name it could be any name like mycustomapp
    // 5. It will generate you the password copy the password from the popup and use the following code.
    // 6. Use that copied password in the auth password section of the code
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   host: 'smtp.gmail.com',
    //   port: 465,
    //   secure: true,
    //   auth: {
    //    user: 'your gmail here',
    //    pass: 'your app generated password here',
    //   },
    //  });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: GMAIL_ADRESS,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken, // ändert sich bei jedem Versenden einer E-Mail, siehe oben
      },
    });

    // 2. send email
    // hier vergeben wir die Inhalte der zu versendenden Email: Absender, Empfänger, Betreff, Textinhalt sowie Textinhalt als HTML
    const sentMessageInfo = await transporter.sendMail({
      from: "Ahmed from Todo.io",
      to, // geht auch mehr als eine person "email1@gmail.com, zwei@gmail.com, ..."
      subject,
      text,
      html: text.replaceAll("\n", "<br/>"),
    });

    // 3. success?
    // wenn alles erfolgreich war, wollen wir das auch wissen
    // wir prüfen also, ob in der von uns gesendeten Mail, die wir als sentMessageInfo speicherten, die Empfänger-Adresse enthalten ist
    const success = sentMessageInfo.accepted.includes(to); // wurde es and die "to"-Email verschickt?
    return success;

    // falls irgendetwas des Vorherigen schief ging, catchen wir den error und returnen false:
  } catch (error) {
    console.log(error);
    return false;
  }
}
