import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import RatingDropdown from "./RatingDropdown";

const Album = ({ name, image, artist }) => {
  return (
    <View style={styles.container}>
      <View style={styles.albumInfo}>
        <Image style={styles.albumImage} source={{ uri: image }} />
        <View style={styles.text}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.artist}>{artist}</Text>
        </View>
      </View>
      <RatingDropdown />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  albumInfo: {
    flexDirection: "row",
  },
  albumImage: {
    marginRight: 10,
    width: 50,
    height: 50,
  },
  text: {
    justifyContent: "center",
  },
  name: {
    color: "white",
  },
  artist: {
    color: "gray",
    fontSize: 12,
  },
});

export default Album;
