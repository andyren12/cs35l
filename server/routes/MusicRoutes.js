const express = require("express");
const router = express.Router();

const MusicController = require("../controllers/MusicController.js");

router.post("/addAlbum", MusicController.addAlbum);
router.post("/changeRating", MusicController.changeRating);
router.get("/getAlbumRatings", MusicController.getAlbumRatings);
router.get("/search", MusicController.search);
router.get("/getNewReleases", MusicController.getNewReleases);
router.get("/getRecommendations", MusicController.getRecommendations);

module.exports = router;
