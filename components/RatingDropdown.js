import { useEffect, useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { getAuth } from "firebase/auth";
import { useCurrentUser } from "../UserContext";
import axios from "axios";
import Icon from "react-native-vector-icons/Ionicons";
import RatingStar from "./RatingStar";

const RatingDropdown = ({ albumId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState();
  const [email, setEmail] = useState();
  const isInitialRender = useRef(true);
  const currentUser = useCurrentUser();
  const userId = currentUser ? currentUser.uid : "No user";

  useEffect(() => {
    const auth = getAuth();
    setEmail(auth.currentUser.email);
  }, []);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
    } else {
      handleRating();
    }
  }, [rating]);

  const handleRating = async () => {
    try {
      await axios.post("http://localhost:3001/music/add/album", {
        albumId: albumId,
      });
      await axios.post("http://localhost:3001/music/change/rating", {
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

  return (
    <View style={styles.container}>
      {isOpen && (
        <View style={styles.ratingBox}>
          {[1, 2, 3, 4, 5].map((index) => (
            <RatingStar
              key={index}
              filled={index <= rating}
              onPress={() => changeRating(index)}
            />
          ))}
        </View>
      )}
      <TouchableOpacity onPress={handleOpen}>
        <Icon name="ellipsis-vertical" color="#919090" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ratingBox: {
    flexDirection: "row",
  },
});

export default RatingDropdown;
