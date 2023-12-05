import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import FriendButton from "../components/FriendsList/FriendButton";

const DATA = [
  {
    name: "Friend 3",
    friendId: "Z9uvAlqCr0tW12ZRLHpQ",
    isFriend: true,
  },
  {
    name: "Friend 2",
    isFriend: false,
  },
];

const FriendsScreen = () => {
  const [input, setInput] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="Add or search friends"
        onChangeText={(text) => setInput(text)}
        value={input}
      />
      <FlashList
        data={DATA}
        renderItem={({ item }) => <FriendButton friend={item} />}
        estimatedItemSize={50}
      />
    </View>
  );
};

export default FriendsScreen;
