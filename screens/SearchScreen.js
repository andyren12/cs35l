import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import axios from "axios";

const SearchScreen = () => {
  const [input, setInput] = useState();
  const [albums, setAlbums] = useState();

  const handleSubmit = async () => {
    const res = await axios.get("http://localhost:3001/search", {
      params: { query: input },
    });
    console.log(res.data.albums.items);
  };

  return (
    <View>
      <TextInput
        placeholder="search"
        onChangeText={(text) => setInput(text)}
        value={input}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchScreen;
