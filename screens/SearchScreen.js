import { useEffect, useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";
import Album from "../components/Album";
import Icon from "react-native-vector-icons/FontAwesome";
import AlbumDetailsScreen from "./AlbumDetailsScreen";

const SearchScreen = () => {
  const [input, setInput] = useState();
  const [albums, setAlbums] = useState([]);
  const [selected, setSelected] = useState(null);

  const handleSubmit = async () => {
    const res = await axios.get("http://localhost:3001/search", {
      params: { query: input },
    });
    setAlbums(res.data.albums.items);
  };

  if (selected) {
    return (
      <AlbumDetailsScreen
        id={selected.id}
        name={selected.name}
        image={selected.images[0].url}
        artist={selected.artists[0].name}
        year={selected.release_date.substring(0, 4)}
        onBack={() => setSelected(null)}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
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
          <TouchableOpacity
            style={styles.album}
            key={index}
            onPress={() => setSelected(album)}
          >
            <Album
              id={album.id}
              name={album.name}
              image={album.images[0].url}
              artist={album.artists[0].name}
              year={album.release_date.substring(0, 4)}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
  },
  search: {
    flexDirection: "row",
    backgroundColor: "lightgray",
    margin: 20,
    padding: 10,
    borderRadius: 20,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default SearchScreen;
