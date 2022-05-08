/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome.js';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import CartScreen from '../screens/CartScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import COLORS from '../consts/colors';
import ForgotPassword from "../screens/ForgotPassword";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function SignInSignUp() {
  return (
    <Stack.Navigator
      initialRouteName={'SignInScreen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

    </Stack.Navigator>
  );
}

function Router() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#C02E2E"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.green_dark,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          // borderTopLeftRadius: 30,
          // borderTopRightRadius: 30,
          marginBottom:20,
          marginHorizontal:10,
          shadowRadius:10,
          borderRadius:10
        },
        // backgroundColor: COLORS.brown,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome name="search" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome name="cart-plus" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={SignInSignUp}
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Router;
