import { StyleSheet, Text, View } from "react-native";
import MenuIcon from './../../assets/images/menu-icon.svg';
import React from "react";

const HeaderMenu = (props:any) => {

    return (
        <View style={styles.container}>
            {/* <MenuIcon width={20} height={20} style={styles.menuIcon} /> */}
            <Text style={styles.menuText}>
                {props.children}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    menuIcon: {
        marginLeft: 10, 
        marginRight: 10
    },
    menuText: {
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 22,
        lineHeight: 26,
        letterSpacing: 0.1375,
        color: '#F6F6F6',
        marginRight: 10
    }
});
    
export default HeaderMenu;