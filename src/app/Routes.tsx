import CustomDrawerContent from "../components/CustomDrawerContent";
import HeaderMenu from "../components/HeaderMenu";
import HeaderRight from "../components/HeaderRight";
import Dashboard from "../screens/dashboard";
import UserLogin from "../screens/login";
import MyDayTasks from "../screens/my-day-tasks";
import AddTask from "../screens/my-day-tasks/AddTask";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyTasks from "../screens/my-tasks";
import History from "../screens/history";


const Routes = () => {
    const Drawer = createDrawerNavigator()
    const options = {
        headerTitle: (props) => <HeaderMenu {...props} />,
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
        <Drawer.Navigator initialRouteName="Login" drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Login" component={UserLogin} options={hiddenItem} />
            <Drawer.Screen name="Dashboard" component={Dashboard} options={options} />
            <Drawer.Screen name="My Day Tasks" component={MyDayTasks} options={options} />
            <Drawer.Screen name="My Tasks" component={MyTasks} options={options} />
            <Drawer.Screen name="Add Task" component={AddTask} options={hiddenItem} />
            <Drawer.Screen name="History" component={History} options={options} />
        </Drawer.Navigator>
    )
}

export default Routes;