import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import AlbumDetailsScreen from "./AlbumDetailsScreen";

const HomeScreen = () => {
  const [newReleases, setNewReleases] = useState([]);
  const [selected, setSelected] = useState(null);

  const getNewReleases = async () => {
    const res = await axios.get("http://localhost:3001/music/getNewReleases");
    setNewReleases(res.data.albums.items);
  };

  useEffect(() => {
    getNewReleases();
  }, []);

  if (selected) {
    return (
      <AlbumDetailsScreen
        id={selected.id}
        name={selected.name}
        image={selected.images[0].url}
        artist={selected.artists[0].name}
        year={selected.release_date.substring(0, 4)}
        onBack={() => setSelected(null)}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>noted.</Text>
      <View style={styles.display}>
        <Text style={styles.header}>New Releases</Text>
        <ScrollView horizontal={true}>
          {newReleases?.map((album, index) => (
            <TouchableOpacity
              key={index}
              style={{ marginRight: 20 }}
              onPress={() => setSelected(album)}
            >
              <Image
                style={{ height: 100, width: 100 }}
                source={{ uri: album.images[0].url }}
              />
              <Text style={{ color: "white", width: 100 }}>{album.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
  },
  display: {
    marginHorizontal: 10,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  header: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
  },
});

export default HomeScreen;
