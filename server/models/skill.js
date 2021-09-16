const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Skill = new Schema(
  {
    title: { type: String, required: true },
    percentage: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("skills", Skill);
