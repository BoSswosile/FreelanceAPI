const express = require('express');
const router = express.Router();
const entrepriseController = require('../controllers/entreprise.controller');
const verifyToken = require('../middlewares/verifyToken');

router.post('/createMissions', verifyToken, entrepriseController.createMissions);
router.delete('/removeMissions/:id', verifyToken, entrepriseController.deleteMissions);
router.post('/editMissions/:id', verifyToken, entrepriseController.updateMissions);
module.exports = router;