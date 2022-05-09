/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { useState , useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  Dimensions,
  
} from "react-native";
import { ScrollView,TouchableOpacity } from "react-native-gesture-handler";
import asset from "../../../assets/images/index";
import COLORS from "../../consts/colors";
import {postCheckLogout,} from "../../redux/login/action";
import { useDispatch, useSelector } from "react-redux";
const { width } = Dimensions.get("screen");
const cardWidth = width - 20;
import { fetchOrdersList } from "../../redux/order/action";
import Aka from 'react-native-vector-icons/Ionicons';

const Order = ({ navigation }) => {
  
  const dispatch =useDispatch();
  
  const onLogOut = () => {
    dispatch(postCheckLogout());
  }; 
  
  useEffect(()=>{
    getListOrders();
  },[dispatch]);


  const getListOrders = () => {
    dispatch(fetchOrdersList(tokenVN));
  };
  const tokenVN = useSelector((state) => state.loginReducer.tokenVN); 
   
  const ordersList = useSelector((state) => state.orderReducer.orders);
  const Card = ({ order }) => {
    return (
      <View style={styles.card}>
        <Text style={{ fontSize: 20, fontWeight: "normal", paddingTop: 10 }}>
          ID: {order._id}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "normal", paddingTop: 10 }}>
          CREATE AT: {order.createdAt}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "normal", paddingTop: 10 }}>
          PAYMENT METHOD: {order.paymentMethod}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "normal", paddingTop: 10 }}>
          TOTAL: ${order.totalPrice}
        </Text>

        <View
          style={{
            marginTop: 5,
            marginHorizontal: 20,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {/* navigate đến trang order detail */}
          <TouchableOpacity 
              onPress={() => navigation.navigate("OrderDetailScreen", order.orderItems)}>
            <Text> View Detail</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <ScrollView style={{backgroundColor: COLORS.brown}}>
      <View style={styles.header}>
        <Image
          source={asset.common.logo1}
          style={{ width: 200, height: 60 }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.avt}>
        <Image
          source={asset.common.person}
          style={{ width: 370, height: 250, borderRadius: 10 }}
        />
      </View>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("User");
          }}
          style={{
            backgroundColor: "#E2E2E2",
            height: 50,
            padding: 10,
            marginHorizontal: 10,
            marginTop: 5,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Aka name='home-outline' size={26} color="black" /> 
            <Text style={{ fontSize: 24 }}> Dashboard</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: COLORS.grey,
            height: 50,
            padding: 10,
            marginHorizontal: 10,
            marginTop: 5,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Aka name='list-outline' size={26} color="black" /> 
            <Text style={{ fontSize: 24 }}> Order</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AccountDetail");
          }}
          style={{
            backgroundColor: "#E2E2E2",
            height: 50,
            padding: 10,
            marginHorizontal: 10,
            marginTop: 5,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Aka name='person-outline' size={26} color="black" /> 
            <Text style={{ fontSize: 24 }}> Account Detail</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ChangePassword");
          }}
          style={{
            backgroundColor: "#E2E2E2",
            height: 50,
            padding: 10,
            marginHorizontal: 10,
            marginTop: 5,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Aka name='key-outline' size={26} color="black" /> 
            <Text style={{ fontSize: 24 }}> Change Password</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onLogOut()}
          style={{
            backgroundColor: "#E2E2E2",
            height: 50,
            padding: 10,
            marginHorizontal: 10,
            marginTop: 5,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Aka name='log-out-outline' size={26} color="black" /> 
            <Text style={{ fontSize: 24 }}> Log Out</Text>
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
          Order
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={ordersList}
          renderItem={({ item }) => <Card order={item} />}
          keyExtractor={ ( item, index ) => `${index}` }
        />
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
  textInput: {
    height: 40,

    borderRadius: 10,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
  },
  radiocontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  // text: {
  //   fontSize: 20,
  //   fontWeight: "normal",
  //   paddingTop: 10,
  //   paddingLeft: 10,
  // },
  card: {
    height: 200,
    width: cardWidth,
    paddingLeft: 10,
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 20,
    borderRadius: 15,
    elevation: 13,
    justifyContent: "flex-start",
    backgroundColor: COLORS.green_dark,
  },
});
export default Order;
