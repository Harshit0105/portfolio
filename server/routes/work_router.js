const express = require("express");

const WorkCtrl = require("../controller/work_controller");

const router = express.Router();
router.get("/work/:id", WorkCtrl.getWorkById);
router.get("/works", WorkCtrl.getWorks);

module.exports = router;
