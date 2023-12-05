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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Icon from "react-native-vector-icons/FontAwesome";

const LoginScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigation = useNavigation();

	const handleLogin = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				navigation.navigate("Main");
			})
			.catch((error) => alert(error.message));
	};

	const toSignup = () => {
		navigation.navigate("Signup");
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
				<TouchableOpacity onPress={handleLogin} style={styles.button}>
					<Text style={styles.buttonText}>Login</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.bottomContainer}>
				<Text style={styles.bottomText}>Don't have an account? </Text>
				<TouchableOpacity onPress={toSignup}>
					<Text style={styles.bottomText}>Sign Up</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
};

export default LoginScreen;

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
	bottomText: {
		color: "white",
	},
});
