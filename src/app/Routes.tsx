import CustomDrawerContent from "../components/CustomDrawerContent";
import HeaderMenu from "../components/HeaderMenu";
import HeaderRight from "../components/HeaderRight";
import Dashboard from "../features/dashboard";
import UserLogin from "../features/login";
import MyDayTasks from "../features/my-day-tasks";
import AddTask from "../features/my-day-tasks/AddTask";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Routes = () => {
    const Drawer = createDrawerNavigator();

    const options = {
        headerTitle: (props:any) => <HeaderMenu {...props} />,
        headerRight: () => <HeaderRight />,
        drawerItemStyle: { height: 0 },
        headerStyle: {
            backgroundColor: '#5a6cd5',
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
        },
        headerTintColor: '#fff',
    }

    const hiddenItem = { headerShown: false, drawerItemStyle: { height: 0 } }
    return (
        <Drawer.Navigator drawerContent={(props:any) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Login" component={UserLogin} options={hiddenItem} />
            <Drawer.Screen name="Dashboard" component={Dashboard} options={options} />
            <Drawer.Screen name="My Day Tasks" component={MyDayTasks} options={options} />
            <Drawer.Screen name="Add Task" component={AddTask} options={hiddenItem} />
        </Drawer.Navigator>
    )
}

export default Routes;