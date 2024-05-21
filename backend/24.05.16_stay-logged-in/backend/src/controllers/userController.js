import { UserService } from "../services/index.js";

async function postRegisterUserCtrl(req, res) {
  try {
    const userInfo = req.body;
    const result = await UserService.registerUser(userInfo);
    res.status(201).json({ result }); // 201 Status = "Created"
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not register user" });
  }
}

async function postLoginUserCtrl(req, res) {
  try {
    const userInfo = {
      email: req.body.email,
      password: req.body.password,
    };
    const result = await UserService.loginUser(userInfo);

    // ! Silent Refresh
    // der RefreshToken wird nicht länger nur mit der response mitgesendet
    // sondern auch mit cookie-session in die http only cookies
    // so ist der RefreshToken am sichersten und geschützten
    // ist solange existent, bis er abläuft oder wir ihn löschen (logout)
    if (result.tokens.refreshToken) {
      req.session.refreshToken = result.tokens.refreshToken;
    }
    res.json({ result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: err.message || "Could not register" });
  }
}

async function postVerifyUserEmailCtrl(req, res) {
  try {
    const verifyEmailInfo = {
      userId: req.body.userId,
      sixDigitCode: req.body.sixDigitCode,
    };
    const result = await UserService.verifyUserEmail(verifyEmailInfo);
    res.json({ result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: err.message || "Could not register" });
  }
}

// ! AccessToken refreshen
// doJwtAuth und validateRefreshTokenInCookieSession werden vorher im Router aufgerufen
async function postRefreshToken(req, res) {
  try {
    // rufen den refresh-Service auf mit der authentifizierten User-Id
    // dort erstellen wir einen neuen accessToken und senden ihn zurück an den Client
    const result = await UserService.refreshToken(req.authenticatedUserId);
    res.json({ result });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not refresh token" });
  }
}

async function deleteUserCtrl(req, res) {
  try {
    const userId = req.params.userId;
    const result = await UserService.deleteUser(userId);
    res.json({ result });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not delete user" });
  }
}

// ! Logout => refreshToken auf 0 setzen
async function logoutUser(req, res) {
  req.session.refreshToken = null;
  res.status(200).json({ result: { message: "You are now logged out" } });
}

export const UserController = {
  postRegisterUserCtrl,
  postLoginUserCtrl,
  postVerifyUserEmailCtrl,
  postRefreshToken,
  deleteUserCtrl,
  logoutUser,
};
