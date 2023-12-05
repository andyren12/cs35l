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

const SearchScreen = () => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchMode, setSearchMode] = useState("songs");

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
    if (searchMode === "songs") {
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

  return (
    <SafeAreaView>
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
          onPress={() =>
            setSearchMode(searchMode === "songs" ? "friends" : "songs")
          }
          style={styles.switchButton}
        >
          <Text>
            {searchMode === "songs" ? "Switch to Friends" : "Switch to Songs"}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {searchResults.map((item, index) =>
          searchMode === "songs" ? (
            <Album
              key={index}
              name={item.name}
              image={item.images[0].url}
              artist={item.artists[0].name}
            />
          ) : (
            <FriendButton key={index} friend={item} />
          )
        )}
      </ScrollView>
    </SafeAreaView>
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
  input: {
    flex: 1,
  },
  switchButtonContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  switchButton: {
    // Style for switch button
  },
});

export default SearchScreen;
