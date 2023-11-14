import { View, StyleSheet, Text, Image } from "react-native";
import Logo from "../../assets/Logo.png"

export default function Header ()
{
    return(
        <View style={styles.container}>
            <Image source={Logo} style = {styles.logo}/>
            <View>
                <Text style = {[styles.bigText, styles.text]}>Vegetable Dectection</Text>
                <View style = {styles.namePJ}>
                    <View style = {styles.circle}></View>
                    <View style = {styles.circle}></View>
                    <View style = {styles.circle}></View>
                    <Text style = {[styles.smallText, styles.text]}>DKT - 2021</Text>
                    <View style = {styles.circle}></View>
                    <View style = {styles.circle}></View>
                    <View style = {styles.circle}></View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        width : '100%',
        paddingVertical : 20,
        alignItems : 'center',
        justifyContent : 'center',
    },
    logo : {
        height : 70,
        width : 70,
        marginRight : 20,
    },
    namePJ : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
    },
    circle : {
        backgroundColor : '#93CF93',
        height : 10,
        width : 10,
        borderRadius: 50,
        marginHorizontal : 2,
    },
    bigText : {
        fontSize : 25,
    },
    smallText : {
        fontSize : 20,
        marginHorizontal : 9,
    },
    text : {
        fontWeight : "bold",
        color : 'white'
    }
})