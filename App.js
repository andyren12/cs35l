import { app } from "./firebase.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "./screens/SearchScreen";
import { UserProvider } from "./UserContext.js";
import SignupScreen from "./screens/SignupScreen";
import WriteReviewActually from "./screens/WriteReviewActually";
import WantToListen from "./screens/WantToListen";
import YourAlbumsScreen from "./screens/YourAlbumsScreen";
import YourListsPage from "./screens/YourListsPage";
import HomeScreen from "./screens/HomeScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import UserProfileScreen from "./screens/UserProfileScreen.js";
import FollowingPage from "./screens/FollowingPage.js";
import FollowersPage from "./screens/FollowersPage.js";
import Icon from "react-native-vector-icons/FontAwesome.js";

const Tab = createBottomTabNavigator();

function Main() {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: "#e91e63",
				tabBarInactiveTintColor: "gray",
				labelStyle: {
					fontSize: 12,
				},
				tabBarStyle: {
					backgroundColor: "black",
					borderTopColor: "transparent",
					height: 50,
					justifyContent: "center",
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Icon name="home" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Search"
				component={SearchScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Icon name="search" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={UserProfileScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Icon name="user" color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<UserProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Login"
						component={LoginScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Signup"
						component={SignupScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Main"
						component={Main}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="YourAlbums"
						component={YourAlbumsScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="WantToListen"
						component={WantToListen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="YourLists"
						component={YourListsPage}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="FollowersPage"
						component={FollowersPage}
						options={{ headerShown: true }}
					/>
					<Stack.Screen
						name="FollowingPage"
						component={FollowingPage}
						options={{ headerShown: true }}
					/>
					<Stack.Screen
						name="UserProfileScreen"
						component={UserProfileScreen}
						options={{ headerShown: true }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</UserProvider>
	);
}
