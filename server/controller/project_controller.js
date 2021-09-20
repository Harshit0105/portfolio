const Project = require("../models/project");

// To-do: Add,Delete,Update

getProjectById = async (req, res) => {
  await Project.findOne({ _id: req.params.id }, (err, project) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!project) {
      return res
        .status(404)
        .json({ success: false, error: `Project not found` });
    }
    return res.status(200).json({ success: true, data: project });
  }).catch((err) => console.log(err));
};

getProjects = async (req, res) => {
  await Project.find({}, (err, projects) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!projects.length) {
      return res
        .status(404)
        .json({ success: false, error: `Projects not found` });
    }
    return res.status(200).json({ success: true, data: projects });
  })
    .clone()
    .catch((err) => console.log(err));
};

module.exports = {
  getProjects,
  getProjectById,
};
