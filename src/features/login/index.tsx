import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import GoogleIcon from './../../../assets/images/Google.svg';
import UserOnDesk from './../../../assets/images/user-on-desk.svg';
import GeekyAntsLogo from './../../../assets/images/geeky-logo.svg';
import React from "react";

const UserLogin = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            
            <UserOnDesk style={styles.userDesk}/>
            <View >
                <GeekyAntsLogo />
                <Text style={styles.loginText}>Log In to Your Account</Text>
                <Pressable
                    onPress={() =>
                        navigation.navigate('Dashboard')
                    }
                    style={styles.buttonGoogle}
                >
                    <GoogleIcon width={20} height={20} style={styles.googleIcon} />
                    <Text style={styles.buttonText}>Continue with Google</Text>
                </Pressable>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
        height: '100%',
        backgroundColor: '#d0d7ed',
    },
    userDesk : {
        maxHeight: 300,
        maxWidth: 300,
        alignSelf: 'center',
    },
    loginText: {
        // fontFamily: "Poppins-Bold",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 30,
        letterSpacing: 0.105,
        color: '#232324',

    },
    buttonGoogle: {
        backgroundColor: '#FC5A5A',
        borderRadius: 12,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonText: {
        // fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        color: '#FFFFFF',
    },
    googleIcon: {
        marginRight: 10,
    }
});

export default UserLogin;