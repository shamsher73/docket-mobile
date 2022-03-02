import { StyleSheet, Text, View } from "react-native";
import SearchIcon from './../../assets/images/search.svg';
import BellIcon from './../../assets/images/bell.svg';
import React from "react";

const HeaderRight = () => {
    return (
        <View style={styles.container}>
            <SearchIcon style={{marginRight:20}} />
            <BellIcon style={{marginRight:20}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-around',
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
    
export default HeaderRight;