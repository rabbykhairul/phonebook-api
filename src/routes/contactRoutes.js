const authenticateJWT = require("../middlewares/authenticateJWT");
const controller = require("../controllers/contactController");

const express = require("express");
const router = express.Router();

router.post("/", [authenticateJWT, controller.addNewContact]);

router.put("/", [authenticateJWT, controller.editContact]);

module.exports = router;
