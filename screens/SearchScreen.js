import { useEffect, useState } from "react";
import {
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import axios from "axios";
import Album from "../components/Album";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchScreen = () => {
	const [input, setInput] = useState();
	const [albums, setAlbums] = useState([]);

	const handleSubmit = async () => {
		const res = await axios.get("http://localhost:3001/search", {
			params: { query: input },
		});
		setAlbums(res.data.albums.items);
	};

	return (
		<View>
			<View style={styles.search}>
				<Icon
					style={styles.icon}
					name="search"
					size={16}
					color="#000"
					onPress={handleSubmit}
				/>
				<TextInput
					placeholder="search"
					onChangeText={(text) => setInput(text)}
					value={input}
					onSubmitEditing={handleSubmit}
				/>
			</View>
			<ScrollView>
				{albums.map((album, index) => (
					<Album
						key={index}
						id={album.id}
						name={album.name}
						image={album.images[0].url}
						artist={album.artists[0].name}
					/>
				))}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	search: {
		flexDirection: "row",
		backgroundColor: "lightgray",
		margin: 10,
		padding: 10,
		borderRadius: 20,
	},
	icon: {
		marginHorizontal: 5,
	},
});

export default SearchScreen;
