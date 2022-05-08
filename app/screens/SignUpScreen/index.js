/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {TouchableOpacity, StatusBar} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import asset from '../../../assets/images/index';
import COLORS from '../../consts/colors';

const SignUpScreen = ({navigation}) => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const onSignUpPressed = (username, email, password, repassword) => {};
  return (
    <View style={styles.root}>
      <StatusBar
        backgroundColor={COLORS.brown}
        barStyle="light-content"
        hidden={false}
      />
      <Image
        source={asset.common.logo1}
        style={{width: 230, height: 230, marginBottom: 10}}
        resizeMode="contain"
      />
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUserName}
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
      <CustomInput
        placeholder="Re-password"
        value={repassword}
        setValue={setRepassword}
        secureTextEntry={true}
      />

      <CustomButton
        text="Sign up"
        onPress={() => onSignUpPressed(username, email, password, repassword)}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
          marginTop: 40,
          marginBottom: 20,
        }}>
        <Text style={{color: COLORS.dark, fontWeight: 'bold'}}>
          Already have an account ?
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{color: COLORS.green_dark, fontWeight: 'bold'}}> {"  "} Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    paddingTop: 20,
    flex: 1,
    backgroundColor: COLORS.brown,
  },
  logo: {
    width: 60,
    height: 90,
  },
  textStyle: {
    color: '#B0A7A7',
  },
});
export default SignUpScreen;
