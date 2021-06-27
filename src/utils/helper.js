const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const getHashedPassword = async (password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(password, salt);
};

const checkPassword = async (hashedPassword, password) => {
  return await bcrypt.compare(password, hashedPassword);
};

const getToken = (user) => {
  delete user.password;
  const token = jwt.sign(user, process.env.JWT_PRIVATE_KEY);
  return `Bearer ${token}`;
};

const validateToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    console.log("\n---");
    console.log("decodedToken: ", decodedToken);
    console.log("---\n");
    return decodedToken;
  } catch (err) {
    console.log("\n---");
    console.log("error in token validation");
    console.log("err: ", err);
    console.log("---\n");
    return null;
  }
};

module.exports = { getHashedPassword, checkPassword, getToken, validateToken };
