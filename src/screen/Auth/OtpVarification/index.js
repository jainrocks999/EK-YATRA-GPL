import React,{useEffect, useState} from 'react';
import { View,Text,Image,TouchableOpacity, ScrollView,KeyboardAvoidingView } from 'react-native';
import CustomButton from '../../../component/button1';
import { useSelector,useDispatch } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from '../../../component/AsyncStorage';
import Loader from '../../../component/loader';
import styles from './style';
import OTPTextInput  from 'react-native-otp-textinput';
import StatusBar from '../../../component/StatusBar';
import colors from '../../../component/colors';

const OtpVarification=({route})=>{
  
    const [otp,setOtp]=useState('')
    const navigation=useNavigation();
    const dispatch=useDispatch();
    const isFetching=useSelector((state)=>state.isFetching)
    const data=route.params

    const getMobile=async()=>{
      if(data.value){
       if(otp==''){
        Toast.show('Please Enter OTP Code')
        }
        else if(data.otp!=otp){
          Toast.show('OTP Mismatch')
        }
        else{
          AsyncStorage.setItem(Storage.userid, data.userid)
          AsyncStorage.setItem(Storage.email, data.email)
          AsyncStorage.setItem(Storage.mobile, data.mobile)
          AsyncStorage.setItem(Storage.name, data.name)
          AsyncStorage.setItem(Storage.last_name,data.last_name)
          AsyncStorage.setItem(Storage.area,data.area)
          AsyncStorage.setItem(Storage.address,data.address)
          AsyncStorage.setItem(Storage.pincode,data.pincode)
          AsyncStorage.setItem(Storage.gender,data.gender)
          AsyncStorage.setItem(Storage.dob,data.dob)
          
          navigation.navigate('Home')
        
        }
      }
      else{
        if(otp==''){
          Toast.show('Please Enter OTP Code')
          }
          else if(data.otp!=otp){
            Toast.show('OTP Mismatch')
          }
          else{
            dispatch({
              type: 'User_Register_Request',
              url: 'registration',
              first_name:data.first_name,
              last_name:data.last_name,
              mobile:data.mobile,
              email_id:data.email_id,
              dob:data.dob,
              gender:data.gender,
              address:data.address,
              area:data.area,
              // city:data.city,
              password:data.password,
              // state:data.state,
              otp:data.otp,
              pincode:data.pincode,
              device_token:data.device_token,
              device_type:data.device_type,
              navigation:navigation
            })
          }
      }

      }
    return(
        <KeyboardAvoidingView style={styles.container}>
         {isFetching?<Loader/>:null}
         <ScrollView>
         <View style={styles.main1}>
           <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.image} 
            source={require('../../../assets/Images/arrow1.png')}/>
            </TouchableOpacity>
           </View>
           <View style={styles.imageCont}>
           <Image style={styles.logo} 
           source={require('../../../assets/Images/GPL.png')}/>
           </View>
           <View style={styles.second}>
            <View style={styles.titleCont}>
            <Text style={styles.enter}>Enter OTP Here</Text>
            </View>
            <OTPTextInput
              handleTextChange={(code)=>setOtp(code)}
              inputCount={4}
              textInputStyle={styles.otp}
              offTintColor={colors.red}
              tintColor={colors.red}
              />
            <View style={styles.button}>
            <CustomButton
            title='Send'
            onPress={()=>getMobile()}
            /> 
            </View>
         </View>
         </ScrollView>
         <StatusBar/>
        </KeyboardAvoidingView>
       )
}
export default OtpVarification;