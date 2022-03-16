
import { Image, View } from "native-base"
import React from "react"

const UserIcon = ({url}:{url:string}) => {
    return (
        <View position="absolute" top="-34" left="12">
            {url != "" && <Image source={{ uri: url}} style={{ width: 50, height: 50, borderRadius: 50 }} alt="user icon" />}
        </View>
    )
}

export default UserIcon;