const express = require("express");

const SkillCtrl = require("../controller/skill_controller");

const router = express.Router();
router.get("/skill/:id", SkillCtrl.getSkillById);
router.get("/skills", SkillCtrl.getSkills);

module.exports = router;
