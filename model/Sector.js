const { Schema, model, Types } = require("mongoose");

const sectorSchema = new Schema(
  {
    value: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Sector = model("Sector", sectorSchema);
module.exports = Sector;
