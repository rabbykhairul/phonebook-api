const authenticateJWT = (req, res, next) => {
  const bearerToken = req.get("authorization")?.split(" ")[1];

  if (bearerToken) {
  } else {
    console.log("\n---");
    console.log(`Denying access to to route path: ${req.path}`);
    console.log("Reason: No bearer token in the req header...");
    console.log("---\n");
    res.status(400).json({
      message: "Access denied. Try logging in or create an account.",
      status: 400,
    });
  }
};

module.exports = authenticateJWT;
