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
import HTMLView from 'react-native-htmlview';
import  WebView  from 'react-native-webview';
const About=()=>{
  const [mobile,setMobile]=useState(null)
  const [data,setData]=useState(null)
  useEffect(async()=>{
  aboutData();
  let mobile=await AsyncStorage.getItem(Storage.mobile)
   setMobile(mobile)
  },[])


  // const aboutData = async (url) => {
  //   try {
  //     const response = await axios({
  //       method: 'GET',
  //       headers: {
  //         'content-type': 'multipart/form-data',
  //         Accept: 'multipart/form-data',
  //       },
  //       url: 'https://ekyatraterapanth.com/gpl/index.php/api/aboutusnew',
  //     });
  //     setData(response.data.data)
  //   } catch (error) {
  //     throw error;
  //   }
  // };

    return(
         <View style={styles.container}>
           {/* {!data?<Loader/>:null} */}
           <Header
           title={Lang.AboutApp}/>
         {/* <ScrollView style={styles.second}> */}
         {/* <View style={styles.main1}> */}
           {/* <View style={styles.row}> */}
           {/* <Text style={styles.hindi}>{data}</Text> */}
           {/* <HTMLView
                value={data}
              /> */}
              <View style={{flex:1,marginTop:10,paddingHorizontal:10}}>
              <WebView
              source={{uri: 'https://ekyatraterapanth.com/gpl/index.php/api/aboutusnew'}}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              startInLoadingState={true}
              >
                    </WebView>
                    </View>
              {/* <WebView style={{height:'100%',width:'100%'}}  source={{uri:'https://ekyatraterapanth.com/gpl/index.php/api/aboutusnew'}} /> */}
          {/* </View> */}
          {/* </View> */}
         {/* </ScrollView> */}
         <StatusBar/>
         <BottomTab
         mobile={mobile}
         />
       </View>
    )
}
export default About;