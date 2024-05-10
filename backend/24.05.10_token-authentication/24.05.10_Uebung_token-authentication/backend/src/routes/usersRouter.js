import express from "express";
import { UsersController } from "../controllers/usersController.js";
import { doJwdAuth } from "../middlewares/doJwdAuth.js";

export const usersRouter = express
  .Router()
  .post("/api/v1/users", UsersController.postCreateUserCtrl)
  .post("/api/v1/users/login", UsersController.postLoginUserCtrl)
  .patch(
    "/api/v1/users/updateUser", // keine userId mehr in der URL, läuft alles über die Authentifizierung
    doJwdAuth,
    UsersController.patchUpdateUserCtrl
  )
  .delete(
    "/api/v1/users/deleteUser", // keine userId mehr in der URL, läuft alles über die Authentifizierung
    doJwdAuth,
    UsersController.deleteUserAndUserAnswersCtrl
  );
