import express from "express";
import { UserController } from "../controllers/userController.js";
import {
  doJwtAuth,
  validateRefreshTokenInCookieSession,
} from "../middlewares/doJwtAuth.js";

export const usersRouter = express
  .Router()
  .post("/register", UserController.postRegisterUserCtrl)
  .post("/verifyEmail", UserController.postVerifyUserEmailCtrl)
  .post("/login", UserController.postLoginUserCtrl)

  // ! Refresh Token Endpunkt
  // hier wird Authentifizieruung durchgeführt, dann wird der Controller aufgerufen, in dem der token-Typ überprüft wird und der refresh-Service aufgerufen wird
  .post(
    "/refresh-token",
    // zuerst wird der User authentifiziert
    doJwtAuth,
    // dann wird der Refresh Token validiert
    validateRefreshTokenInCookieSession,
    // erst wenn beide Validierungen true sind, wird der Controller aufgerufen
    UserController.postRefreshToken
  )
  .delete("/:userId", doJwtAuth, UserController.deleteUserCtrl);
