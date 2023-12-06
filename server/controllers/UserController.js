const { app } = require("../../firebase.js");
const {
	getFirestore,
	doc,
	updateDoc,
	setDoc,
	getDoc,
	arrayUnion,
	arrayRemove,
} = require("firebase/firestore");

const db = getFirestore(app);

const createUser = async (req, res) => {
	try {
		const { email, userId } = req.body;
		const userRef = doc(db, "users", userId);

		let albumList = {
			1: [],
			2: [],
			3: [],
			4: [],
			5: [],
		};
		await setDoc(userRef, {
			email: email,
			albumList: albumList,
			albumRatings: {},
		});

		res.status(201).json({
			message: "User created successfully",
			userId: userId,
		});
	} catch (error) {
		console.error("Error occurred in createUser: ", error);
		res.status(500).json({
			message: "Error creating user",
			error: error.message,
		});
	}
};

const addFriend = async (req, res) => {
	try {
		const { userId, friendId } = req.body;
		const userRef = doc(db, "users", userId);
		await updateDoc(userRef, {
			friends: arrayUnion(friendId),
		});
		res.status(200).send("Friend added successfully.");
	} catch (error) {
		console.error("Error adding friend: ", error);
		res.status(500).send("Error adding friend.");
	}
};

const removeFriend = async (req, res) => {
	try {
		const { userId, friendId } = req.body;
		const userRef = doc(db, "users", userId);
		await updateDoc(userRef, {
			friends: arrayRemove(friendId),
		});
		res.status(200).send("Friend removed successfully.");
	} catch (error) {
		console.error("Error removing friend: ", error);
		res.status(500).send("Error removing friend.");
	}
};

const getAlbumRating = async (req, res) => {
	try {
		const { albumId, userId } = req.query;
		const userRef = doc(db, "users", userId);
		const userSnap = await getDoc(userRef);
		if (userSnap.exists()) {
			const albumRatings = userSnap.data().albumRatings;
			const rating = albumRatings[albumId];
			res.json(rating);
		} else {
			res.json("User has not rated this album");
		}
	} catch (error) {
		console.error("Error retrieving album rating: ", error);
		res.status(500).json({
			message: "Error retrieving album rating",
			error: error.message,
		});
	}
};

module.exports = {
	createUser,
	addFriend,
	removeFriend,
	getAlbumRating,
};
