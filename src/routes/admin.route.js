const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller')
const verifyToken = require('../middlewares/verifyToken');
const verifyIsAdmin = require('../middlewares/verifyIsAdmin')

router.get('/getUser/:id', verifyToken, verifyIsAdmin, adminController.viewUser);
router.delete('/removeUser/:id', verifyToken, verifyIsAdmin, adminController.deleteUser);
router.post('/editUser/:id', verifyToken, verifyIsAdmin, adminController.updateUser);
// router.post('/login', checkEmail, checkPassword, validation, authController.login);

module.exports = router;