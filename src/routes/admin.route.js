const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller')
const verifyToken = require('../middlewares/verifyToken');
const verifyIsAdmin = require('../middlewares/verifyIsAdmin')

router.get('/getUser/:id', verifyToken, verifyIsAdmin, adminController.getUser);
router.delete('/removeUser/:id', verifyToken, verifyIsAdmin, adminController.deleteUser);
router.post('/editUser/:id', verifyToken, verifyIsAdmin, adminController.updateUser);
router.get('/getMissions/:id', verifyToken, verifyIsAdmin, adminController.getMissions);
router.delete('/removeMissions/:id', verifyToken, verifyIsAdmin, adminController.deleteMissions);
router.post('/editMissions/:id', verifyToken, verifyIsAdmin, adminController.updateMissions);
router.get('/getJobs/:id', verifyToken, verifyIsAdmin, adminController.getJobs);
router.delete('/removeJobs/:id', verifyToken, verifyIsAdmin, adminController.deleteJobs);
router.post('/editJobs/:id', verifyToken, verifyIsAdmin, adminController.updateJobs);
// router.post('/login', checkEmail, checkPassword, validation, authController.login);

module.exports = router;