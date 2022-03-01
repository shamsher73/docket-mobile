import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import { logger } from "react-native-logs";
import {useRoute} from '@react-navigation/native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import React from "react";

const CustomDrawerContent = (props) => {
    
    const {navigation} = props;
    // var log = logger.createLogger();
    // log.info(navigation.state.params);

    return (
        <DrawerContentScrollView {...props} style={{margin:0,padding:0}}>
          <DrawerItemList {...props}   />
          <DrawerItem label="Shivam Chaudhary" onPress={() => alert('Link to help')} style={styles.header} labelStyle={styles.headerText}/>
          <DrawerItem label="Dashboard" onPress={() => navigation.navigate('Dashboard')} labelStyle={styles.drawerContent} />
          <DrawerItem label="My Day Tasks" onPress={() => navigation.navigate('My Day Tasks')} labelStyle={styles.drawerContent} />
          <DrawerItem label="Tasks" onPress={() => alert('Link to help')} labelStyle={styles.drawerContentSelected} />
        </DrawerContentScrollView>
      );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#5a6cd5',
        height: 160,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 10,
        justifyContent: 'flex-end',
       
    },
    headerText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: 0.1375,
        color: '#F6F6F6',
    },
    drawerContent: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,        
        lineHeight: 19,
        color: '#171725',
        paddingLeft: 20
    },
    drawerContentSelected: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 19,
        color: '#FFFFFF',
        backgroundColor: '#5a6cd5',
        paddingLeft: 20,
        paddingTop:8,
        paddingBottom:8,
        borderRadius: 10
    }
});

export default CustomDrawerContent;