const Work = require("../models/work_experience");

// To-do: Add,Delete,Update

getWorkById = async (req, res) => {
  await Work.findOne({ _id: req.params.id }, (err, work) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!work) {
      return res.status(404).json({ success: false, error: `Work not found` });
    }
    return res.status(200).json({ success: true, data: work });
  }).catch((err) => console.log(err));
};

getWorks = async (req, res) => {
  await Work.find({}, (err, works) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!works.length) {
      return res.status(404).json({ success: false, error: `Works not found` });
    }
    return res.status(200).json({ success: true, data: works });
  })
    .clone()
    .catch((err) => console.log(err));
};

module.exports = {
  getWorks,
  getWorkById,
};
