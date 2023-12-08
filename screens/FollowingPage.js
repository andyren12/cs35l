import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'; 

import axios from "axios";
import { useCurrentUser } from "../UserContext";
import FriendButton from "../components/FriendsList/FriendButton";

const FollowingPage = ({ navigation }) => {
  const [followingList, setFollowingList] = useState([]);
  const currentUser = useCurrentUser();
  const userId = currentUser ? currentUser.uid : "No user";

  console.log(userId);

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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {followingList.map((friend, index) => (
          <FriendButton key={index} friend={friend} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  // Add other styles here as needed
});

export default FollowingPage;
