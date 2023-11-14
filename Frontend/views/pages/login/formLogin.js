import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";

export default function FormLogin() {
    const [showIcon, setShowIcon] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đăng nhập</Text>
            <View style={styles.formInputStyle}>
                <Text style={styles.label}> Tài khoản </Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Tài khoản"
                    mode="outlined"
                ></TextInput>
            </View>
            <View style={styles.formInputStyle}>
                <Text style={styles.label}> Mật khẩu </Text>
                <View style={{ justifyContent: "center" }}>
                    <TextInput
                        style={styles.inputStyle}
                        secureTextEntry={!showPassword}
                        placeholder="Mật khẩu"
                        onFocus={() => {
                            setShowIcon(true);
                            console.log(showPassword)
                        }}
                        onBlur={() => {
                            setShowIcon(false);
                            setShowPassword(false);
                        }}
                    ></TextInput>
                    {showIcon && (
                        <TouchableOpacity
                            onPress={() => {
                                setShowPassword(!showPassword);
                            }}
                            style={styles.icon}
                        >
                            <Icon
                                name="eye"
                                size={30}
                                color={"black"}
                                
                            ></Icon>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#A5EE9F",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        padding: 20,
    },
    formInputStyle: {
        width: "94%",
        paddingVertical: 10,
        paddingLeft: 10,
    },
    label: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginVertical: 10,
    },
    inputStyle: {
        height: 43,
        width: "95%",
        borderWidth: 2,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 10,
        fontSize: 18,
    },
    icon: {
        position: "absolute",
        right: 30,
    },
});
