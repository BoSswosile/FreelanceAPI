const mongoose = require("mongoose");

const missionsSchema = mongoose.Schema({
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxLength: 100,
  },
  title: {
    type: String,
    required: true,
    maxLength: 50,
  },
  job_type: {
    type: String,
    required: true,
    maxLength: 25,
  },
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skills" }],
  status: {
    type: String,
    required: false,
    default: "Not running",
  },
});

module.exports = mongoose.model("Missions", missionsSchema);
