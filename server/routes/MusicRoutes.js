const express = require("express");
const router = express.Router();

const MusicController = require("../controllers/MusicController.js");

router.post("/addAlbum", MusicController.addAlbum);
router.post("/changeRating", MusicController.changeRating);
router.get("/search", MusicController.search);
router.get("/getAlbum", MusicController.getAlbum);
router.get("/getAlbumRatings", MusicController.getAlbumRatings);

module.exports = router;
