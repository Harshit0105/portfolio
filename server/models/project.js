const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Project = new Schema(
  {
    title: { type: String, required: true },
    details: { type: String, required: true },
    gitHubLink: { type: String, required: true },
    webSiteLink: { type: String, required: true },
    imageUrl: { type: String, required: true },
    category: { type: Array, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("projects", Project);
