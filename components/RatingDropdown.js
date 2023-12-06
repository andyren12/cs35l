import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import RatingStar from "./RatingStar";

const RatingDropdown = ({ isOpen, handleOpen, rating, changeRating }) => {
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
