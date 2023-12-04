import { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import RatingStar from "./RatingStar";

const RatingDropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [rating, setRating] = useState(0);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};
	const handleRating = (index) => {
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
							onPress={() => handleRating(index)}
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
