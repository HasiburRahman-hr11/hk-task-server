const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    sectors: [
      {
        title: {
          type: String,
          required: true,
        },
        value: {
          type: String,
          required: true,
        },
      },
    ],
    acceptTerms: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Sector = model("Sector", userSchema);
module.exports = Sector;
