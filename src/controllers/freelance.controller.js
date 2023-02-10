const Freelance = require("../models/freelance.model");

exports.registerFreelance = async (req, res, next) => {
  const newFreelance = new Freelance({
    daily_tax: req.body.daily_tax,
    years_of_work: req.body.years_of_work,
  });

  try {
    const newFreelanceToSave = await newFreelance.save();
    return res.send(newFreelanceToSave);
  } catch (err) {
    next(err);
  }
};
