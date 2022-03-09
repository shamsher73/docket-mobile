import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import React, { useState } from "react";

const CustomDrawerContent = (props) => {
    const [currentRoute, setCurrentRoute] = useState('Dashboard');
    const {navigation} = props;
    return (
        <DrawerContentScrollView {...props} >
          <DrawerItemList {...props}   />
          <DrawerItem label="Shivam Chaudhary" onPress={() => alert('Not accessible')} style={styles.header} labelStyle={styles.headerText}/>
          <DrawerItem label="Dashboard" onPress={() => {setCurrentRoute("Dashboard");navigation.navigate('Dashboard')}} labelStyle={currentRoute == "Dashboard" ? styles.drawerContentSelected : styles.drawerContent} />
          <DrawerItem label="My Day Tasks" onPress={() => {setCurrentRoute("My Day Tasks");navigation.navigate('My Day Tasks')}} labelStyle={currentRoute == "My Day Tasks" ? styles.drawerContentSelected : styles.drawerContent} />
          <DrawerItem label="My Tasks" onPress={() => {setCurrentRoute("My Tasks");navigation.navigate('My Tasks')}} labelStyle={currentRoute == "My Tasks" ? styles.drawerContentSelected : styles.drawerContent} />
        </DrawerContentScrollView>
      );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#5a6cd5',
        height: 200,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 10,
        justifyContent: 'flex-end',
        marginTop: -90,
        marginRight:0,
        marginLeft: 0,
    },
    headerText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: 0.1375,
        color: '#F6F6F6',
        padding: 10,
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