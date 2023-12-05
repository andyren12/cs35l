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
} = require("firebase/firestore");

const db = getFirestore(app);

const createUser = async (req, res) => {
	try {
		const { email } = req.body;
		const userRef = await addDoc(collection(db, "users"), {
			email: email,
		});
		res.status(201).json({
			message: "User created successfully",
			userId: userRef.id,
		});
	} catch (error) {
		res.status(500).json({
			message: "Error creating user",
			error: error.message,
		});
	}
};

module.exports = {
	createUser,
};
