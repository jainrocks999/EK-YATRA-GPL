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
console.log('this is user detaili ',selector);
  useEffect(async()=>{
   let mobile=await AsyncStorage.getItem(Storage.mobile)
    setMobile(mobile)
 },[])

 const showList=()=>{
   if(selector.length){
     return(
      <View style={{alignItems:'center'}}>
   
          <FlatListSlider
            data={selector}
            height={200}
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
        
       


      {/* <FlatList
      style={{marginBottom:70,width:'100%'}}
      data={selector}
      horizontal
      renderItem={({item})=>(
        <View style={[styles.card]}>
          <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
            <View style={{width:'98%'}}>
           <Image  style={{width:'100%',height:200}} resizeMode="cover" source={{uri:item.winner_image}}/>
           </View>
           <View style={{marginTop:10}}>
             <Text style={styles.name}>
              {item.title}
             </Text>
           </View>
           <View>
             <Text style={styles.name}>
               {item.description}
             </Text>
           </View>
          </View> */}
          {/* <View style={{flexDirection:'row'}}>
          <Text style={[styles.name,{width:'38%'}]}>Total Score :</Text>
          <Text style={[styles.name,{width:'57%'}]}>{item.no_of_correct}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Text style={[styles.name,{width:'38%'}]}>Area :</Text>
          <Text style={[styles.name,{width:'57%'}]}>{item.area}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Text style={[styles.name,{width:'38%'}]}>City :</Text>
          <Text style={[styles.name,{width:'57%'}]}>{item.city}</Text>
          </View> */}
{/*          
        </View>
      )}
      /> */}
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