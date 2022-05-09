import React,{useEffect} from 'react';
import { View, Text } from 'react-native';
import MyDrawer from '../../navigator/DrawerNavigator';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from '../../component/AsyncStorage';
let mobile
let Email
let Name
export default function Online_Store_Dashboard() {
  useEffect(async()=>{
    Email = await AsyncStorage.getItem(Storage.email);
    Name = await AsyncStorage.getItem(Storage.name);
    mobile=await AsyncStorage.getItem(Storage.mobile)
  })
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
       <MyDrawer
       name={Name}
       email={Email}
       mobile={mobile}
       />
      </View>
    );
  }