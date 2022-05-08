/* eslint-disable prettier/prettier */
import React from 'react';


import "react-native-gesture-handler";
import { Provider } from "react-redux";
import {NavigationContainer} from '@react-navigation/native';
import HomeToDetail from './app/navigators/hometodetail';
import store from "./app/redux";
const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <HomeToDetail />
    </NavigationContainer>
    </Provider>

  );
};
export default App;
