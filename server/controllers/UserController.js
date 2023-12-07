const { app } = require("../../firebase.js");
const {
	getFirestore,
	collection,
	doc,
	addDoc,
	getDoc,
	getDocs,
	updateDoc,
	deleteDoc,
	setDoc,
	arrayUnion,
	arrayRemove,
	query,
	where,
	limit,
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
		const friendRef = doc(db, "users", friendId);
		await updateDoc(userRef, {
			following: arrayUnion(friendId),
		});
		await updateDoc(friendRef, {
			followers: arrayUnion(userId),
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
		const friendRef = doc(db, "users", friendId);
		await updateDoc(userRef, {
			following: arrayRemove(friendId),
		});
		await updateDoc(friendRef, {
			followers: arrayRemove(userId),
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

const getUser = async (req, res) => {
	try {
		const { userId } = req.query;
		const userRef = doc(db, "users", userId);
		const userSnap = await getDoc(userRef);

		if (!userSnap.exists()) {
			return res.status(404).send("User not found");
		}

		const userData = userSnap.data();

		res.status(200).json(userData);
	} catch (error) {
		console.error("Error getting user: ", error);
		res.status(500).send("Error getting user");
	}
};

const getFollowing = async (req, res) => {
	try {
		const { userId } = req.query;
		const userRef = doc(db, "users", userId);
		const userSnap = await getDoc(userRef);

		if (!userSnap.exists()) {
			return res.status(404).send("User not found");
		}

		const userData = userSnap.data();
		const friendsIds = userData.following || [];

		res.status(200).json(friendsIds);
	} catch (error) {
		console.error("Error getting following: ", error);
		res.status(500).send("Error getting following.");
	}
};

const getFollowers = async (req, res) => {
	try {
		const { userId } = req.query;
		const userRef = doc(db, "users", userId);
		const userSnap = await getDoc(userRef);

		if (!userSnap.exists()) {
			return res.status(404).send("User not found");
		}

		const userData = userSnap.data();
		const friendsIds = userData.followers || [];

		res.status(200).json(friendsIds);
	} catch (error) {
		console.error("Error getting following: ", error);
		res.status(500).send("Error getting following.");
	}
};

const searchUsers = async (req, res) => {
	try {
		const searchQuery = req.query.query;
		const usersRef = collection(db, "users");

		const startAtQuery = searchQuery;
		const endAtQuery = searchQuery + "\uf8ff";

		const q = query(
			usersRef,
			where("email", ">=", startAtQuery),
			where("email", "<=", endAtQuery),
			limit(30)
		);
		const querySnapshot = await getDocs(q);

		const userIds = querySnapshot.docs.map((doc) => doc.id);
		res.status(200).json(userIds);
	} catch (error) {
		console.log(error);
		res.status(500).send("Error searching users");
	}
};

const checkFriend = async (req, res) => {
	try {
		const { userId, friendId } = req.query;

		const userRef = doc(db, "users", userId);
		const userSnap = await getDoc(userRef);

		if (!userSnap.exists()) {
			return res.status(404).send("User not found");
		}

		const userData = userSnap.data();
		const isFriend =
			userData.following && userData.following.includes(friendId);

		res.status(200).json({ isFriend });
	} catch (error) {
		console.error("Error checking friend: ", error);
		res.status(500).send("Error checking friend");
	}
};

const getAlbums = async (req, res) => {
	try {
		const { userId } = req.query;
		const userRef = doc(db, "users", userId);
		const userSnap = await getDoc(userRef);
		if (!userSnap.exists()) {
			return res.status(404).send("User not found");
		}
		const albumList = userSnap.data().albumList || {};
		res.status(200).json(albumList);
	} catch (error) {
		console.error("Error retrieving albums", error);
		res.status(500).send("Error retrieving albums");
	}
};

module.exports = {
	createUser,
	addFriend,
	removeFriend,
	getFollowing,
	getFollowers,
	getUser,
	searchUsers,
	checkFriend,
	getAlbumRating,
	getAlbums,
};
