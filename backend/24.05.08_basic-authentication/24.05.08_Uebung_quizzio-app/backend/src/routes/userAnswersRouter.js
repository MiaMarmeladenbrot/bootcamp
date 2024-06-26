import express from "express";
import { UserAnswersController } from "../controllers/userAnswersController.js";
import { doBasicAuth } from "../middlewares/doBasicAuth.js";

export const userAnswersRouter = express
  .Router()
  .get(
    "/api/v1/users/:userId/userAnswers",
    doBasicAuth,
    UserAnswersController.getShowAllUserAnswersByUserIdCtrl
  )
  // Alternativer Endpunkt, dann userId und questionId im req.body mitgeben: .post("/api/v1/userAnswers", UserAnswersController.postCreateUserAnswerCtrl);
  .post(
    "/api/v1/users/:userId/userAnswers/:questionId",
    doBasicAuth,
    UserAnswersController.postCreateUserAnswerCtrl
  )
  .delete(
    "/api/v1/userAnswers/:userAnswerId",
    UserAnswersController.deleteUserAnswerCtrl
  );
