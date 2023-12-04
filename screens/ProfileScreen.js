import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const ProfileScreen = () => {
const navigation = useNavigation();
const toYourAlbums = () => {
  navigation.navigate("YourAlbums");
}
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <View style={styles.div}>
      <View style={styles.container}>
        <View style={styles.div}>
          <View style={styles.ellipse} />
          <View style={styles.overlap}>
            <View style={styles.overlapGroup}>
            <Text style={styles.textWrapper}>username</Text>
              <Text style={styles.textWrapper2}>00 followers</Text>
              <Text style={styles.textWrapper3}>00 following</Text>
              <TouchableOpacity style={styles.editProfileButton}>
                <View style={styles.overlap2}>
                  <View style={styles.rectangle} />
                  <Text style={styles.textWrapper4}>SIGN OUT</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.overlapWrapper}>
              <View style={styles.overlap2}>
                <View style={styles.rectangle} />
                <Text style={styles.textWrapper4}>EDIT PROFILE</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.yourFavoriteAlbums}>
            <View style={styles.overlapGroup2}>
              <View style={styles.rectangle2} />
              <View style={styles.rectangle3} />
              <View style={styles.rectangle4} />
              <View style={styles.rectangle5} />
              <View style={styles.rectangle6} />
              <Text style={styles.textWrapper5}>Your Favorite Albums</Text>
            </View>
          </View>
          <View style={styles.yourAlbumsOfThe}>
            <View style={styles.overlap3}>
              <View style={styles.group}>
                <View style={styles.rectangle7} />
                <View style={styles.rectangle8} />
                <View style={styles.rectangle9} />
                <View style={styles.rectangle10} />
                <View style={styles.rectangle11} />
                </View>
                <Text style={styles.textWrapper5}>Recent Reviews</Text>
              </View>
            </View>
            <View style={styles.overlap4}>
              <View style={styles.divWrapper}>
                <View style={styles.overlap5}>
                  <View style={styles.frame}>
                    <View style={styles.rectangle12} />
                    <View style={styles.rectangle12} />
                    <View style={styles.rectangle12} />
                    <View style={styles.rectangle12} />
                    <View style={styles.rectangle12} />
                  </View>
                  <Text style={styles.textWrapper5}>Top Artists</Text>
                  <Text style={styles.textWrapper5}>Top Artists</Text>
                </View>
            <Text style={styles.textWrapper6}>Travis Scott</Text>
              <Text style={styles.albumsReviewed}>Albums Reviewed: 0</Text>
              <Text style={styles.albumsReviewed}>Average Rating: 0.0</Text>
            <Text style={styles.textWrapper6}>Travis Scott</Text>
              <Text style={styles.albumsReviewed}>Albums Reviewed: 0</Text>
              <Text style={styles.albumsReviewed}>Average Rating: 0.0</Text>
            <Text style={styles.textWrapper6}>Travis Scott</Text>
              <Text style={styles.albumsReviewed}>Albums Reviewed: 0</Text>
              <Text style={styles.albumsReviewed}>Average Rating: 0.0</Text>
            <Text style={styles.textWrapper6}>Travis Scott</Text>
              <Text style={styles.albumsReviewed}>Albums Reviewed: 0</Text>
              <Text style={styles.albumsReviewed}>Average Rating: 0.0</Text>
            <Text style={styles.textWrapper6}>Travis Scott</Text>
              <Text style={styles.albumsReviewed}>Albums Reviewed: 0</Text>
              <Text style={styles.albumsReviewed}>Average Rating: 0.0</Text>
            <Text style={styles.textWrapper6}>Travis Scott</Text>
              <Text style={styles.albumsReviewed}>Albums Reviewed: 0</Text>
              <Text style={styles.albumsReviewed}>Average Rating: 0.0</Text>
            <Text style={styles.textWrapper6}>Travis Scott</Text>
              <Text style={styles.albumsReviewed}>Albums Reviewed: 0</Text>
              <Text style={styles.albumsReviewed}>Average Rating: 0.0</Text>
            </View>
            </View>
            <View style={styles.overlap6}>
              <Text style={styles.textWrapper11}>Your Reviews</Text>
              <Text style={styles.textWrapper12}>Liked Reviews</Text>
              <TouchableOpacity onPress={toYourAlbums}>
                <Text style={styles.textWrapper13}>Your Albums</Text>
              </TouchableOpacity>
              <Text style={styles.textWrapper14}>Your Lists</Text>
              <Text style={styles.textWrapper15}>Want to Listen</Text>
            </View>
            <View style={styles.overlap7}>
              <Text style={styles.textWrapper16}>0</Text>
              <View style={styles.overlap8}>
                <Text style={styles.textWrapper17}>10</Text>
                <View style={styles.imgPlaceholder} />
                <Text style={styles.textWrapper18}>RATINGS</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );

};

