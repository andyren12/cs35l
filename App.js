import { app } from "./firebase.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { UserProvider } from "./UserContext.js";
import WriteReviewActually, {
  WriteReview,
} from "./screens/WriteReviewActually";
import WantToListen from "./screens/WantToListen";
import YourAlbumsScreen from "./screens/YourAlbumsScreen";
import YourListsPage from "./screens/YourListsPage";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import FriendsScreen from "./screens/FriendsScreen.js";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SignupScreen from "./screens/SignupScreen";
import UserProfileScreen from "./screens/UserProfileScreen.js";
import FollowingPage from "./screens/FollowingPage.js";
import FollowersPage from "./screens/FollowersPage.js";

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Write Review"
        component={WriteReviewActually}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfileScreen}
        options={{ headerShown: false }}
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
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
