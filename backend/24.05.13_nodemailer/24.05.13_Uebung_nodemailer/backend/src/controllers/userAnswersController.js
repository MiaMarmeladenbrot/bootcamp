import { UserAnswersService } from "../services/index.js";

async function getShowAllUserAnswersByUserIdCtrl(req, res) {
  try {
    // die Id aus den Params soll genutzt werden, um die Antworten eines bestimmten Users anzeigen zu lassen
    // auch andere sollen die Antworten eines anderen Users sehen können, zB auf seiner Profilpage
    const userId = req.params.userId;

    // soll man nur auf seine eigenen Antwortern sehen können, müsste die id aus den params mit der id aus dem authenticated User übereinstimmen, bzw. man müsste den Endpunkt ändern, sodass gar kein param drin wäre
    // const authenticatedUserId = req.authenticatedUserId;

    const foundUserAnswers =
      await UserAnswersService.showAllUserAnswersByUserId(userId);
    res.json(foundUserAnswers);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      err,
      message: err.message || "Could not find the answers of this user.",
    });
  }
}

async function postCreateUserAnswerCtrl(req, res) {
  try {
    // userId und questionId sind Teil der Endpunkt-URL: .post("/api/v1/userAnswers", UserAnswersController.postCreateUserAnswerCtrl);
    // Alternativ könnten sie auch im req.body mitgegeben werden, dann wäre Endpunkt kürzer: post("/api/v1/userAnswers")
    //  --> bei Authentifizierung brauchen wir User-Id nicht mehr extra mitgeben, da wir die Id des Users aus der doJwdAuth.js bekommen
    // --> deshalb auch Endpunkt-Url geändert, sodass userId dort gar nicht mehr als Param auftaucht

    const userId = req.authenticatedUserId;
    const questionId = req.params.questionId;

    const newUserAnswer = {
      questionId,
      userId,
      answerContent: req.body.answerContent,
      answerFeedback: req.body.answerFeedback,
    };
    // const newUserAnswer = req.body;

    const addedUserAnswer = await UserAnswersService.addUserAnswer(
      newUserAnswer
    );
    res.json(addedUserAnswer);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not add new user answer" });
  }
}

async function deleteUserAnswerCtrl(req, res) {
  try {
    const userAnswerId = req.params.userAnswerId;
    const removedUserAnswer = await UserAnswersService.removeUserAnswer(
      userAnswerId
    );
    res.json(removedUserAnswer);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      err,
      message: err.message || "Could not delete user answer with this id.",
    });
  }
}

export const UserAnswersController = {
  getShowAllUserAnswersByUserIdCtrl,
  postCreateUserAnswerCtrl,
  deleteUserAnswerCtrl,
};
