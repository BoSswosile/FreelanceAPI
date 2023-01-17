const mongoose = require("mongoose");

const freelanceSchema = mongoose.Schema({
  daily_tax: {
    type: Number,
    required: true,
  },
  years_of_work: {
    type: Number,
    required: true,
  },
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skills" }],
  jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Jobs" }],
});

module.exports = mongoose.model("Freelance", freelanceSchema);
