
import { Image, View } from "native-base"
import userIcon from "./../../assets/images/user_icon.png"
import React from "react"

const UserIcon = () => {
    return (
        <View position="absolute" top="-34" left="12">
            <Image source={userIcon} style={{ width: 50, height: 50, borderRadius: 50 }} alt="user icon" />
        </View>
    )
}

export default UserIcon;