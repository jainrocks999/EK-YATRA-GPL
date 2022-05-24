import React,{useEffect} from 'react';
import { View, Text } from 'react-native';
import MyDrawer from '../../navigator/DrawerNavigator';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from '../../component/AsyncStorage';
let mobile
let Email
let Name
let dob
let address
let last_name
let area
let gender
let pincode
export default function Online_Store_Dashboard() {
  useEffect(async()=>{
    Email = await AsyncStorage.getItem(Storage.email);
    Name = await AsyncStorage.getItem(Storage.name);
    mobile=await AsyncStorage.getItem(Storage.mobile);
    last_name=await AsyncStorage.getItem(Storage.last_name);
    address =await AsyncStorage.getItem(Storage.address);
    pincode=await AsyncStorage.getItem(Storage.pincode);
    dob=await AsyncStorage.getItem(Storage.dob);
    area=await AsyncStorage.getItem(Storage.area);
    gender =await AsyncStorage.getItem(Storage.gender);
  })
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
       <MyDrawer
       name={Name}
       email={Email}
       mobile={mobile}
       dob={dob}
       last_name={last_name}
       address={address}
       area={area}
       pincode={pincode}
       gender={gender}

       />
      </View>
    );
  }