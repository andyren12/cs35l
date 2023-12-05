const express = require("express");
const router = express.Router();
const {
  createUser,
  addFriend,
  removeFriend,
} = require("../controllers/UserController.js");

router.post("/users", createUser);
router.post("/addFriend", addFriend);
router.post("/removeFriend", removeFriend);

module.exports = router;
