import React,{useEffect} from 'react';
import { View,Text,Image, TouchableOpacity,ImageBackground } from 'react-native';
import BottomTab from '../../../component/StoreButtomTab';
import styles from './styles';
import StatusBar from '../../../component/StatusBar';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../component/header';
import Lang from '../../../component/language';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from '../../../component/AsyncStorage';
import { useState } from 'react';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Banner from "../../../component/Banner";
import { useSelector} from "react-redux";
import colors from '../../../component/colors';
let mob
const Home=()=>{
  const navigation=useNavigation()
  const dispatch=useDispatch()
  const [mobile,setMobile]=useState('')
  const selector=useSelector(state=>state.Sponsor)
  console.log("this is working here  ,,,,,,,",selector);
  useEffect(async()=>{
    const user_id=await AsyncStorage.getItem(Storage.userid)
     mob=await AsyncStorage.getItem(Storage.mobile)
      setMobile(mob)
      dispatch({
        type: 'Winner_List_Request',
        url: 'daily_winner',
      })
      dispatch({
        type: 'Area_List_Request',
        url: 'areas',
      });
     
   },[])
    const call = async() => {
      let number = await AsyncStorage.getItem(Storage.mobile);
      if(number==null){
        navigation.navigate('Login')
      }
      else{
        navigation.navigate('Category')
      }
    }
    return(
         <View style={styles.container}>
          <Header
          source={require('../../../assets/Images/bell.png')}
           title={Lang.Home}/>
            <View style={styles.imageCont}>
               <Image style={styles.logo} 
               source={require('../../../assets/Images/GPL.png')}/>
           </View>
         <View style={styles.second}>
          <TouchableOpacity
          onPress={()=>navigation.navigate('About')}
          style={styles.card}>
             <Image style={styles.icon} 
             source={require('../../../assets/Images/about-img.png')}/>
            <Text style={styles.text}>{Lang.AboutApp}</Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>navigation.navigate('Book')}
           style={[styles.card,{marginTop:10}]}>
              <Image style={styles.icon} 
              source={require('../../../assets/Images/book-img.png')}/>
            <Text style={styles.text}>{Lang.Ebook}</Text>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={()=> call()}
           style={[styles.card,{marginTop:10}]}>
              <Image style={styles.icon} 
              source={require('../../../assets/Images/quiz1.png')}/>
            <Text style={styles.text}>{'Play Quiz'}</Text>
          </TouchableOpacity>
          </View>
          <View style={{marginBottom:10,}}>
          <FlatListSlider
            data={selector}
            height={170}
            timer={2000}
            // onPress={item => alert(JSON.stringify(item))}
            contentContainerStyle={{paddingHorizontal:15,}}
            indicatorContainerStyle={{position:'absolute', bottom: 10}}
            indicatorActiveColor={colors.red}
            indicatorInActiveColor={'grey'}
            indicatorActiveWidth={7}
            animation
            component={<Banner/>}
            separatorWidth={15}
            width={300}
            autoscroll={true}
            loop={false}
        />
        
        </View>

         <StatusBar/>
         <BottomTab
         mobile={mobile}
         />
       </View>
    )
}
export default Home;

const images = [
  {
    image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
    desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
 {
   image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
   desc:
     'Red fort in India New Delhi is a magnificient masterpeiece of humans',
 },
 {
  image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
  desc:
    'Red fort in India New Delhi is a magnificient masterpeiece of humans',
},
{
  image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
  desc:
    'Red fort in India New Delhi is a magnificient masterpeiece of humans',
},
{
  image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
  desc:
    'Red fort in India New Delhi is a magnificient masterpeiece of humans',
},
{
  image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
  desc:
    'Red fort in India New Delhi is a magnificient masterpeiece of humans',
},
{
  image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
  desc:
    'Red fort in India New Delhi is a magnificient masterpeiece of humans',
},

 ]
