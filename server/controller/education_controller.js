const Education = require("../models/education");

// To-do: Add,Delete,Update

getEduById = async (req, res) => {
  await Education.findOne({ _id: req.params.id }, (err, edu) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!edu) {
      return res
        .status(404)
        .json({ success: false, error: `Education not found` });
    }
    return res.status(200).json({ success: true, data: edu });
  }).catch((err) => console.log(err));
};

getEducations = async (req, res) => {
  await Education.find({}, (err, edus) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!edus.length) {
      return res
        .status(404)
        .json({ success: false, error: `Educations not found` });
    }
    return res.status(200).json({ success: true, data: edus });
  })
    .clone()
    .catch((err) => console.log(err));
};

module.exports = {
  getEducations,
  getEduById,
};
