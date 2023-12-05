import { useState } from "react";
import { TextInput, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import FriendButton from "../components/FriendsList/FriendButton";

const DATA = [
	{
		name: "Friend 3",
		friendId: "StFg8Dlh2AMCCoubgWzat3M48oq2",
		isFriend: false,
	},
	{
		name: "Friend 2",
		isFriend: true,
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
