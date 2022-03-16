import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";
import { HStack, Pressable, Text } from "native-base";
import GoogleIcon from './../../assets/images/Google.svg';
import Config from "react-native-config";
import { useDispatch } from "react-redux";
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { storeUser } from "../screens/login/userSlice";
import { Platform } from "react-native";
import React from "react";



const GoogleButton = ({ navigation }: { navigation: DrawerNavigationHelpers }): JSX.Element => {
    const dispatch = useDispatch();
    const androidClientId = Config.ANDROID_CLIENT_ID;
    const iosClientId = Config.IOS_CLIENT_ID;

    return (
        <Pressable onPress={() => {
            GoogleSignin.configure({
                androidClientId: androidClientId,
                iosClientId: iosClientId,
            });
            GoogleSignin.hasPlayServices().then((hasPlayService) => {
                if (hasPlayService) {
                    GoogleSignin.signIn().then((userInfo) => {
                        dispatch(storeUser(userInfo))
                        navigation.navigate('Dashboard')
                    }).catch((e) => {
                        console.log("ERROR IS: " + JSON.stringify(e));
                    })
                }
            }).catch((e) => {
                console.log("ERROR IS: " + JSON.stringify(e));
            })
        }} >
            <HStack bg="#fc5a5a" justifyContent="center" p="2" rounded="xl">
                <GoogleIcon width={20} height={20} />
                <Text pl="2" fontStyle="normal" fontSize="16" fontWeight={Platform.OS === 'ios' ? "600" : "bold"} lineHeight="24" fontFamily="Poppins" color="white">Continue with Google</Text>
            </HStack>
        </Pressable>
    )
}

export default GoogleButton;