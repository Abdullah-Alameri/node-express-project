const express = require("express");
const router = express.Router();
const User = require("../models/customerSchema");
var moment = require("moment");
const userController = require("../controllers/userController");

router.get("/user/add.html", userController.user_add_get);

// Post Requst
router.post("/user/add.html", userController.user_post);



module.exports = router;
