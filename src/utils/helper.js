const bcrypt = require("bcrypt");

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

module.exports = { getHashedPassword, checkPassword, getToken };
