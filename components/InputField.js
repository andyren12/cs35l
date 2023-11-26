import { View, Text, TextInput, StyleSheet } from "react-native";

export default function InputField({label, value, onChangeText, placeholder}){
    return(
        <View style={styles.container}>
            <Text>{label}</Text>
            <TextInput
                style={styles.textInput}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
    },
    textInput:{

    }
});