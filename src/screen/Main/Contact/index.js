import React,{useEffect,useState} from 'react';
import { View,Text,Image ,TouchableOpacity,Linking} from 'react-native';
import BottomTab from '../../../component/StoreButtomTab';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import StatusBar from '../../../component/StatusBar';
import Header from '../../../component/header';
import Lang from '../../../component/language';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from '../../../component/AsyncStorage';
import axios from 'axios';
import HTMLView from 'react-native-htmlview';
import Loader from '../../../component/loader';
const Contact=()=>{
  const [mobile,setMobile]=useState('')
  const [data,setData]=useState('')
  useEffect(async()=>{
    aboutData();
     let mobile=await AsyncStorage.getItem(Storage.mobile)
      setMobile(mobile)
  },[])

  const aboutData = async (url) => {
    try {
      const response = await axios({
        method: 'GET',
        headers: {
          'content-type': 'multipart/form-data',
          Accept: 'multipart/form-data',
        },
        url: 'https://ekyatraterapanth.com/gpl/index.php/api/contactus',
      });
      setData(response.data.data)
    } catch (error) {
      throw error;
    }
  };
    return(
         <View style={styles.container}>
          {!data?<Loader/>:null}
          <Header
          title={Lang.ContactUs}
          />
          <View style={styles.second}>
          <View style={styles.card}>      
              <View style={styles.view}>
              <HTMLView
                value={data}
              />
              </View>
            </View>
         </View>
         <StatusBar/>
         <BottomTab
         mobile={mobile}
         />
       </View>
    )
}
export default Contact;