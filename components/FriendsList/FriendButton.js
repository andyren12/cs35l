import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { useCurrentUser } from "../../UserContext";
import axios from "axios";

const FriendButton = ({ friend }) => {
  const currentUser = useCurrentUser();
  const userId = currentUser ? currentUser.uid : "No user";

  const handlePress = async () => {
    if (!userId) {
      console.log("No user ID found");
      return;
    }

    const apiEndpoint = friend.isFriend
      ? "http://localhost:3001/user/removeFriend"
      : "http://localhost:3001/user/addFriend";

    try {
      console.log(userId);
      const response = axios.post(apiEndpoint, {
        userId: userId,
        friendId: friend.friendId,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{friend.name}</Text>
      <Pressable onPress={handlePress}>
        {friend.isFriend ? <Text>Add Friend</Text> : <Text>Remove Friend</Text>}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
});

export default FriendButton;
