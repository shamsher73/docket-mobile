import {Platform, Pressable} from "react-native";
import GoogleIcon from './../../../assets/images/Google.svg';
import UserOnDesk from './../../../assets/images/user-on-desk.svg';
import GeekyAntsLogo from './../../../assets/images/geeky-logo.svg';
import React from "react";
import {VStack, Text,HStack, View } from 'native-base';

const UserLogin = ({ navigation }: { navigation: any }):JSX.Element => {
    return (
        <VStack p="4" bg="#d0d7ed" flex={1} justifyContent="center">
            <View justifyContent="center">
                <UserOnDesk width={300} height={300}/>
            </View>
            <View justifyContent="flex-start" p="2">
                <GeekyAntsLogo />
                <Text fontStyle="normal" fontSize="20" fontWeight={Platform.OS === 'ios' ? "600" : "bold"} fontFamily="Poppins">Log In to Your Account</Text>
                <Pressable
                    onPress={() =>
                        navigation.navigate('Dashboard')
                    }
                >
                    <HStack bg="#fc5a5a" justifyContent="center" p="2" rounded="xl">
                        <GoogleIcon width={20} height={20}/>
                        <Text pl="2" fontStyle="normal" fontSize="16" fontWeight={Platform.OS === 'ios' ? "600" : "bold"} lineHeight="24" fontFamily="Poppins" color="white">Continue with Google</Text>
                    </HStack>
                </Pressable>
            </View>
        </VStack>
    );
}

export default UserLogin;