const userService = require("../services/userService");
const helper = require("../utils/helper");

const hanldeUserRegistration = async (req, res) => {
  try {
    const result = await userService.saveNewUser(req.body);

    if (result.savedSuccessfully) {
      return res.status(201).json({ status: 201, message: result.message });
    } else
      return res.status(400).json({
        status: 400,
        message: result.message,
      });
  } catch (err) {
    console.log("\n---");
    console.log("Error while saving new user. Error: ", err);
    console.log("---\n");

    res.status(500).json({ status: 500, message: "Server error." });
  }
};

const handleUserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.getUserByEmail(email);
    if (user) {
      const { _id: id, firstName, lastName, password: userPassword } = user;
      const isCorrectPassword = await helper.checkPassword(
        userPassword,
        password
      );
      if (isCorrectPassword) {
        const token = helper.getToken({ id, firstName, lastName });
        res.status(200).json({ token, status: 200 });
      } else
        res
          .status(400)
          .json({ message: "password is incorrect...", status: 400 });
    } else
      res
        .status(400)
        .json({ message: "Email is not registered...", status: 400 });
  } catch (err) {
    console.log("\n---");
    console.log("Error on user login...");
    console.log("error: ", err);
    console.log("---\n");

    res.status(500).json({ message: "Something went wrong...", status: 500 });
  }
};

module.exports = {
  hanldeUserRegistration,
  handleUserLogin,
};
