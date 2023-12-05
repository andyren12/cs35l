const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController.js");

router.post("/create", UserController.createUser);
router.post("/add/friend", UserController.addFriend);
router.post("remove/friend", UserController.removeFriend);

module.exports = router;
