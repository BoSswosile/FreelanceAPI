const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../middlewares/verifyToken');

router.post('/:id', verifyToken, userController.updateUser);
// router.post('/login', checkEmail, checkPassword, validation, authController.login);

module.exports = router;