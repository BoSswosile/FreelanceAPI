const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller')
const verifyToken = require('../middlewares/verifyToken');
const verifyIsAdmin = require('../middlewares/verifyIsAdmin')

router.get('/getUser/:id', verifyToken, verifyIsAdmin, adminController.getUser);
router.delete('/removeUser/:id', verifyToken, verifyIsAdmin, adminController.deleteUser);
router.post('/editUser/:id', verifyToken, verifyIsAdmin, adminController.updateUser);
router.get('/getMissions', verifyToken, verifyIsAdmin, adminController.getMissions);
router.get('/getJobs', verifyToken, verifyIsAdmin, adminController.getJobs);
router.post('/createJobs', verifyToken, verifyIsAdmin, adminController.createJobs);
router.delete('/removeJobs/:id', verifyToken, verifyIsAdmin, adminController.deleteJobs);
router.post('/editJobs/:id', verifyToken, verifyIsAdmin, adminController.updateJobs);
// router.post('/login', checkEmail, checkPassword, validation, authController.login);

module.exports = router;