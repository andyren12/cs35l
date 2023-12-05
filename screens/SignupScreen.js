import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import {
	KeyboardAvoidingView,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View,
	Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SignupScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigation = useNavigation();

	const toLogin = () => {
		navigation.navigate("Login");
	};

	const handleSignup = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(async () => {
				try {
					await axios.post("http://localhost:3001/user/create", {
						email: email,
					});
					navigation.navigate("Main");
				} catch (error) {
					alert(
						"Failed to create user in Firestore: " + error.message
					);
				}
			})
			.catch((error) => {
				alert(error.message);
			});
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
			<View style={styles.bottomContainer}>
				<Text style={styles.bottomText}>Already have an account? </Text>
				<TouchableOpacity onPress={toLogin}>
					<Text style={styles.bottomText}>Log in</Text>
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
		marginTop: 40,
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
	bottomContainer: {
		flexDirection: "row",
		paddingTop: 10,
	},
});
