const mongoose = require("mongoose");

const jobsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 40,
  },
});

module.exports = mongoose.model("Jobs", jobsSchema);
