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
import { fetchProductList } from "../../redux/home/action";
import { useDispatch, useSelector } from "react-redux";

import FontAwesome from 'react-native-vector-icons/FontAwesome.js';
import {FlatList, TouchableOpacity, TouchableHighlight} from 'react-native';
import COLORS from '../../consts/colors';
const {width} = Dimensions.get('screen');
const Search = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    getListProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const getListProducts = () => {
    dispatch(fetchProductList(""));
  };
  const productList = useSelector((state) => state.homeReducer.products);

  const TK = (text) => {
//    console.log(text);
    text.toLowerCase()
    let filteredData = productList.filter((item) => {
      return item.name.toLowerCase().includes(text);
    });
  
    
    //console.log("trong func ",filteredData);

    setFilteredData({filteredData });
  };

  //console.log("ngoai func ",filteredData.filteredData);

  const Card = ({ cloth }) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate("DetailScreen", cloth)}
      >
        <View style={styles.card}>
          <View style={{ alignItems: "center", top: 2 }}>
            <Image
              source={{ uri: cloth.imageCover }}
              style={{ height: 120, width: 130 }}
            />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                paddingTop: 10,
              }}
              numberOfLines={1}
            >
              {cloth.name}
            </Text>
            <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>
              {cloth.brand}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              ${cloth.price}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
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
        value={searchText}
        onChangeText={setSearchText}
      />
      </View>
      
      <FontAwesome name="search" size={30} color="black" onPress={() =>TK(searchText)}/>
      </View>
      <FlatList
        data={filteredData.filteredData?filteredData.filteredData:productList}
        keyExtractor={(item) => `item-${item.id}`}
        renderItem={({ item }) => <Card cloth={item} />}
      />
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
