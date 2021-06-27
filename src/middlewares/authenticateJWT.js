const authenticateJWT = (req, res, next) => {
  const bearerToken = req.get("authorization")?.split(" ")[1];

  if (bearerToken) {
  } else
    res.status(400).json({
      message: "Access denied. Try logging in or create an account.",
      status: 400,
    });
};

module.exports = authenticateJWT;
