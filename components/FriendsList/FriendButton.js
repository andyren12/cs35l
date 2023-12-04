import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";

const FriendButton = ({ friend }) => {
  return (
    <View style={styles.container}>
      <Text>{friend.name}</Text>
      <Pressable>
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
