const User = require("../models/user.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const mail = require("../utils/nodemailer")

exports.register = async (req, res, next) => {
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    address: req.body.address,
    city: req.body.city,
    postal_code: req.body.postal_code,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const newUserToSave = await newUser.save();
    mail.registerMail(req.body.email);
    return res.send(newUserToSave);
  } catch (err) {
    next(err);
  }
};

exports.login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "user not found",
        });
      }
      let passwordValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordValid) {
        return res.status(401).send({
          message: "password not valid",
          auth: false,
        });
      }
      let userToken = jwt.sign(
        {
          id: user._id,
          isadmin:user.isadmin,
        },
        process.env.JWT_SECRET
      );
      res.send({
        message: "User logged",
        auth: true,
        token: userToken,
      });
    })
    .catch((err) => res.Status(400).send(err));
};
