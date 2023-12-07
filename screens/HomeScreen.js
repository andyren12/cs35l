import React from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const SquareDisplay = ({ index, text }) => (
  <View style={styles.squareDisplay}>
    <View style={styles.squarePlaceholder} />
  </View>
);

const Section = ({ title }) => <Text style={styles.sectionTitle}>{title}</Text>;

const HomeScreen = () => {
  const renderSquareDisplay = ({ item, index }) => (
    <SquareDisplay index={index} text={item.category} />
  );
  const categories = [
    {
      category: "Popular this Month",
      data: Array(5).fill({ category: "Popular this Month" }),
    },
    {
      category: "New Releases",
      data: Array(5).fill({ category: "New Releases" }),
    },
    {
      category: "Popular with Friends",
      data: Array(10).fill({ category: "Popular with Friends" }),
    },
    {
      category: "New from Friends",
      data: Array(10).fill({ category: "New from Friends" }),
    },
  ];

  return (
    <SafeAreaView style={styles.homePage}>
      <Text style={styles.notedTitle}>Noted.</Text>
      <View style={styles.line} />

      <ScrollView style={styles.div}>
        {categories.map((category) => (
          <View key={category.category}>
            <Section title={category.category} />
            <FlatList
              horizontal
              data={category.data}
              renderItem={renderSquareDisplay}
              keyExtractor={(item, index) => `${category.category}-${index}`}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homePage: {
    backgroundColor: "#141313",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  div: {
    backgroundColor: "#141313",
    height: 667,
    width: 375,
  },
  notedTitle: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "800",
    marginTop: 20,
    marginBottom: 10,
    marginLeft: -290,
  },
  line: {
    height: 1,
    backgroundColor: "#ffffff",
    width: "95%",
    marginBottom: 20,
  },

  sectionTitle: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 0,
  },
  squareDisplay: {
    alignItems: "center",
    marginRight: 10,
  },
  squarePlaceholder: {
    width: 65,
    height: 65,
    backgroundColor: "#d9d9d9",
    marginBottom: 5,
  },
  squareText: {
    color: "#ffffff",
    fontSize: 12,
  },
  // ... Add other necessary styles ...
});

export default HomeScreen;
