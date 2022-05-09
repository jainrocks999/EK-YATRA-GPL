import React,{useEffect,useState} from 'react';
import { View,Text,Image,FlatList } from 'react-native';
import BottomTab from '../../../component/StoreButtomTab';
import styles from './style';
import StatusBar from '../../../component/StatusBar';
import Header from '../../../component/header';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from '../../../component/AsyncStorage';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Banner from "../../../component/Banner1";
import colors from '../../../component/colors';
const Leader=()=>{
  const [mobile,setMobile]=useState();
  let selector=useSelector(state=>state.Winner);
  useEffect(async()=>{
   let mobile=await AsyncStorage.getItem(Storage.mobile)
    setMobile(mobile)
 },[])

 const showList=()=>{
   if(selector.length){
     return(
      <View style={{}}>
   
          <FlatListSlider
            data={selector}
            height={170}
            timer={2000}
            contentContainerStyle={{paddingHorizontal:13,}}
            indicatorContainerStyle={{position:'absolute', bottom: -20,}}
            indicatorActiveColor={colors.red}
            indicatorInActiveColor={'grey'}
            indicatorActiveWidth={7}
            animation
            component={<Banner/>}
            separatorWidth={15}
            width={300}
            autoscroll={false}
            loop={false}


            
        />
      
     </View>
     )
   }
   else{
     return(
       <View style={styles.image}>
         <Image source={require('../../../assets/Images/dummy.jpg')}/>
       </View>
     )
   }
 }
    return(
         <View style={styles.container}>
           <Header
           title='Daily Winner'
           />
         
          {showList()}
         <StatusBar/>
         <View style={styles.bottom}>
         <BottomTab
         mobile={mobile}
         />
         </View>
       </View>
    )
}
export default Leader;