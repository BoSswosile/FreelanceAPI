const mongoose = require("mongoose");

const freelanceMissionSchema = mongoose.Schema(
  {
    freelanceID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    missionID: { type: mongoose.Schema.Types.ObjectId, ref: "mission" },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("freelanceMission", freelanceMissionSchema);
