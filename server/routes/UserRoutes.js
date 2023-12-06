const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController.js");

router.post("/createUser", UserController.createUser);
router.post("/addFriend", UserController.addFriend);
router.post("removeFriend", UserController.removeFriend);
router.get("/getAlbumRating", UserController.getAlbumRating);

module.exports = router;
