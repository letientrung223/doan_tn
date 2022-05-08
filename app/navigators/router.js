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

import User from "../screens/User";
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPassword from "../screens/ForgotPassword";
// import AccountDetail from "../screens/AccountDetail";
// import ChangePassword from "../screens/ChangePassword";
// import OrderScreen from "../screens/OrderScreen";
import ResetPassword from "../screens/ResetPassword";
// import OrderDetailScreen from "../screens/OrderDetailScreen";
import COLORS from '../consts/colors';
import { useDispatch, useSelector } from "react-redux";
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
      <Stack.Screen name="ResetPassword" component={ResetPassword} />

    </Stack.Navigator>
  );
}
function Profile() {
  
  return (
    
    <Stack.Navigator
      initialRouteName= {"User"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="User" component={User} />
      {/* <Stack.Screen name="OrderScreen" component={OrderScreen} />
      <Stack.Screen name="AccountDetail" component={AccountDetail} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen} /> */}
      
      
    </Stack.Navigator>
  );
}

function Router() {
  const tokenVN = useSelector((state) => state.loginReducer.tokenVN);

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
        component={(tokenVN == "") ? SignInSignUp : Profile}
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
