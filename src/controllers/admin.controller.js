const User = require("../models/user.model");
const Missions = require("../models/missions.model");
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

exports.deleteMissions = (req, res) => {
  Missions.findByIdAndDelete(req.params.id)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => res.status(400).send(err));
};

exports.createMissions = async (req, res, next) => {
  const newMission = new Missions({
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    description: req.body.description,
    title: req.body.title,
    job_type: req.body.job_type,
    skills: req.body.skills,
    status: req.body.status,
  });

  try {
    const newMissionsToSave = await newMission.save();
    return res.send(newMissionsToSave);
  } catch (err) {
    next(err);
  }
};

exports.updateMissions = (req, res) => {
  Missions.findByIdAndUpdate(req.params.id, req.body)
    .then((missions) => {
      if (!missions) {
        return res.status(404).send({
          message: "user not found",
        });
      }
      Missions.findById(missions._id).then((missionupdated) => {
        res.send(missionupdated);
      });
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
