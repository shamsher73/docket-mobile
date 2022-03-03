// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import Routes from './src/app/Routes';
import { store } from './src/app/store';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
