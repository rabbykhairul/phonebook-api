const userService = require("../services/userService");

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

module.exports = {
  hanldeUserRegistration,
};
