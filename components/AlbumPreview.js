import { Text, View, Image, StyleSheet } from "react-native";

const AlbumPreview = ({ image, name }) => {
	const adjustName = name.length > 7 ? name.slice(0, 7) + ".." : name;
	return (
		<View style={styles.container}>
			<Image style={styles.albumImage} source={{ uri: image }} />
			<Text style={styles.albumText}>{adjustName}</Text>
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
		width: 60,
		textAlign: "center",
		marginTop: "2%",
	},
});

export default AlbumPreview;
