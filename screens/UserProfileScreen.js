import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useCurrentUser } from "../UserContext";
import AlbumPreview from "../components/AlbumPreview";
import MyBarChart from "../components/MyBarChart";
import axios from "axios";
import AlbumDetailsScreen from "./AlbumDetailsScreen";
import Icon from "react-native-vector-icons/Ionicons";
import LoginScreen from "./LoginScreen";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";


const UserProfileScreen = ({ route }) => {
  const navigation = useNavigation();
  const [userDetails, setUserDetails] = useState(null);
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [topAlbumIds, setTopAlbumIds] = useState([]);
  const [topAlbums, setTopAlbums] = useState([]);
  const [albums, setAlbums] = useState();
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const currentUser = useCurrentUser();
  const userId = route.params ? route.params.userId : currentUser.uid;

  useFocusEffect(
    React.useCallback(() => {
      fetchUserDetails();
      fetchUserFollowers();
      fetchUserFollowing();
      fetchUserAlbums();
    }, [userId])
  );

  useEffect(() => {
    setTopAlbumArray();
  }, [topAlbumIds]);

  const fetchUserDetails = async () => {
    if (userId) {
      try {
        const res = await axios.get(
          `http://localhost:3001/user/getUser?userId=${userId}`
        );
        setUserDetails(res.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    }
  };
  const fetchUserFollowing = async () => {
    if (userId) {
      try {
        const res = await axios.get(
          `http://localhost:3001/user/following?userId=${userId}`
        );
        setFollowingCount(res.data.length);
      } catch (error) {
        console.error("Error fetching user following:", error);
      }
    }
  };
  const fetchUserFollowers = async () => {
    if (userId) {
      try {
        const res = await axios.get(
          `http://localhost:3001/user/followers?userId=${userId}`
        );
        setFollowerCount(res.data.length);
      } catch (error) {
        console.error("Error fetching user followers: ", error);
      }
    }
  };
  const fetchUserAlbums = async () => {
    if (userId) {
      try {
        const res = await axios.get(
          `http://localhost:3001/user/getAlbums?userId=${userId}`
        );
        const albumList = res.data;
        setAlbums(albumList);
        let tempAlbumIds = [];
        for (let i = 5; i > 0; i--) {
          if (albumList[i]) {
            const albums = albumList[i];
            for (const names of albums) {
              tempAlbumIds.push(names);
            }
          }
        }
        setTopAlbumIds(tempAlbumIds.slice(0, 8));
      } catch (error) {
        console.error("Error fetching user albums: ", error);
      }
    }
  };

  const setTopAlbumArray = async () => {
    try {
      let tempAlbums = [];
      for (let i = 0; i < topAlbumIds.length; i++) {
        const res = await axios.get(
          `http://localhost:3001/music/getAlbum?albumId=${topAlbumIds[i]}`
        );
        tempAlbums.push(res.data);
      }
      setTopAlbums(tempAlbums);
    } catch (error) {
      console.error("Error retrieving album information: ", error);
    }
  };

  const handleSignout = () => {
	signOut(auth);
	navigation.navigate("Login");
  }

//   onAuthStateChanged(auth, (user) => {
// 	if (user) {
// 	} else {
// 	  navigation.navigate("Login");
// 	}
//   });

  if (selectedAlbum) {
    return (
      <AlbumDetailsScreen
        id={selectedAlbum.id}
        name={selectedAlbum.name}
        image={selectedAlbum.images[0].url}
        artist={selectedAlbum.artists[0].name}
        year={selectedAlbum.release_date.substring(0, 4)}
        onBack={() => setSelectedAlbum(null)}
      />
    );
  }
  return (
    <SafeAreaView style={styles.profileContainer}>
      {userDetails ? (
        <ScrollView>
			{currentUser.uid === userId ? (
				<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
				<Text style={styles.headerText}>profile.</Text>
					<View style={{position: "absolute", right: 10}}>
						<TouchableOpacity onPress={handleSignout}>
                  		<Icon name="ellipsis-horizontal" size={25} color="white" />
                		</TouchableOpacity>
					</View>
				</View>
			) : (
				<View style={styles.header}>
        			<View style={{ flexDirection: "row"}}>
          				<TouchableOpacity onPress={() => navigation.goBack()}>
            			<Icon name="chevron-back" size={25} color="white" />
          				</TouchableOpacity>
						<View style={{ alignItems: "center", width: "88%" }}>
						<Text style={styles.headerText}>profile.</Text>
						</View>
						  <View style={styles.headerRight} />
       				</View>
     	 		</View>
			)}
          <Text style={{ color: "white", textAlign: "center" }}>
            {userDetails.email}
          </Text>
          <View style={styles.followContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("FollowersPage", { userId })}
            >
              <Text style={styles.followInfo}>followers: {followerCount}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("FollowingPage", { userId })}
            >
              <Text style={styles.followInfo}>following: {followingCount}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ margin: 15, marginTop: 20, padding: 5 }}>
            <Text style={{ color: "white", marginBottom: 5 }}>
              Your Top Albums
            </Text>
            <View style={styles.topAlbums}>
              {topAlbums.map((album) => (
                <TouchableOpacity
                  key={album.id}
                  onPress={() => setSelectedAlbum(album)}
                >
                  <AlbumPreview image={album.images[0].url} name={album.name} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={{ margin: 15, marginTop: 30, padding: 5 }}>
            <Text style={{ color: "white", marginBottom: 5 }}>
              Your Album Rating Statistics:
            </Text>
            <MyBarChart ratings={albums} />
          </View>
        </ScrollView>
      ) : (
        <Text style={{ color: "white", fontSize: 30 }}>Loading Profile...</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: "black",
    flexDirection: "column",
    height: "100%",
  },
  headerText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    borderColor: "black",
    borderWidth: 0,
    marginBottom: 10,
	textAlign: "center"
  },
  followContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  followInfo: {
    color: "white",
    textAlign: "center",
  },
  topAlbums: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default UserProfileScreen;
