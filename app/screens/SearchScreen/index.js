/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  StatusBar,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome.js';
import {FlatList, TouchableOpacity, TouchableHighlight} from 'react-native';
import COLORS from '../../consts/colors';
const {width} = Dimensions.get('screen');
const Search = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.brown}
        barStyle="light-content"
        hidden={false}
      />
      <View style={styles.inputcontainer}>
      <View style={{width:350,paddingRight:10}}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
      />
      </View>
      
      <FontAwesome name="search" size={30} color="black" onPress={() =>alert('Tìm kiếm')}/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.brown,
    height: '100%',
    width: '100%',
    alignContent: 'center',
    alignItems: 'center'
  },
  inputcontainer:{
    flexDirection:'row',
    height: 60,
    width: 400,
    backgroundColor: COLORS.grey_light,
    marginVertical:10,
    borderRadius:10,
    alignItems: 'center',
    alignContent: 'space-around',
    // elevation: 1,

    // shadowRadius:10,
    // shadowOffset:10,
   

    

  },
  input: {
    height: 50,
    // margin: 12,
    // borderWidth: 1,
    paddingLeft: 30,
    fontSize:16,

    
  },
});
export default Search;
