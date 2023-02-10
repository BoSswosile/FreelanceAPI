const company_missionModel = require("../models/company_mission.model");
const freelance_missionModel = require("../models/freelance_mission.model");
const Missions = require("../models/missions.model");
const Company = require("../models/company.model");

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
    jobs: req.body.jobs,
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

exports.proposeToFreelance = async (req, res) => {
  await Missions.findById(req.body.missionID).then((mission) => {
    if (!mission) {
      return res.status(404).send({
        message: "No missions",
      });
    }
  });
  await User.findById(req.userToken.id).then((business) => {
    if (!business) {
      return res.status(404).send({
        message: "No companies",
      });
    }
  });
  await User.findById(req.body.freelanceID).then((freelance) => {
    if (!freelance) {
      return res.status(404).send({
        message: "No freelance found",
      });
    } else {
      if (!freelance.isFreelance) {
        return res.status(201).send({
          message: "User is not a freelance",
        });
      }
    }
  });
  await freelance_missionModel
    .find({
      freelanceID: req.body.freelanceID,
      missionID: req.body.missionID,
    })
    .then((assoc) => {
      if (assoc.length > 0) {
        return res.status(201).send({
          message: "User has already been asked",
        });
      }
    });

  const company_mission = company_missionModel({
    businessID: req.userToken.id,
    missionID: req.body.missionID,
  });
  const freelance_mission = freelance_missionModel({
    freelanceID,
    missionID: req.body.missionID,
    status: "Waiting",
  });
  company_mission.save();
  freelance_mission.save();

  return res.status(200).send({
    message: "Proposed to freelance",
  });
};

exports.registerCompany = async (req, res, next) => {
  const newCompany = new Company({
    name: req.body.name,
    company_status: req.body.company_status,
    siret: req.body.siret,
    headquarters: req.body.headquarters,
  });

  try {
    const newCompanyToSave = await newCompany.save();
    return res.send(newCompanyToSave);
  } catch (err) {
    next(err);
  }
};

