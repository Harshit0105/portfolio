const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    full_name: { type: String, required: true },
    location: { type: String, required: true },
    languages: { type: Array, required: true },
    cv_link: { type: String, required: true },
    contact1: { type: String, required: true },
    contact2: { type: String, required: true },
    email1: { type: String, required: true },
    email2: { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", User);
