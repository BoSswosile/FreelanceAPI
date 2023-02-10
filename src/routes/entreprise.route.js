const express = require("express");
const router = express.Router();
const entrepriseController = require("../controllers/entreprise.controller");
const verifyToken = require("../middlewares/verifyToken");
const verifyCompany = require("../middlewares/verifyCompany");

router.post(
  "/createMissions",
  verifyToken,
  verifyCompany,
  entrepriseController.createMissions
);
router.delete(
  "/removeMissions/:id",
  verifyToken,
  verifyCompany,
  entrepriseController.deleteMissions
);
router.post(
  "/editMissions/:id",
  verifyToken,
  verifyCompany,
  entrepriseController.updateMissions
);
router.post("/askToFreelance", verifyToken, verifyCompany, entrepriseController.proposeToFreelance)
router.post("/createCompany", verifyToken, entrepriseController.registerCompany)
module.exports = router;
