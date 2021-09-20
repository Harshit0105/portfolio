const express = require("express");

const ProjectCtrl = require("../controller/project_controller");

const router = express.Router();
router.get("/project/:id", ProjectCtrl.getProjectById);
router.get("/projects", ProjectCtrl.getProjects);

module.exports = router;
