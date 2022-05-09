import React,{useEffect,useState} from 'react';
import { View,Text,ScrollView } from 'react-native';
import BottomTab from '../../../component/StoreButtomTab';
import styles from './style';
import StatusBar from '../../../component/StatusBar';
import Header from '../../../component/header';
import Lang from '../../../component/language';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from '../../../component/AsyncStorage';
import axios from 'axios';
import Loader from '../../../component/loader';
const About=()=>{
  const [mobile,setMobile]=useState(null)
  const [data,setData]=useState(null)
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
        url: 'https://ekyatraterapanth.com/gpl/index.php/api/aboutus',
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
           title={Lang.AboutApp}/>
         <ScrollView style={styles.second}>
         <View style={styles.main1}>
           <View style={styles.row}>
           <Text style={styles.hindi}>{data}</Text>
          </View>
          </View>
         </ScrollView>
         <StatusBar/>
         <BottomTab
         mobile={mobile}
         />
       </View>
    )
}
export default About;