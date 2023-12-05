import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import RatingDropdown from "./RatingDropdown";
import { useNavigation } from "@react-navigation/native";

const Album = ({ id, name, image, artist, year }) => {
	const navigation = useNavigation();
	const toAlbum = () => {
		navigation.navigate("AlbumDetails", { id, name, image, artist, year });
	};
	return (
		<TouchableOpacity style={styles.container} onPress={toAlbum}>
			<View style={styles.albumInfo}>
				<Image style={styles.albumImage} source={{ uri: image }} />
				<View style={styles.text}>
					<Text>{name}</Text>
					<Text style={styles.artist}>{artist}</Text>
				</View>
			</View>
			<RatingDropdown albumId={id} />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 10,
		justifyContent: "space-between",
		alignItems: "center",
	},
	albumInfo: {
		flexDirection: "row",
	},
	albumImage: {
		marginRight: 10,
		width: 50,
		height: 50,
	},
	text: {
		justifyContent: "center",
	},
	artist: {
		color: "gray",
		fontSize: 12,
	},
});

export default Album;
