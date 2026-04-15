const express = require("express");
const router = express.Router();

const {
  getProperties,
  getPropertyById,
  createProperty,
  deleteProperty
} = require("../controllers/propertyController");

// Routes
router.get("/", getProperties);
router.get("/:id", getPropertyById);
router.post("/", createProperty);
router.delete("/:id", deleteProperty);

module.exports = router;