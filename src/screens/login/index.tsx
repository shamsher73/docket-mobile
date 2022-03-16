import { Platform } from "react-native";
import UserOnDesk from './../../../assets/images/user-on-desk.svg';
import GeekyAntsLogo from './../../../assets/images/geeky-logo.svg';
import React from "react";
import { VStack, Text, View } from 'native-base';
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";
import GoogleButton from "../../components/GoogleButton";

const UserLogin = ({ navigation }: { navigation: DrawerNavigationHelpers }): JSX.Element => {
    return (
        <VStack p="4" bg="#d0d7ed" flex={1} justifyContent="center">
            <View justifyContent="center" alignSelf="center">
                <UserOnDesk width={300} height={300} />
            </View>
            <View justifyContent="flex-start" p="2">
                <GeekyAntsLogo />
                <Text fontStyle="normal" fontSize="20" fontWeight={Platform.OS === 'ios' ? "600" : "bold"} fontFamily="Poppins">Log In to Your Account</Text>
                <GoogleButton navigation={navigation}/>
            </View>
        </VStack>
    );
}

export default UserLogin;