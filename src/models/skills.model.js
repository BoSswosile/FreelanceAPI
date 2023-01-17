const mongoose = require("mongoose");

const skillsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 40,
  },
});

module.exports = mongoose.model("Skills", skillsSchema);
