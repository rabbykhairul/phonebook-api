const userService = require("../services/userService");

const hanldeUserRegistration = async (req, res) => {
  const savedSuccessfully = await userService.saveNewUser(req.body);

  if (savedSuccessfully) {
    return res.json({ status: 201, message: "User created successfully" });
  } else
    return res.json({
      status: 500,
      message: "Failed to create user. It's on our side.",
    });
};

module.exports = {
  hanldeUserRegistration,
};
