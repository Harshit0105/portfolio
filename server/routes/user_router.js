const express = require("express");

const UserCtrl = require("../controller/user_controller");

const router = express.Router();
router.get("/user/:id", UserCtrl.getUserById);
router.get("/users", UserCtrl.getUsers);

module.exports = router;
