const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController.js");

router.post("/create", UserController.createUser);

module.exports = router;
