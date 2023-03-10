const express = require("express");
const router = express.Router();
const authRouter = require("./auth.route");
const adminRouter = require("./admin.route");
const entrepriseRouter = require("./entreprise.route");
const userRouter = require("./user.route");
const missionRouter = require("./mission.route");
const freelanceRouter = require("./freelance.route")

router.use("/auth", authRouter);
router.use("/admin", adminRouter);
router.use("/entreprise", entrepriseRouter);
router.use("/user", userRouter);
router.use("/mission", missionRouter);
router.use("/freelance", freelanceRouter);
module.exports = router;
