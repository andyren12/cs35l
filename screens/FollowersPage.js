import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import axios from "axios";
import { useCurrentUser } from "../UserContext";
import FriendButton from "../components/FriendsList/FriendButton";

const FollowersPage = ({ navigation }) => {
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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={25} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Followers Page</Text>
        <View style={styles.headerRight} />
      </View>
      <ScrollView>
        {followersList.map((friend, index) => (
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
    justifyContent: 'space-between', // Distribute space evenly between elements
    padding: 5,
  },
  headerLeft: {
    flex: 1, // Make sure it takes up space so that the title remains centered
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRight: {
    flex: 1, // Same as headerLeft to balance the layout
  },
});

export default FollowersPage;