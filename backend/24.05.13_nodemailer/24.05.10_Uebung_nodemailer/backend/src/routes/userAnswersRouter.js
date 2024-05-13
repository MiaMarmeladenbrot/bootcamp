// ✅
import express from "express";
import { UserAnswersController } from "../controllers/userAnswersController.js";
import { doJwdAuth } from "../middlewares/doJwdAuth.js";

export const userAnswersRouter = express
  .Router()
  .get(
    "/api/v1/users/:userId/userAnswers", // userId bleibt in URL, damit sich jedeR die Antworten aller anderen anschauen kann
    doJwdAuth,
    UserAnswersController.getShowAllUserAnswersByUserIdCtrl
  )
  .post(
    "/api/v1/users/userAnswers/:questionId",
    doJwdAuth,
    UserAnswersController.postCreateUserAnswerCtrl
  )
  .delete(
    "/api/v1/userAnswers/:userAnswerId",
    doJwdAuth,
    UserAnswersController.deleteUserAnswerCtrl
  );
