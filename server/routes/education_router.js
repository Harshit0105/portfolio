const express = require("express");

const EduCtrl = require("../controller/education_controller");

const router = express.Router();
router.get("/education/:id", EduCtrl.getEduById);
router.get("/educations", EduCtrl.getEducations);

module.exports = router;
