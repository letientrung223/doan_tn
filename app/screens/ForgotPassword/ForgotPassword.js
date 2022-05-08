/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,Alert
} from "react-native";
// import { FontAwesome } from "@expo/vector-icons";
import FontAwesome from 'react-native-vector-icons/FontAwesome.js';
import COLORS from "../../consts/colors";
import asset from "../../../assets/images";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
// import {posFGPW} from "../../redux/forgotpassword/action"
const ForgotPassword = ({ navigation }) => {
  const [data, setData ] = useState("");
  const dispatch = useDispatch();
  
  // const onForgotPassWordPressed = (email) => {
    
  //   dispatch(posFGPW(email));
  //   navigation.navigate("ResetPassword");
  // };

  
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.brown, flex: 1 }}>
      <View style={styles.header}>
        <FontAwesome
          name="arrow-left"
          size={28}
          color="black"
          onPress={() => navigation.navigate("SignInScreen")}
        />
        {/* <Image style={styles.Logo} source={asset.common.logo1} /> */}
        <Text style={styles.textStyle}>Forgot Password</Text>
      </View>
      <View style={styles.root}>
      <CustomInput
        placeholder="Enter your email"
        value={data}
        setValue={setData}
      />

      <CustomButton 
        
        text="Send" 
        // onPress={()=> onForgotPassWordPressed(data)}

         />
       </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingVertical: 50,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  Logo: {
    paddingTop: 30,
    height: 60,
    width: 220,
    marginLeft:30,
  },
  textStyle:{
    fontSize:25 ,
    marginLeft:20
  },
  root: {
    alignItems: "center",
    padding: 20,
    paddingTop: 10,
  },  

});
export default ForgotPassword;
