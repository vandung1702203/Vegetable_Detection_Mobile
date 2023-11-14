import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text } from "react-native";

import Header from "../../../components/header/header";
import FormLogin from "./formLogin";
import Footer from "./footer";

export default function Login() {
    return (
        <View style={styles.container}>
            <Header/>
            <FormLogin/>
            <Footer/>
            <StatusBar backgroundColor="#5AA162"></StatusBar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5AA162",
        width: "100%",
        height: "100%",
        justifyContent : 'center',
        alignItems : 'center',
        paddingHorizontal : 10,
    },
});
