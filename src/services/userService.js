const User = require("../models/user");

const saveNewUser = async (userDetails) => {
  try {
    const IsEmailAlreadyInUse = await doesUserExistsByEmail(userDetails.email);
    if (IsEmailAlreadyInUse) {
      console.log("\n----");
      console.log(
        `Aborting new user save operation as an user exists with email: ${userDetails.email}`
      );
      console.log("----\n");

      return {
        message:
          "Aborting new user save operation as the email is already in use.",
        savedSuccessfully: false,
      };
    } else {
      const newUser = new User(userDetails);
      await newUser.save();

      return {
        message: "New user saved successfully",
        savedSuccessfully: true,
      };
    }
  } catch (err) {
    console.log("\n===");
    console.log("error while saving new user: ", err);
    console.log("===\n");

    return false;
  }
};

const doesUserExistsByEmail = async (email) => {
  const user = await User.findOne({ email });
  if (user) return true;
  else false;
};

module.exports = { saveNewUser };
