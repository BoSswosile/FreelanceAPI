const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const verifyToken = require("../middlewares/verifyToken");

router.post("/:id", verifyToken, userController.updateUser);
router.post("/changePassword/:id", verifyToken, userController.changePassword);
router.post("/resetPassword/:id", verifyToken, userController.resetPassword);
router.get("/searchbar", verifyToken, userController.searchBar);
// router.post('/login', checkEmail, checkPassword, validation, authController.login);

module.exports = router;
