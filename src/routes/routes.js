const authRoutes = require("./auth.js");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.use("/auth", authRoutes);

module.exports = router;
