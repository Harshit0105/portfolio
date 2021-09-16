const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Education = new Schema(
  {
    title: { type: String, required: true },
    school: { type: String, required: true },
    duration: { type: String, required: true },
    details: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("educations", Education);
