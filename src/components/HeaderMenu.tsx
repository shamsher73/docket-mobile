import React from "react";
import {View, Text} from 'native-base';

const HeaderMenu = (props:any) => (
        <View>
            <Text fontFamily="Roboto" fontStyle="normal" fontWeight="bold" fontSize="22" lineHeight="26" letterSpacing="0.13" color="#F6F6F6">
                {props.children}
            </Text>
        </View>
    );
export default HeaderMenu;