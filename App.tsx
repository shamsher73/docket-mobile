import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import Routes from './src/app/Routes';
import { store } from './src/app/store';

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes Drawer={Drawer}/>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
