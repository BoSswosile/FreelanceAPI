const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const mail = require("../utils/nodemailer");

exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "user not found",
        });
      }
      User.findById(user._id).then((userupdated) => {
        res.send(userupdated);
      });
    })
    .catch((err) => res.status(400).send(err));
};

exports.changePassword = async (req, res) => {
  var password = bcrypt.hashSync(req.body.password, 10);
  User.findByIdAndUpdate(req.params.id, password)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "user not found",
        });
      }
      bcrypt
        .compare(req.body.oldpassword, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).send({
              message: "wrong password",
            });
          }
          User.findById(user._id).then((userupdated) => {
            res.send(userupdated);
          });
        })
        .catch((err) => {
          console.error(err);
        });
    })
    .catch((err) => res.status(400).send(err));
};

exports.resetPassword = (req, res) => {
  var result = Math.random().toString(36).substring(2, 12);
  var password = bcrypt.hashSync(result, 10);
  console.log(result);
  User.findByIdAndUpdate(req.params.id, { password })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "user not found",
        });
      }
      mail.resetPasswordMail(user.email, result);
      User.findById(user._id).then((userupdated) => {
        res.send(userupdated);
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

exports.searchBar = (req, res) => {
  User.find({
    $or: [{ firstname: req.body.search }, { lastname: req.body.search }, { city: req.body.search }],
  })
    .then((users) => res.send(users))
    .catch((err) => res.status(400).send(err));
};
