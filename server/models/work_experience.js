const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Work = new Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    duration: { type: String, required: true },
    experience: { type: String, required: true },
    link: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("work_experiences", Work);
