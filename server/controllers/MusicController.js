const SpotifyWebApi = require("spotify-web-api-node");
const { app } = require("../../firebase.js");
const {
  getFirestore,
  getDoc,
  setDoc,
  doc,
  updateDoc,
  arrayRemove,
  arrayUnion,
  FieldValue,
} = require("firebase/firestore");

const db = getFirestore(app);
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const authenticateSpotify = async () => {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body["access_token"]);
  } catch (err) {
    console.error("Something went wrong when retrieving an access token", err);
  }
};

authenticateSpotify();

const addAlbum = async (req, res) => {
  try {
    const { albumId } = req.body;
    const docSnap = await getDoc(doc(db, "albums", albumId));
    if (!docSnap.exists()) {
      await setDoc(doc(db, "albums", albumId), {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
      });
    }
    res.status(201).json({
      message: "Document exists or was created successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Error creating user",
      error: error.message,
    });
  }
};

const changeRating = async (req, res) => {
  try {
    const { albumId, rating, email, userId } = req.body;
    const albumDocRef = doc(db, "albums", albumId);
    const userDocRef = doc(db, "users", userId);
    if (rating != 0) {
      ratingArray = rating.toString();

      //update the album's stats
      updateAlbumData = {
        1: arrayRemove(email),
        2: arrayRemove(email),
        3: arrayRemove(email),
        4: arrayRemove(email),
        5: arrayRemove(email),
      };
      updateAlbumData[ratingArray] = arrayUnion(email);
      await updateDoc(albumDocRef, updateAlbumData);

      //update user's albums
      updateUserData = {
        ["albumList.1"]: arrayRemove(albumId),
        ["albumList.2"]: arrayRemove(albumId),
        ["albumList.3"]: arrayRemove(albumId),
        ["albumList.4"]: arrayRemove(albumId),
        ["albumList.5"]: arrayRemove(albumId),
        [`albumRatings.${albumId}`]: rating,
      };
      updateUserData[`albumList.${ratingArray}`] = arrayUnion(albumId);
      await updateDoc(userDocRef, updateUserData);
    } else {
      await updateDoc(albumDocRef, {
        1: arrayRemove(email),
        2: arrayRemove(email),
        3: arrayRemove(email),
        4: arrayRemove(email),
        5: arrayRemove(email),
      });
      await updateDoc(userDocRef, {
        ["albumList.1"]: arrayRemove(albumId),
        ["albumList.2"]: arrayRemove(albumId),
        ["albumList.3"]: arrayRemove(albumId),
        ["albumList.4"]: arrayRemove(albumId),
        ["albumList.5"]: arrayRemove(albumId),
        [`albumRatings.${albumId}`]: null,
      });
    }
    res.status(200).json({
      message: "Rating updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getAlbumRatings = async (req, res) => {
  const { id } = req.query;
  const albumDocRef = doc(db, "albums", id);
  try {
    const docSnap = await getDoc(albumDocRef);

    if (docSnap.exists()) {
      res.json(docSnap.data());
    } else {
      res.json(null);
    }
  } catch (error) {
    console.error("Error fetching document: ", error);
  }
};

const search = async (req, res) => {
  try {
    const { query } = req.query;
    const result = await spotifyApi.searchAlbums(query);
    res.json(result.body);
  } catch (err) {
    console.log(err);
  }
};

const getNewReleases = async (req, res) => {
  try {
    const result = await spotifyApi.getNewReleases({ limit: 5, offset: 0 });
    res.json(result.body);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  addAlbum,
  changeRating,
  getAlbumRatings,
  search,
  getNewReleases,
};
