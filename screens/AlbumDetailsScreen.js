import axios from "axios";
import { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useCurrentUser } from "../UserContext";
import MyBarChart from "../components/MyBarChart";

const AlbumDetailsScreen = ({ id, name, image, artist, year, onBack }) => {
	const [ratings, setRatings] = useState(null);
	const [rating, setRating] = useState(0.0);
	const [yourRating, setYourRating] = useState(0);
	const currentUser = useCurrentUser();
	const userId = currentUser ? currentUser.uid : "No user";

	const getAlbumRatings = async () => {
		const res = await axios.get(
			"http://localhost:3001/music/getAlbumRatings",
			{
				params: { id },
			}
		);
		if (res.data) {
			setRatings(res.data);
			setRating(
				(
					(res.data["1"].length +
						2 * res.data["2"].length +
						3 * res.data["3"].length +
						4 * res.data["4"].length +
						5 * res.data["5"].length) /
					(res.data["1"].length +
						res.data["2"].length +
						res.data["3"].length +
						res.data["4"].length +
						res.data["5"].length)
				).toFixed(1)
			);
		}
	};

	const fetchExistingRating = async () => {
		try {
			const res = await axios.get(
				"http://localhost:3001/user/getAlbumRating",
				{
					params: { albumId: id, userId },
				}
			);
			if (res.data) {
				setYourRating(res.data);
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		getAlbumRatings();
		fetchExistingRating();
	}, [id]);

	return (
		<SafeAreaView style={styles.container}>
			<Icon
				name="chevron-left"
				size={16}
				color="white"
				onPress={onBack}
			/>
			<View style={styles.albumInfo}>
				<View style={styles.textContainer}>
					<Text style={styles.name}>
						{name}&nbsp;
						<Text style={styles.year}>{year}</Text>
					</Text>
					<Text style={styles.artist}>{artist}</Text>
				</View>
				<View>
					<Image style={styles.image} source={{ uri: image }} />
				</View>
			</View>
			<View style={styles.rating}>
				<Text style={{ fontSize: 14 }}>YOUR RATING: {yourRating}</Text>
			</View>
			<View style={styles.overallRating}>
				<Text style={{ fontSize: 18 }}>{rating}</Text>
			</View>
			<MyBarChart style={styles.chart} ratings={ratings} />
		</SafeAreaView>
	);
};

export default AlbumDetailsScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "black",
		height: "100%",
		gap: 20,
	},
	albumInfo: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
	},
	textContainer: {
		width: "70%",
	},
	name: {
		fontWeight: "bold",
		color: "white",
		fontSize: 18,
	},
	year: {
		fontWeight: "normal",
		fontSize: 12,
		color: "darkgray",
	},
	artist: {
		color: "gray",
	},
	image: {
		height: 100,
		width: 100,
	},
	rating: {
		backgroundColor: "lightgray",
		alignItems: "center",
		borderRadius: 20,
	},
	overallRating: {
		backgroundColor: "lightgray",
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "center",
		height: 50,
		width: 50,
		borderRadius: "50%",
	},
});
