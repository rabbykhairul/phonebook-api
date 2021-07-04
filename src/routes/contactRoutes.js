const authenticateJWT = require("../middlewares/authenticateJWT");
const controller = require("../controllers/contactController");

const express = require("express");
const router = express.Router();

router.get("/", [authenticateJWT, controller.getContacts]);

router.post("/", [authenticateJWT, controller.addNewContact]);

router.put("/:id", [authenticateJWT, controller.editContact]);

router.delete("/:id", [authenticateJWT, controller.deleteContact]);

module.exports = router;
