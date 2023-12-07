import { Text, View, Image, StyleSheet } from "react-native";

const AlbumPreview = ({ image, name }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.albumImage} source={{ uri: image }} />
			<Text numberOfLines={2} style={styles.albumText}>
				{name}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		alignItems: "center",
		padding: 5,
		paddingBottom: 0,
	},
	albumImage: {
		height: 80,
		width: 80,
	},
	albumText: {
		color: "white",
		width: 80,
		textAlign: "center",
		marginTop: "2%",
	},
});

export default AlbumPreview;
