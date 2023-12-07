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
	getAlbumRating,
	getAlbums,
} = require("../controllers/UserController.js");

router.post("/createUser", createUser);
router.post("/addFriend", addFriend);
router.post("/removeFriend", removeFriend);
router.get("/getUser", getUser);
router.get("/following", getFollowing);
router.get("/followers", getFollowers);
router.get("/searchUsers", searchUsers);
router.get("/checkFriend", checkFriend);
router.get("/getAlbumRating", getAlbumRating);
router.get("/getAlbums", getAlbums);

module.exports = router;
