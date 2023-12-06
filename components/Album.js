import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import RatingDropdown from "./RatingDropdown";
import { useNavigation } from "@react-navigation/native";
import { useCurrentUser } from "../UserContext";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import axios from "axios";

const Album = ({ albumId, name, image, artist, year }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(null);
  const [email, setEmail] = useState();
  const currentUser = useCurrentUser();
  const userId = currentUser ? currentUser.uid : "No user";
  const navigation = useNavigation();

  useEffect(() => {
    const auth = getAuth();
    setEmail(auth.currentUser.email);
  }, []);

  useEffect(() => {
    const fetchExistingRating = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/user/getAlbumRating",
          {
            params: { albumId, userId },
          }
        );
        setRating(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchExistingRating();
  }, [albumId, userId]);

  useEffect(() => {
    if (rating !== null) {
      handleRating();
    }
  }, [rating]);

  const handleRating = async () => {
    try {
      await axios.post("http://localhost:3001/music/addAlbum", {
        albumId: albumId,
      });
      await axios.post("http://localhost:3001/music/changeRating", {
        albumId: albumId,
        rating: rating,
        email: email,
        userId: userId,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const changeRating = (index) => {
    if (index == rating) {
      setRating(0);
    } else {
      setRating(index);
    }
  };

  const toAlbum = () => {
    navigation.navigate("AlbumDetails", {
      albumId,
      name,
      image,
      artist,
      year,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toAlbum}>
      <View style={styles.albumInfo}>
        <Image style={styles.albumImage} source={{ uri: image }} />
        <View style={styles.text}>
          <Text>{name}</Text>
          <Text style={styles.artist}>{artist}</Text>
        </View>
      </View>
      <RatingDropdown
        albumId={albumId}
        isOpen={isOpen}
        rating={rating}
        changeRating={changeRating}
        handleOpen={handleOpen}
      />
    </TouchableOpacity>
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
