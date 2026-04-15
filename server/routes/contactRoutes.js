const express = require("express");
const router = express.Router();
const { sendMessage } = require("../controllers/contactController");

// POST contact message
router.post("/", sendMessage);

module.exports = router;