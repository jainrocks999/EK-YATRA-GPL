import React,{useDebugValue, useEffect,useState} from 'react';
import { View,Text,ScrollView } from 'react-native';
import BottomTab from '../../../component/StoreButtomTab';
import styles from './styles';
import StatusBar from '../../../component/StatusBar';
import Header from '../../../component/header';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from '../../../component/AsyncStorage';
import axios from 'axios';
import Loader from '../../../component/loader';

const HowTo=()=>{
  const [mobile,setMobile]=useState('')
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
      url: 'https://ekyatraterapanth.com/gpl/index.php/api/howtoplay',
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
           title='How To Play'
           />
         <ScrollView style={styles.second}>
           <View style={styles.main1}>
             <View style={{paddingHorizontal:6,marginBottom:20}}>
                <Text style={{ fontSize:16,lineHeight:23}}>
                 {data}
                </Text>
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
export default HowTo;