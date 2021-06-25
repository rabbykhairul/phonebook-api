const User = require("../models/user");

const saveNewUser = async (userDetails) => {
  const IsEmailAlreadyInUse = await doesUserExistsByEmail(userDetails.email);
  if (IsEmailAlreadyInUse) {
    console.log("\n----");
    console.log(
      `Aborting new user save operation as an user exists with email: ${userDetails.email}`
    );
    console.log("----\n");

    return {
      message: "The email is already in use.",
      savedSuccessfully: false,
    };
  } else {
    const newUser = new User(userDetails);
    await newUser.save();

    console.log("\n----");
    console.log(`New user registered with email: ${userDetails.email}`);
    console.log("----\n");

    return {
      message: "New user saved successfully",
      savedSuccessfully: true,
    };
  }
};

const doesUserExistsByEmail = async (email) => {
  const user = await User.findOne({ email });
  if (user) return true;
  else false;
};

module.exports = { saveNewUser };
