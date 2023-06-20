const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    sectors: [String],
    termsAccepted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const Sector = model("Sector", userSchema);
module.exports = Sector;
