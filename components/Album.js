import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Album = ({ name, image, artist }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.albumImage} source={{ uri: image }} />
      <View style={styles.text}>
        <Text>{name}</Text>
        <Text style={styles.artist}>{artist}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  albumImage: {
    marginRight: 10,
    width: 50,
    height: 50,
  },
  text: {
    justifyContent: "center",
  },
  artist: {
    color: "gray",
    fontSize: 12,
  },
});

export default Album;
