const Missions = require("../models/missions.model");

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
