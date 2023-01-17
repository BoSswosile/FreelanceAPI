const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 50,
  },
  company_status: {
    type: String,
    required: true,
    maxLength: 15,
  },
  siret: {
    type: Number,
    minLength: 9,
    maxLength: 9,
  },
  headquarters: {
    type: String,
    minLength: 10,
    maxLength: 100,
  },
});

module.exports = mongoose.model("Company", companySchema);
