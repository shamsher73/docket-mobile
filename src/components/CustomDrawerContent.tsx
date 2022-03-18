import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import React, { useState } from "react";
import UserIcon from "./UserIcon";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const RouteItem = ({name,setCurrentRoute,navigation,currentRoute}:{name:string,setCurrentRoute:React.Dispatch<React.SetStateAction<string>>,navigation:DrawerNavigationHelpers,currentRoute:string}) => {
    return (
        <DrawerItem label={name} onPress={() => {setCurrentRoute(name);navigation.navigate(name)}} labelStyle={currentRoute == name ? styles.drawerContentSelected : styles.drawerContent} />
    )
}

const CustomDrawerContent = (props:DrawerContentComponentProps) => {
    const authUser = useSelector((state: RootState) => state.user);

    const [currentRoute, setCurrentRoute] = useState<string>('Dashboard');
    const {navigation} = props;
    const Labels = ['Dashboard','My Day Tasks','My Tasks','History'];
    // const Labels = ['Dashboard','My Day Tasks','My Tasks','History', 'Lists', 'Category and Tags'];
    const DrawerList = Labels.map((name,index) => 
                                <RouteItem key={index} name={name} currentRoute={currentRoute} setCurrentRoute={setCurrentRoute} navigation={navigation} />       
    );
    return (
        <DrawerContentScrollView {...props} >
          <DrawerItemList {...props}   />
            <DrawerItem label={authUser.name} onPress={() => {}} style={styles.header} labelStyle={styles.headerText}
                icon={() => <UserIcon url={authUser.photo}/>  }
            />
            {DrawerList}
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
        marginTop: -100,
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
        marginRight: "30%",
        paddingTop:8,
        paddingBottom:8,
        borderRadius: 10
    }
});

export default CustomDrawerContent;