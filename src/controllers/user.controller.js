const User = require("../models/user.model");

exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: "user not found"
          })
        }
        User.findById(user._id).then(userupdated => {
          res.send(userupdated);
        })
      })
      .catch(err => res.status(400).send(err))
  }
