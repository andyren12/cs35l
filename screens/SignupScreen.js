import { View, Text, StyleSheet, Button } from "react-native";
import { useEffect, useState } from "react";
import InputField from "../components/InputField";

export default function SignupScreen() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false); //use later when database implemented
    const [invalidUsername, setInvalidUsername] = useState(false); //for when username taken
    const [invalidEmail, setInvalidEmail] = useState(true); //for when email taken
    const [signupButtonDisabled, setSignupButtonDisabled] = useState(true);
    
    useEffect(() => {
        if(user.username.length > 0 && user.email.length > 0 && user.password.length > 0 && confirmPassword === user.password){
            setSignupButtonDisabled(false);
        }
    })
    const onSignup = async() =>{ //to be implemented later
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
            <Text>{loading ? "Loading..." : "Signup"}</Text>
            <InputField
                label="Username"
                value={user.username}
                onChangeText={text => setUser({...user, username: text})}
                placeholder="Type username here..."
            />
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
            <InputField
                label="Confirm Password"
                value={confirmPassword}
                onChangeText={text => setConfirmPassword(text)}
                placeholder="Re-type password here..."
            />
            {confirmPassword !== user.password && (
                <Text>Passwords do not match!</Text>
            )}
            {invalidEmail && (
                <Text>An account with that email already exists!</Text>
            )}
            {invalidUsername && (
                <Text>Username is already taken!</Text>
            )}
            <Button
                title="Sign Up"
                onPress={onSignup}
                disabled={signupButtonDisabled}
            />
            <View>
                <Text>Already Have an Account? Log In</Text>
                <Button
                    label=" here"
                    onPress={navigation.navigate("Login")}
                />
            </View>
        </View>
    )
}