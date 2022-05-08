/* eslint-disable prettier/prettier */
import React from 'react';
import Router from './app/navigators/router';

import "react-native-gesture-handler";
import SignUpScreen from './app/screens/SignUpScreen'
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeToDetail from './app/navigators/hometodetail';

const App = () => {
  return (
    <NavigationContainer>
      <HomeToDetail />
    </NavigationContainer>
    // <View>
    //   <SignUpScreen/>
    // </View>
  );
};
export default App;
