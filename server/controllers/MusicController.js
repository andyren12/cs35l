const { app } = require("../../firebase.js");
const {
	getFirestore,
	getDoc,
	setDoc,
	doc,
	updateDoc,
	arrayRemove,
	arrayUnion,
} = require("firebase/firestore");

const db = getFirestore(app);

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
		const { albumId, rating, email } = req.body;
		const albumDocRef = doc(db, "albums", albumId);
		if (rating != 0) {
			ratingArray = rating.toString();
			updateData = {
				1: arrayRemove(email),
				2: arrayRemove(email),
				3: arrayRemove(email),
				4: arrayRemove(email),
				5: arrayRemove(email),
			};
			updateData[ratingArray] = arrayUnion(email);
			await updateDoc(albumDocRef, updateData);
		} else {
			await updateDoc(albumDocRef, {
				1: arrayRemove(email),
				2: arrayRemove(email),
				3: arrayRemove(email),
				4: arrayRemove(email),
				5: arrayRemove(email),
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
module.exports = {
	addAlbum,
	changeRating,
};
