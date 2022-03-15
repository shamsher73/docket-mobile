import React from "react";
import {View, Text} from 'native-base';

export interface HeaderMenuProps {
    children: string
}
const HeaderMenu = ({children}:{children:HeaderMenuProps}) : JSX.Element => (
    <View>
        <Text fontFamily="Roboto" fontStyle="normal" fontWeight="bold" fontSize="22" lineHeight="26" letterSpacing="0.13" color="#F6F6F6">
            {children}
        </Text>
    </View>
)
export default HeaderMenu