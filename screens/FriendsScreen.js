import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { FlashList } from "@shopify/flash-list";

const DATA = [
  {
    title: "Friend 1",
  },
  {
    title: "Friend 2",
  },
];

const FriendsScreen = () => {
  const [input, setInput] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <Text>Friends</Text>
      <TextInput
        placeholder="Add or search friends"
        onChangeText={(text) => setInput(text)}
        value={input}
      />
      <FlashList
        data={DATA}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        estimatedItemSize={50}
      />
    </View>
  );
};

export default FriendsScreen;
