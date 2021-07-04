const authRoutes = require("./auth.js");
const contactRoutes = require("./contactRoutes");
const authenticateJWT = require("../middlewares/authenticateJWT");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.use("/auth", authRoutes);
router.use("/contacts", contactRoutes);

module.exports = router;
