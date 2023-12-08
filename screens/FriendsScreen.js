import { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import FriendButton from "../components/FriendButton";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

const FriendsScreen = () => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (input) {
        handleSearch();
      } else {
        setSearchResults([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [input]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/user/searchUsers?query=${input}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching search results: ", error);
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
          onPress={handleSearch}
        />
        <TextInput
          placeholder="Add or search friends"
          onChangeText={(text) => setInput(text)}
          value={input}
        />
      </View>
      <ScrollView>
        {searchResults.map((friend, index) => (
          <FriendButton key={index} friend={friend} />
        ))}
        {/* <FlashList
          data={DATA}
          renderItem={({ item }) => <FriendButton friend={item} />}
          estimatedItemSize={50}
        /> */}
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
});

export default FriendsScreen;
