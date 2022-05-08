/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  
} from "react-native";

import { FlatList } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome.js';
import COLORS from "../../consts/colors";
import { PrimaryButton } from "../../../app/components/Button";

const CartScreen = ({ navigation }) => {
//   const tokenVN = useSelector((state) => state.loginReducer.tokenVN);
//   const userCart = useSelector((state) => state.cartReducer.cart);
//   function getIdCartItem(inputs) {
    
//     var output = inputs.map(function(item){
//         return item._id})
//     return output
// }
//   const ID_cartItem = getIdCartItem(userCart);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     getUserCart();
//   }, [dispatch]);

//   const getUserCart = () => {
//     dispatch(fetchUserCart(tokenVN));
//   };
//   const increase =async (id_product,size,quantity) => {

//     dispatch(increaseQuantityUserCart(id_product,size,quantity,tokenVN))
//   };
//   const decrease =async (id_product,size,quantity) => {
//     dispatch(decreaseQuantityUserCart(id_product,size,quantity,tokenVN))
//   };

//   const onRemove = async (id) => {
  
//      dispatch(deleteItem(id,tokenVN));
   
//   };
  const CartCard = ({ item }) => {
    return (
      <View style={styles.cartCard}>
        {/* ================================================================ */}
        <View>
          <TouchableOpacity
            // onPress={() => {onRemove(item._id)}}
            style={{ paddingTop: 60, paddingRight: 10 }}
          >
            <FontAwesome name="trash-o" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {/* ================================================================ */}
        <View>
          <Image
            source={{ uri: item.product.imageCover }}
            style={{ height: 100, width: 100, marginTop: 10 }}
          />
          <View style={styles.actionBtn}>
            {/* Decrease */}
            <TouchableOpacity 
            disabled={item.userQuantity <= 1} 
            // onPress={()=> decrease(item._id,item.userSize,item.userQuantity)}
            >
              <FontAwesome name="minus" size={20} color={COLORS.dark} />
            </TouchableOpacity>
            {/* Quantity */}
            <Text style={{ fontSize: 16 }} placeholder="">
              {item.userQuantity}{" "}
            </Text>
            {/* Increase */}
            <TouchableOpacity 
            // onPress={()=> increase(item._id,item.userSize,item.userQuantity)}
            >
              <FontAwesome name="plus" size={20} color={COLORS.dark} />
            </TouchableOpacity>
          </View>
        </View>
        {/* ================================================================ */}

        <View style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: -10 }}numberOfLines={1}>{item.product.name}</Text>

          <Text style={{fontSize: 16,fontWeight: "bold",color: "red",paddingTop: 10,}}>Price: ${item.product.price}</Text>
          
          <Text style={{fontWeight: "bold",fontSize: 16,paddingTop: 10, paddingBottom: 10,}}>Quantity:{item.userQuantity}</Text>
          
          <Text style={{ textTransform: "uppercase",fontWeight: "bold",fontSize: 18,}}>Size:{item.userSize}</Text>

        </View>
        {/* ================================================================ */}
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.brown, flex: 1,width:'100%' }}>
      <View style={styles.header}>
        <FontAwesome
          name="angle-left"
          size={30}
          color="black"
          onPress={() => navigation.navigate("Home")}
        />
        <Text style={{ fontSize: 24,  }}> Cart</Text>
        <View></View>
      </View>
    
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({

  text: {
    fontSize: 20,
    fontWeight: "normal",
    paddingHorizontal: 10,
    color: COLORS.green,
  },
  header: {
    flexDirection:'row',
    alignItems: "center",
   
    justifyContent: 'space-between',
    width:'90%',
    padding:10,

  
  },
  cartCard: {
    height: 160,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  actionBtn: {
    width: 100,
    height: 30,
    borderRadius: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  checkbox: {
    alignSelf: "center",
  },
});
export default CartScreen;
