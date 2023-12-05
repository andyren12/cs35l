import React, { useState, useEffect } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { useCurrentUser } from "../../UserContext";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const FriendButton = ({ friend }) => {
  const currentUser = useCurrentUser();
  const userId = currentUser ? currentUser.uid : "No user";

  const navigation = useNavigation();

  const [friendDetails, setFriendDetails] = useState(null);
  const [isFriend, setIsFriend] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (friend) {
        try {
          const response = await axios.get(
            `http://localhost:3001/user/getUser?userId=${friend}`
          );
          setFriendDetails(response.data);
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      }
    };
    fetchUserDetails();
  }, [friend]);

  useEffect(() => {
    const fetchUserFriendDetails = async () => {
      if (userId && friend) {
        try {
          const checkFriendResponse = await axios.get(
            `http://localhost:3001/user/checkFriend?userId=${userId}&friendId=${friend}`
          );
          setIsFriend(checkFriendResponse.data.isFriend);
        } catch (error) {
          console.error("Error checking friend status:", error);
        }
      }
    };

    fetchUserFriendDetails();
  }, [friend]);

  const handlePress = async () => {
    if (!userId) {
      console.log("No user ID found");
      return;
    }

    const apiEndpoint = isFriend
      ? "http://localhost:3001/user/removeFriend"
      : "http://localhost:3001/user/addFriend";

    try {
      const response = axios.post(apiEndpoint, {
        userId: userId,
        friendId: friend,
      });
      setIsFriend(!isFriend);
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  if (!friendDetails) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const navigateToProfile = () => {
    navigation.navigate("UserProfileScreen", { userId: friend });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={navigateToProfile}>
        <Text>{friendDetails.email}</Text>
      </Pressable>
      <Pressable onPress={handlePress}>
        {isFriend ? <Text>Remove Friend</Text> : <Text>Add Friend</Text>}
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
