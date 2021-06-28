const helper = require("../utils/helper");

const authenticateJWT = (req, res, next) => {
  const bearerToken = req.get("authorization")?.split(" ")[1];
  const decodedToken = helper.validateToken(bearerToken);

  if (decodedToken) {
    req.user = decodedToken;
    next();
  } else {
    console.log("\n---");
    console.log(`Denying access to to route path: ${req.path}`);
    console.log(`Reason: ${bearerToken ? "Invalid" : "No"} bearer token in the req header....`);
    console.log("---\n");
    res.status(400).json({
      message: "Access denied. Try logging in or create an account.",
      status: 400,
    });
  }
};

module.exports = authenticateJWT;
