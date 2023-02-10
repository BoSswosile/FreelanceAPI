const mongoose = require("mongoose");

const companyMissionSchema = mongoose.Schema(
  {
    businessID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    missionID: { type: mongoose.Schema.Types.ObjectId, ref: "mission" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("companyMission", companyMissionSchema);
