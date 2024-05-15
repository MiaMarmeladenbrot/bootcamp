import express from "express";
import { UserController } from "../controllers/userController.js";
import { doJwtAuth } from "../middlewares/doJwtAuth.js";

export const usersRouter = express
  .Router()
  .post("/login", UserController.postLoginUserCtrl)
  .post("/register", UserController.postRegisterUserCtrl)
  .post("/verifyEmail", UserController.postVerifyUserEmailCtrl)
  // ! Refresh Token Endpunkt
  // hier wird Authentifizieruung durchgeführt, dann wird der Controller aufgerufen, in dem der token-Typ überprüft wird und der refresh-Service aufgerufen wird
  .post("/refresh-token", doJwtAuth, UserController.postRefreshToken)
  .delete("/:userId", doJwtAuth, UserController.deleteUserCtrl);
