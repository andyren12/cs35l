import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-chart-kit";
import Icon from "react-native-vector-icons/FontAwesome";

const MyBarChart = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99],
      },
    ],
  };

  const chartConfig = {
    backgroundColor: "transparent",
    backgroundGradientFrom: "transparent",
    backgroundGradientTo: "transparent",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
      padding: 30,
    },
  };

  return (
    <View style={{ marginLeft: -20, backgroundColor: "transparent" }}>
      <BarChart
        data={data}
        width={334}
        height={220}
        chartConfig={chartConfig}
        withHorizontalLabels={false}
        withInnerLines={false}
        showBarTops={true}
        showValuesOnTopOfBars={true}
      />
    </View>
  );
};

const AlbumDetailsScreen = ({ id, name, image, artist, year, onBack }) => {
  const navigation = useNavigation();
  const getAlbumRatings = async () => {
    const res = await axios.get("http://localhost:3001/getAlbumRatings", {
      params: { id },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Icon name="chevron-left" size={16} color="white" onPress={onBack} />
      <View style={styles.albumInfo}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>
            {name}&nbsp;
            <Text style={styles.year}>{year}</Text>
          </Text>
          <Text style={styles.artist}>{artist}</Text>
        </View>
        <View>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
      </View>
      <View style={styles.rating}>
        <Text>YOUR RATING: </Text>
      </View>
      <MyBarChart />
    </SafeAreaView>
  );
};

export default AlbumDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    gap: 20,
  },
  albumInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  textContainer: {
    width: "70%",
  },
  name: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  year: {
    fontWeight: "normal",
    fontSize: 12,
    color: "darkgray",
  },
  artist: {
    color: "gray",
  },
  image: {
    height: 100,
    width: 100,
  },
  rating: {
    backgroundColor: "lightgray",
    alignItems: "center",
    borderRadius: 20,
  },
});
