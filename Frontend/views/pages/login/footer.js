import { StyleSheet, TouchableOpacity, View, Text, Button } from "react-native";

export default function Footer ()
{
    const Register = ()=> alert('Đăng kí')

    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress={Register} >
                <Text style = {styles.text}>Đăng kí</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={Register} style = {styles.buttonLogin}>
                <Text style = {styles.textLogin}>Đăng nhập</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={Register} style = {{alignItems : 'center'}}>
                <Text style = {styles.text}>Tạo tài</Text>
                <Text style = {styles.text}>khoản mới</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        height : 100,
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center'
    },
    buttonLogin : {
        backgroundColor : "#00FFD1",
        borderRadius : 10,
        padding : 10,
    },

    text : {
        fontWeight : 'bold',
        fontSize :14,
        color : 'white',
    },
    textLogin : {
        fontWeight : 'bold',
        fontSize :14,
        color : 'black',
    }
})