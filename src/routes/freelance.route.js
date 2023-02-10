const express = require("express");
const router = express.Router();
const freelanceController = require("../controllers/freelance.controller");
const verifyToken = require("../middlewares/verifyToken");

router.post(
  "/createFreelance",
  verifyToken,
  freelanceController.registerFreelance
);

module.exports = router;
