import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet, TouchableOpacity, View } from "react-native";
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
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={25} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Following Page</Text>
        <View style={styles.headerRight} />
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
    justifyContent: 'space-between', 
    padding: 5,
  },
  headerLeft: {
    flex: 1, 
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRight: {
    flex: 1, 
  },
});

export default FollowingPage;
