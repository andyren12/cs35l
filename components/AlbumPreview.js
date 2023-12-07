import { Text, View, Image, StyleSheet } from "react-native";

const AlbumPreview = ({ image, name }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.albumImage} source={{ uri: image }} />
			<Text style={styles.albumText}>{name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		alignItems: "center",
	},
	albumImage: {
		height: 80,
		width: 80,
	},
	albumText: {
		color: "white",
		width: 100,
		textAlign: "center",
		padding: 10,
	},
});

export default AlbumPreview;