export default ProfileScreen;

const styles = StyleSheet.create({

  scrollView: {
    flex: 1,
  },

  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  div: {
    backgroundColor: "#ffffff",
    height: 850,
    overflow: "hidden",
    position: "relative",
    width: 375,
  },
  ellipse: {
    backgroundColor: "#d9d9d9",
    borderRadius: 38,
    height: 76,
    left: 23,
    position: "absolute",
    top: 30,
    width: 76,
  },
  overlap: {
    height: 48,
    left: 117,
    position: "absolute",
    top: 51,
    width: 232,
  },
  overlapGroup: {
    height: 48,
    left: 0,
    position: "absolute",
    top: 0,
    width: 232,
  },
  textWrapper: {
    color: "#000000",
    fontFamily: "Inter-Bold",
    fontSize: 12,
    fontWeight: "700",
    left: 0,
    letterSpacing: 0,
    lineHeight: "normal",
    position: "absolute",
    top: 0,
    width: 65,
  },
  textWrapper2: {
    color: "#000000",
    fontFamily: "Inter-Light",
    fontSize: 10,
    fontWeight: "300",
    left: 0,
    letterSpacing: 0,
    lineHeight: "normal",
    position: "absolute",
    top: 22,
    width: 131,
  },
  textWrapper3: {
    color: "#000000",
    fontFamily: "Inter-Light",
    fontSize: 10,
    fontWeight: "300",
    left: 68,
    letterSpacing: 0,
    lineHeight: "normal",
    position: "absolute",
    top: 22,
    width: 131,
  },
  editProfileButton: {
    height: 14,
    left: 172,
    position: "absolute",
    top: 22,
    width: 60,
  },
  overlap2: {
    height: 14,
    position: "relative",
    width: 58,
  },
  rectangle: {
    backgroundColor: "#d9d9d9",
    borderRadius: 35,
    height: 14,
    left: 4,
    position: "absolute",
    top: 0,
    width: 50,
  },
  textWrapper4: {
    color: "#504d4d",
    fontFamily: "Inter-Medium",
    fontSize: 5,
    fontWeight: "500",
    height: 12,
    left: 0,
    letterSpacing: 0,
    lineHeight: "normal",
    position: "absolute",
    textAlign: "center",
    top: 1,
    width: 58,
  },

  imgPlaceholder: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: '#CCCCCC',
  },
  
  overlapWrapper: {
    all: "unset",
    boxSizing: "border-box",
    height: 14,
    left: 172,
    position: "absolute",
    top: 4,
    width: 60,
  },
  yourFavoriteAlbums: {
    height: 81,
    left: 23,
    position: "absolute",
    top: 130,
    width: 359,
  },

overlapGroup2: {
  height: 81,
  position: "relative",
  width: 357,
},

rectangle2: {
  backgroundColor: "#d9d9d9",
  height: 60,
  left: 198,
  position: "absolute",
  top: 21,
  width: 60,
},

rectangle3: {
  backgroundColor: "#d9d9d9",
  height: 60,
  left: 264,
  position: "absolute",
  top: 21,
  width: 60,
},

rectangle4: {
  backgroundColor: "#d9d9d9",
  height: 60,
  left: 66,
  position: "absolute",
  top: 21,
  width: 60,
},

rectangle5: {
  backgroundColor: "#d9d9d9",
  height: 60,
  left: 0,
  position: "absolute",
  top: 21,
  width: 60,
},

rectangle6: {
  backgroundColor: "#d9d9d9",
  height: 60,
  left: 132,
  position: "absolute",
  top: 21,
  width: 60,
},

textWrapper5: {
  color: "#000000",
  fontFamily: "Inter-Bold",
  fontSize: 12,
  fontWeight: 700,
  left: 0,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  top: 0,
  width: 357,
},

yourAlbumsOfThe: {
  height: 82,
  left: 23,
  position: "absolute",
  top: 230,
  width: 359,
},

overlap3: {
  height: 82,
  position: "relative",
  width: 357,
},

group: {
  height: 60,
  left: 0,
  position: "absolute",
  top: 22,
  width: 324,
},

rectangle7: {
  backgroundColor: "#d9d9d9",
  height: 60,
  left: 264,
  position: "absolute",
  top: 0,
  width: 60,
},

rectangle8: {
  backgroundColor: "#d9d9d9",
  height: 60,
  left: 198,
  position: "absolute",
  top: 0,
  width: 60,
},

rectangle9: {
  backgroundColor: "#d9d9d9",
  height: 60,
  left: 66,
  position: "absolute",
  top: 0,
  width: 60,
},

rectangle10: {
  backgroundColor: "#d9d9d9",
  height: 60,
  left: 0,
  position: "absolute",
  top: 0,
  width: 60,
},

rectangle11: {
  backgroundColor: "#d9d9d9",
  height: 60,
  left: 132,
  position: "absolute",
  top: 0,
  width: 60,
},

overlapGroupWrapper: {
  height: 82,
  left: 23,
  position: "absolute",
  top: 332,
  width: 359,
},

overlap4: {
  height: 347,
  left: 119,
  position: "absolute",
  top: 523,
  width: 361,
},

divWrapper: {
  height: 347,
  left: 0,
  position: "absolute",
  top: 0,
  width: 361,
},

overlap5: {
  height: 347,
  position: "relative",
  width: 357,
},

frame: {
  alignItems: "flex-start",
  display: "inline-flex",
  flexDirection: "column",
  gap: 6,
  left: 0,
  position: "absolute",
  top: 23,
},

rectangle12: {
  backgroundColor: "#d9d9d9",
  height: 60,
  position: "relative",
  width: 60,
},

textWrapper6: {
  color: "#000000",
  fontFamily: "Inter-Bold",
  fontSize: 10,
  fontWeight: "700",
  left: 73,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  top: 35,
  width: 77,
},

albumsReviewed: {
  color: "#000000",
  fontFamily: "Inter-Regular",
  fontSize: 7,
  fontWeight: "400",
  left: 74,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  top: 49,
  width: 127,
},

textWrapper7: {
  color: "#000000",
  fontFamily: "Inter-Bold",
  fontSize: 10,
  fontWeight: "700",
  left: 73,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  top: 100,
  width: 77,
},

p: {
  color: "#000000",
  fontFamily: "Inter-Regular",
  fontSize: 7,
  fontWeight: "400",
  left: 74,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  top: 114,
  width: 127,
},

textWrapper8: {
  color: "#000000",
  fontFamily: "Inter-Bold",
  fontSize: 10,
  fontWeight: "700",
  left: 73,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  top: 166,
  width: 77,
},

albumsReviewed2: {
  color: "#000000",
  fontFamily: "Inter-Regular",
  fontSize: 7,
  fontWeight: "400",
  left: 74,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  top: 180,
  width: 127,
},

textWrapper9: {
  color: "#000000",
  fontFamily: "Inter-Bold",
  fontSize: 10,
  fontWeight: "700",
  left: 73,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  top: 232,
  width: 77,
},

albumsReviewed3: {
  color: "#000000",
  fontFamily: "Inter-Regular",
  fontSize: 7,
  fontWeight: "400",
  left: 74,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  top: 246,
  width: 127,
},

textWrapper10: {
  color: "#000000",
  fontFamily: "Inter-Bold",
  fontSize: 10,
  fontWeight: "700",
  left: 74,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  top: 297,
  width: 77,
},

albumsReviewed4: {
  color: "#000000",
  fontFamily: "Inter-Regular",
  fontSize: 7,
  fontWeight: "400",
  left: 75,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  top: 311,
  width: 127,
},

overlap6: {
  height: 117,
  left: -21,
  position: "absolute",
  top: 524,
  width: 114,
},

textWrapper11: {
  color: "#000000",
  fontFamily: "Inter-Medium",
  fontSize: 10,
  fontWeight: "500",
  left: 37,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  textAlign: "right",
  top: 19,
  width: 77,
},

textWrapper12: {
  color: "#000000",
  fontFamily: "Inter-Medium",
  fontSize: 10,
  fontWeight: "500",
  left: 37,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  textAlign: "right",
  top: 83,
  width: 77,
},

textWrapper13: {
  color: "#000000",
  fontFamily: "Inter-Medium",
  fontSize: 10,
  fontWeight: "500",
  left: 37,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  textAlign: "right",
  top: 0,
  width: 77,
},

textWrapper14: {
  color: "#000000",
  fontFamily: "Inter-Medium",
  fontSize: 10,
  fontWeight: "500",
  left: 34,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  textAlign: "right",
  top: 40,
  width: 80,
},

textWrapper15: {
  color: "#000000",
  fontFamily: "Inter-Medium",
  fontSize: 10,
  fontWeight: "500",
  left: 0,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  textAlign: "right",
  top: 61,
  width: 114,
},
overlap7: {
  height: 84,
  left: -41,
  position: "absolute",
  top: 433,
  width: 388,
},

textWrapper16: {
  color: "#000000",
  fontFamily: "Inter-Medium",
  fontSize: 10,
  fontWeight: "500",
  left: 0,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  textAlign: "right",
  top: 49,
  width: 77,
},

overlap8: {
  height: 84,
  left: 64,
  position: "absolute",
  top: 0,
  width: 324,
},

textWrapper17: {
  color: "#000000",
  fontFamily: "Inter-Medium",
  fontSize: 10,
  fontWeight: "500",
  left: 247,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  textAlign: "right",
  top: 50,
  width: 77,
},

img: {
  height: 48,
  left: 21,
  position: "absolute",
  top: 11,
  width: 283,
},

textWrapper18: {
  color: "#504d4d",
  fontFamily: "Inter-SemiBold",
  fontSize: 8,
  fontWeight: "600",
  height: 12,
  left: 0,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  top: 0,
  width: 54,
},

rectangle13: {
  height: 77,
  left: -5,
  position: "fixed",
  top: 605,
  width: 394,
},

group2: {
  height: 43,
  left: 33,
  position: "fixed",
  top: 615,
  width: 319,
},

rectangle14: {
  backgroundColor: "#d9d9d9",
  height: 43,
  left: 136,
  position: "absolute",
  top: 0,
  width: 43,
},

rectangle15: {
  backgroundColor: "#d9d9d9",
  height: 43,
  left: 69,
  position: "absolute",
  top: 0,
  width: 43,
},

rectangle16: {
  backgroundColor: "#d9d9d9",
  height: 43,
  left: 276,
  position: "absolute",
  top: 0,
  width: 43,
},

rectangle17: {
  backgroundColor: "#d9d9d9",
  height: 43,
  left: 0,
  position: "absolute",
  top: 0,
  width: 43,
},

rectangle18: {
  backgroundColor: "#d9d9d9",
  height: 43,
  left: 206,
  position: "absolute",
  top: 0,
  width: 43,
},

});
