const express = require("express");
const router = express.Router();

const MusicController = require("../controllers/MusicController.js");

router.post("/addAlbum", MusicController.addAlbum);
router.post("/changeRating", MusicController.changeRating);
router.get("/getAlbumRatings", MusicController.getAlbumRatings);

module.exports = router;
