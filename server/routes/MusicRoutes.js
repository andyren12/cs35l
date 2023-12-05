const express = require("express");
const router = express.Router();

const MusicController = require("../controllers/MusicController.js");

router.post("/add/album", MusicController.addAlbum);
router.post("/change/rating", MusicController.changeRating);

module.exports = router;
