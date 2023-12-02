import {
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import Icon from "react-native-vector-icons/FontAwesome";

const SignupScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigation = useNavigation();

	const handleSignup = () => {
		try {
			createUserWithEmailAndPassword(auth, email, password).then(
				async () => {
					setDoc(doc(db, "users", `${email}`));
				}
			);
			navigation.navigate("Main");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<KeyboardAvoidingView style={styles.container} behavior="padding">
			<Icon style={styles.icon} name="music" color="white" size={75} />
			<View style={styles.headerContainer}>
				<Text style={styles.header}>noted.</Text>
			</View>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Email"
					value={email}
					onChangeText={(text) => setEmail(text)}
					autoCapitalize="none"
					style={styles.input}
				/>
				<TextInput
					placeholder="Password"
					value={password}
					onChangeText={(text) => setPassword(text)}
					autoCapitalize="none"
					secureTextEntry={true}
					style={styles.input}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity onPress={handleSignup} style={styles.button}>
					<Text style={styles.buttonText}>Signup</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
};

export default SignupScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "black",
	},
	headerContainer: {
		width: "100%",
		alignItems: "flex-start",
		paddingLeft: 40,
		paddingTop: 150,
	},
	icon: {
		paddingTop: 150,
	},
	header: {
		color: "white",
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "left",
	},
	inputContainer: {
		width: "80%",
		paddingTop: 5,
	},
	input: {
		backgroundColor: "white",
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 20,
		marginVertical: 5,
	},
	buttonContainer: {
		width: "60%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20,
		marginBottom: 40,
	},
	button: {
		backgroundColor: "black",
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "white",
		width: "100%",
		padding: 10,
		borderRadius: 30,
		alignItems: "center",
	},
	buttonText: {
		color: "white",
		fontWeight: "700",
		fontSize: 16,
	},
});
