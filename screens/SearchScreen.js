import { useState, useEffect } from "react";
import {
  SafeAreaView,
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
import FriendButton from "../components/FriendsList/FriendButton";
import AlbumDetailsScreen from "./AlbumDetailsScreen";

const SearchScreen = () => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchMode, setSearchMode] = useState("albums");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (input) {
        handleSubmit();
      } else {
        setSearchResults([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [input]);

  const handleSubmit = async () => {
    if (searchMode === "albums") {
      const res = await axios.get("http://localhost:3001/search", {
        params: { query: input },
      });
      setSearchResults(res.data.albums.items);
    } else {
      const response = await axios.get(
        `http://localhost:3001/user/searchUsers?query=${input}`
      );
      setSearchResults(response.data);
    }
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
          placeholder={`Search ${searchMode}`}
          onChangeText={(text) => setInput(text)}
          value={input}
          onSubmitEditing={handleSubmit}
          style={styles.input}
        />
      </View>

      <View style={styles.switchButtonContainer}>
        <TouchableOpacity
          onPress={() => {
            setSearchMode(searchMode === "albums" ? "friends" : "albums");
            setSearchResults([]), setInput("");
          }}
          style={styles.switchButton}
        >
          <Text style={{ color: "white", alignSelf: "center" }}>
            {searchMode === "albums" ? "Switch to Friends" : "Switch to Albums"}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {searchResults.map((item, index) =>
          searchMode === "albums" ? (
            <TouchableOpacity
              style={styles.album}
              key={item.id}
              onPress={() => setSelected(item)}
            >
              <Album
                albumId={item.id}
                name={item.name}
                image={item.images[0].url}
                artist={item.artists[0].name}
                year={item.release_date.substring(0, 4)}
              />
            </TouchableOpacity>
          ) : (
            <FriendButton key={index} friend={item} />
          )
        )}
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
