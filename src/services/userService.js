const User = require("../models/user");

const saveNewUser = async (userDetails) => {
  try {
    const newUser = new User(userDetails);
    await newUser.save();

    return true;
  } catch (err) {
    console.log("\n===");
    console.log("error while saving new user: ", err);
    console.log("===\n");

    return false;
  }
};

module.exports = { saveNewUser };
