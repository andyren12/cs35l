import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCurrentUser } from "../UserContext";
import axios from "axios";

const UserProfileScreen = ({ route }) => {
  const navigation = useNavigation();
  const [userDetails, setUserDetails] = useState(null);

  const currentUser = useCurrentUser();
  const userId = route.params ? route.params.userId : currentUser.uid;

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (userId) {
        try {
          const response = await axios.get(
            `http://localhost:3001/user/getUser?userId=${userId}`
          );
          setUserDetails(response.data);
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      }
    };
    fetchUserDetails();
  }, [userId]);

  return (
    <SafeAreaView style={styles.profileContainer}>
      {userDetails ? (
        <View>
          <Text>{userDetails.email}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("FollowersPage")}
          >
            <Text>followers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("FollowingPage")}
          >
            <Text>following</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UserProfileScreen;
