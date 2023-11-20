import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import InputField from "../components/InputField";

export default function LoginScreen() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false); //use later when database implemented
    const [invalidLogin, setInvalidLogin] = useState(false); //use later when database implemented
    const [isVerified, setIsVerified] = useState(true); //use later when database implemented
    const [loginButtonDisabled, setLoginButtonDisabled] = useState(true);

    const navigation = useNavigation();

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0){
            setLoginButtonDisabled(false);
        }
    }, [user]);

    const onLogin = async() =>{ //to be implemented later
        try{
            setLoading(true);
            //code
            setLoading(false);
        }
        catch{

        }
    }
    return (
        <View>
            <Text>{loading ? "Loading..." : "Log In"}</Text>
            <InputField
                label="Email"
                value={user.email}
                onChangeText={text => setUser({...user, email: text})}
                placeholder="Type email here..."
            />
            <InputField
                label="Password"
                value={user.password}
                onChangeText={text => setUser({...user, password: text})}
                placeholder={"Type password here..."}
            />
            <Button //implement later
                title="Forgot Password?"
                onPress={() => navigation.navigate("Forgot Password")} //page to be created later
            />
            {invalidLogin && (
                <Text>Email or password is incorrect!</Text>
            )}
            {!isVerified && (
                <Text>Account is not verified!</Text>
            )}
            <Button
                title="Log In"
                onPress={onLogin}
                disabled={loginButtonDisabled}
            />
            <View>
                <Text>Don't Have an Account? Sign Up</Text>
                <Button
                    label=" here"
                    onPress={navigation.navigate("Signup")}
                />
            </View>
        </View>
    )
}