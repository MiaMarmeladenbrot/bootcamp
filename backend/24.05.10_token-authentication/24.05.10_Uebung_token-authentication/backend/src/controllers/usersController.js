import { UsersService } from "../services/index.js";

async function postCreateUserCtrl(req, res) {
  try {
    const newUser = req.body;
    const addedUser = await UsersService.addUser(newUser);
    res.json(addedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: err.message || "Could not add user" });
  }
}

async function postLoginUserCtrl(req, res) {
  try {
    const userInfo = {
      email: req.body.email,
      password: req.body.password,
    };
    const loggedUser = await UsersService.loginUser(userInfo);
    res.json({ loggedUser });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not login user." });
  }
}

async function patchUpdateUserCtrl(req, res) {
  try {
    // const userId = req.params.userId; // keine userId mehr in der URL, läuft alles über die Authentifizierung
    const userId = req.authenticatedUserId;

    const userUpdateInfos = req.body;

    const editedUser = await UsersService.editUser(userId, userUpdateInfos);
    res.json(editedUser);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not update this user." });
  }
}

async function deleteUserAndUserAnswersCtrl(req, res) {
  try {
    // const userId = req.params.userId; // keine userId mehr in der URL, läuft alles über die Authentifizierung
    const userId = req.authenticatedUserId;
    const deletedUserAndUserAnswers =
      await UsersService.removeUserAndUserAnswers(userId);
    res.json(deletedUserAndUserAnswers);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      err,
      message: err.message || "Could not delete user with this id",
    });
  }
}
export const UsersController = {
  postCreateUserCtrl,
  patchUpdateUserCtrl,
  deleteUserAndUserAnswersCtrl,
  postLoginUserCtrl,
};
