const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
var jwt = require("jsonwebtoken");

/*let mailer = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL,
    pass: process.env.MAIL_PASS,
  },
});*/

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
    // sendMail(req.body.email);
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
          isAdmin: user.isAdmin,
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
/*
const sendMail = (email) => {
  let mailOptions = {
    from: '"FreelanceAPI"' + process.env.MAIL,
    to: email,
    subject: "Bienvenue parmis nous !",
    text: "Merci de vous êtes inscrits sur notre application",
  };

  mailer.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });
};
*/