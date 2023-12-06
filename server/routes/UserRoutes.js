const express = require("express");
const router = express.Router();
const {
  createUser,
  addFriend,
  removeFriend,
  getFollowing,
  searchUsers,
  getUser,
  checkFriend,
  getFollowers,
} = require("../controllers/UserController.js");
UserController = require("../controllers/UserController.js");

router.post("/createUser", createUser);
router.post("/addFriend", addFriend);
router.post("/removeFriend", removeFriend);
router.get("/getUser", getUser);
router.get("/following", getFollowing);
router.get("/followers", getFollowers);
router.get("/searchUsers", searchUsers);
router.get("/checkFriend", checkFriend);
router.get("/getAlbumRating", UserController.getAlbumRating);

module.exports = router;
