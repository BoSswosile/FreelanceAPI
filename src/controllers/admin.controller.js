const User = require("../models/user.model");
const Jobs = require("../models/jobs.model");

exports.getUser = (req, res) => {
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
  User.findByIdAndDelete(req.params.id)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => res.status(400).send(err));
};

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

exports.getMissions = (req, res) => {
  Missions.find()
    .then((missions) => {
      if (!missions) {
        return res.status(404).send({
          message: "Unexpected error",
        });
      }
      res.send(missions);
    })
    .catch((err) => res.status(400).send(err));
};

exports.getJobs = (req, res) => {
  Jobs.find()
    .then((jobs) => {
      if (!jobs) {
        return res.status(404).send({
          message: "Unexpected error",
        });
      }
      res.send(jobs);
    })
    .catch((err) => res.status(400).send(err));
};

exports.createJobs = async (req, res, next) => {
  const newJobs = new Jobs({
  name: req.body.name
  });

  try {
    const newJobsToSave = await newJobs.save();
    return res.send(newJobsToSave);
  } catch (err) {
    next(err);
  }
};

exports.deleteJobs = (req, res) => {
  Jobs.findByIdAndDelete(req.params.id)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => res.status(400).send(err));
};

exports.updateJobs = (req, res) => {
  Jobs.findByIdAndUpdate(req.params.id, req.body)
    .then((jobs) => {
      if (!jobs) {
        return res.status(404).send({
          message: "user not found",
        });
      }
      Jobs.findById(jobs._id).then((jobsupdated) => {
        res.send(jobsupdated);
      });
    })
    .catch((err) => res.status(400).send(err));
};
