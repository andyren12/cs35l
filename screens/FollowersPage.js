import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";

import axios from "axios";
import { useCurrentUser } from "../UserContext";
import FriendButton from "../components/FriendsList/FriendButton";

const FollowersPage = () => {
  const [followersList, setFollowersList] = useState([]);
  const currentUser = useCurrentUser();
  const userId = currentUser ? currentUser.uid : "No user";

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/user/followers?userId=${userId}`
        );
        setFollowersList(response.data);
      } catch (error) {
        console.error("Error fetching friends:", error);
      }
    };

    fetchFriends();
  }, []);

  return (
    <SafeAreaView>
      <Text>Followers Page</Text>
      <ScrollView>
        {followersList.map((friend, index) => (
          <FriendButton key={index} friend={friend} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FollowersPage;
