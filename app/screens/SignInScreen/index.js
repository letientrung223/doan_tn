/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState  } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import {TouchableOpacity} from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import asset from "../../../assets/images/index";
import COLORS from "../../consts/colors";


const SignInScreen = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSignInPressed = (username,password) => {
    
    
  };
  const onSignInWithGGPressed = () => {
    console.warn("currently not supported ");
  };
  const onSignInWithFBPressed = () => {
    console.warn("currently not supported");
  };
  
  return (
    <View style={styles.root}>
      <StatusBar
        backgroundColor={COLORS.brown}
        barStyle="light-content"
        hidden={false}/>
      <Image
        source={asset.common.logo1}
        style={{ width: 230, height: 230 ,marginBottom:10}}
        resizeMode="contain"
      />
      <CustomInput
        placeholder="Your email address"
        value={email}
        setValue={setEmail} 
      />
      <CustomInput
        placeholder="Your password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomButton 
        text="Sign in" 
        onPress={()=> onSignInPressed(email, password)}
         />
      
      <CustomButton
        text="Forgot Password?"
        onPress={()=>navigation.navigate("ForgotPassword")}
        type="TERTIARY"
      />

      <Text style={styles.textStyle}>
        ___________________Or___________________
      </Text>

      <CustomButton
        text="Sign in with Google"
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
        onPress={onSignInWithGGPressed}
      />
      <CustomButton
        text="Sign in with Facebook"
        bgColor="#7689EF"
        fgColor="#3504FA"
        onPress={onSignInWithFBPressed}
      />
      <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.grey, fontWeight: 'bold'}}>
            Don't have an account?   
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={{color: COLORS.dark, fontWeight: 'bold'}}>
                  Sign up
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex:1,
    alignItems: "center",
    backgroundColor:COLORS.brown,
   
    // paddingTop: 20,
    // paddingBottom:20,
    // marginBottom:20
  },
  logo: {
    marginTop: 10,
    width: "70%",
    height: 60,
  },
  textStyle: {
    color: "#B0A7A7",
  },
});
export default SignInScreen;