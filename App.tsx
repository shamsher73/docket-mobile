import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import Routes from './src/app/Routes';
import { store } from './src/app/store';
import { NativeBaseProvider } from 'native-base';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
