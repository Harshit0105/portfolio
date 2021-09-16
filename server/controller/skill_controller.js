const Skill = require("../models/skill");

// To-do: Add,Delete,Update

getSkillById = async (req, res) => {
  await Skill.findOne({ _id: req.params.id }, (err, skill) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!skill) {
      return res.status(404).json({ success: false, error: `Skill not found` });
    }
    return res.status(200).json({ success: true, data: skill });
  }).catch((err) => console.log(err));
};

getSkills = async (req, res) => {
  await Skill.find({}, (err, skills) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!skills.length) {
      return res
        .status(404)
        .json({ success: false, error: `Skills not found` });
    }
    return res.status(200).json({ success: true, data: skills });
  })
    .clone()
    .catch((err) => console.log(err));
};

module.exports = {
  getSkills,
  getSkillById,
};
