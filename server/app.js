const express = require("express");
const cors = require("cors");
require("dotenv").config();
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();
const port = 3001;

app.use(cors());

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const authenticateSpotify = async () => {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    console.log("The access token is " + data.body["access_token"]);
    spotifyApi.setAccessToken(data.body["access_token"]);
  } catch (err) {
    console.error("Something went wrong when retrieving an access token", err);
  }
};

authenticateSpotify();

app.get("/search", async (req, res) => {
  try {
    const { query } = req.query;
    const result = await spotifyApi.searchAlbums(query);
    res.json(result.body);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
