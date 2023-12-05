import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";

import axios from "axios";
import { useCurrentUser } from "../UserContext";
import FriendButton from "../components/FriendsList/FriendButton";

const FollowingPage = () => {
  const [followingList, setFollowingList] = useState([]);
  const currentUser = useCurrentUser();
  const userId = currentUser ? currentUser.uid : "No user";

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/user/following?userId=${userId}`
        );
        setFollowingList(response.data);
      } catch (error) {
        console.error("Error fetching friends:", error);
      }
    };

    fetchFriends();
  }, []);

  return (
    <SafeAreaView>
      <Text>Following Page</Text>
      <ScrollView>
        {followingList.map((friend, index) => (
          <FriendButton key={index} friend={friend} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FollowingPage;
