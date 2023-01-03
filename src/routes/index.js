const express = require("express");
const router = express.Router();
const authRouter = require("./auth.route");
const userRouter = require("./user.route");
const productRouter = require("./product.route");

router.use("/auth", authRouter);
