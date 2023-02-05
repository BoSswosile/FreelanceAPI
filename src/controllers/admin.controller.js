const User = require("../models/user.model")

exports.viewUser = (req, res) => {
  User.findById(req.userToken.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "user not found",
        });
      }
      res.send(user);
    })
    .catch((err) => res.status(400).send(err));
};

exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id).then(user => {
    res.send(user)
  }).catch(err=>res.status(400).send(err))
}

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



