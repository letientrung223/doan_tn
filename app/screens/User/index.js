/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,ScrollView
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome.js';
import Aka from 'react-native-vector-icons/Ionicons';

import asset from "../../../assets/images/index";
import CustomButton from "../../components/CustomButton";
import COLORS from "../../consts/colors"
import {postCheckLogout,} from "../../redux/login/action";
import { useDispatch, useSelector } from "react-redux";



const User = ({navigation}) => {
  const dispatch =useDispatch();
  const onLogOut = () => {
    dispatch(postCheckLogout());
    
  };  
const onSubscribePressed = () => {
  console.warn("Da dang ki");
};
  return (
    <ScrollView style={{ backgroundColor: COLORS.brown, flex: 1,marginBottom:90}}>
      <View style={styles.header}>
        <Image
          source={asset.common.logo1}
          style={{ width: 200, height: 60 ,alignItems: "center"}}
          resizeMode="contain"
        />
      </View>
      <View style={styles.avt}>
        <Image
          source={asset.common.person}
          style={{ width: 370, height: 250, borderRadius: 10 }}
          //resizeMode="contain"
        />
      </View>
      <SafeAreaView>
       
        <TouchableOpacity onPress={()=>{}} 
            style={{ backgroundColor:COLORS.grey,height:50,padding:10,marginHorizontal:10,marginTop:5}} >
          <View style={{flexDirection: "row",alignItems: "center"}}>
            <Aka name='home-outline' size={26} color="black" /> 
            <Text style={{fontSize:24}}> Dashboard</Text>
          </View> 
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("OrderScreen")}} 
            style={{ backgroundColor:'#E2E2E2',height:50,padding:10,marginHorizontal:10,marginTop:5}} >
          <View style={{flexDirection: "row",alignItems: "center"}}>
            <Aka name='list-outline' size={26} color="black" /> 
            <Text style={{fontSize:24}}> Order</Text>
          </View> 
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("AccountDetail")}} 
            style={{ backgroundColor:'#E2E2E2',height:50,padding:10,marginHorizontal:10,marginTop:5}} >
          <View style={{flexDirection: "row",alignItems: "center"}}>
            <Aka name='person-outline' size={26} color="black" /> 
            <Text style={{fontSize:24}}> Account Detail</Text>
          </View> 
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("ChangePassword")}} 
            style={{ backgroundColor:'#E2E2E2',height:50,padding:10,marginHorizontal:10,marginTop:5}} >
          <View style={{flexDirection: "row",alignItems: "center"}}>
            <Aka name='key-outline' size={26} color="black" /> 
            <Text style={{fontSize:24}}> Change Password</Text>
          </View> 
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onLogOut()} 
            style={{ backgroundColor:'#E2E2E2',height:50,padding:10,marginHorizontal:10,marginTop:5}} >
          <View style={{flexDirection: "row",alignItems: "center"}}>
            <Aka name='log-out-outline' size={26} color="black" /> 
            <Text style={{fontSize:24}}> Log Out</Text>
          </View> 
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            paddingTop: 10,
            paddingLeft: 10,
          }}
        >
          Dashboard
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "normal",
            color: COLORS.dark,
            paddingTop: 30,
            paddingLeft: 10,
            paddingRight:10,
            paddingBottom:20,
          }}
        >
          From your account dashboard you can view your recent orders, manage
          your account detail and change your password
        </Text>
        <View
          style={styles.box}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Get Expert Tips In Your Inbox
          </Text>
          <Text>Subscribe to our newsletter and stay updated</Text>
          <TextInput
            style={styles.textip}
            placeholder={"Write your email here"}
          />
          <CustomButton
            text="Subscribe"
            bgColor="#000000"
            fgColor="#FFFFFF"
            onPress={onSubscribePressed}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    paddingLeft: 16,
  },
  avt: {
    paddingTop: 10,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
  logo: {
    marginTop: 10,
    width: "70%",
    height: 60,
  },
  item: {
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  textip:{
    height: 40,
    width: "100%",
    borderRadius: 10,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor:"#FFFFFF",
  },
  box:{
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: "#E2E2E2",
    alignItems: "center",
    justifyContent: "center",
  }

});
export default User;
