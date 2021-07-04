const authenticateJWT = require("../middlewares/authenticateJWT");
const controller = require("../controllers/contactController");

const express = require("express");
const router = express.Router();

router.post("/", [authenticateJWT, controller.addNewContact]);

module.exports = router;
