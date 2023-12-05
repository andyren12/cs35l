const express = require("express");
const router = express.Router();
const {
  createUser,
  addFriend,
  removeFriend,
  getFriends,
  searchUsers,
  getUser,
  checkFriend,
} = require("../controllers/UserController.js");

router.post("/users", createUser);
router.post("/addFriend", addFriend);
router.post("/removeFriend", removeFriend);
router.get("/getUser", getUser);
router.get("/friends", getFriends);
router.get("/searchUsers", searchUsers);
router.get("/checkFriend", checkFriend);

module.exports = router;
