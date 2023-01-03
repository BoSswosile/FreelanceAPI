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
  skills: {
    type: Array,
    required: true,
  },
  jobs: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Freelance", freelanceSchema);
