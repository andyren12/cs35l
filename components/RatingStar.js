import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const RatingStar = ({ filled, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Icon name="star" color={filled ? "#f7d148" : "black"} size={20} />
		</TouchableOpacity>
	);
};

export default RatingStar;
