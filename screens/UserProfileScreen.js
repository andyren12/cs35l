import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const UserProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Text>zippyzhulover12</Text>
        <TouchableOpacity onPress={() => navigation.navigate("FollowersPage")}>
          <Text>followers</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("FollowingPage")}>
          <Text>following</Text>
        </TouchableOpacity>
      </View>
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
