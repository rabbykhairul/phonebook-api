const controller = require("../controllers/authController");
const express = require("express");
const router = express.Router();

router.post("/register", controller.hanldeUserRegistration);

module.exports = router;
