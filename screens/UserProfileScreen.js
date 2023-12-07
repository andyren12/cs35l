import React, { useEffect, useState } from "react";
import {
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	View,
	Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCurrentUser } from "../UserContext";
import AlbumPreview from "../components/AlbumPreview";
import MyBarChart from "../components/MyBarChart";
import axios from "axios";
import AlbumDetailsScreen from "./AlbumDetailsScreen";

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

	useEffect(() => {
		fetchUserDetails();
		fetchUserFollowers();
		fetchUserFollowing();
		fetchUserAlbums();
	}, [userId]);

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
				<View>
					<Text style={styles.headerText}>Profile</Text>
					<Text style={{ color: "white", textAlign: "center" }}>
						{userDetails.email}
					</Text>
					<View style={styles.followContainer}>
						<TouchableOpacity
							onPress={() => navigation.navigate("FollowersPage")}
						>
							<Text style={styles.followInfo}>
								followers: {followerCount}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => navigation.navigate("FollowingPage")}
						>
							<Text style={styles.followInfo}>
								following: {followingCount}
							</Text>
						</TouchableOpacity>
					</View>
					<View style={{ margin: 10, marginTop: 20, padding: 5 }}>
						<Text style={{ color: "white", marginBottom: 5 }}>
							Your Top Albums
						</Text>
						<View style={styles.topAlbums}>
							{topAlbums.map((album) => (
								<TouchableOpacity
									key={album.id}
									onPress={() => setSelectedAlbum(album)}
								>
									<AlbumPreview
										image={album.images[0].url}
										name={album.name}
									/>
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
				</View>
			) : (
				<Text style={{ color: "white", fontSize: 30 }}>
					Loading Profile...
				</Text>
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
		fontSize: 24,
		borderColor: "black",
		borderWidth: 1,
		textAlign: "center",
		marginBottom: 10,
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
