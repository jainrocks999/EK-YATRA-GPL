import React,{useState,useEffect} from 'react';
import { View,Text,Image,ScrollView,KeyboardAvoidingView} from 'react-native';
import CustomButton from '../../../component/button1';
import { useNavigation } from '@react-navigation/native';
import TextInput from '../../../component/TextInput';
import styles from './style';
import Toast from 'react-native-simple-toast';
import StatusBar from '../../../component/StatusBar';
import BottomTab from '../../../component/StoreButtomTab';
import { useDispatch,useSelector } from 'react-redux';
import Loader from '../../../component/loader';
import Header from '../../../component/header';
import Lang from '../../../component/language';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from '../../../component/AsyncStorage';
import colors from '../../../component/colors';
import DeviceInfo from 'react-native-device-info';

const Login=()=>{
    const navigation=useNavigation()
    const dispatch=useDispatch()
    const isFetching=useSelector((state)=>state.isFetching)
    const [mobile,setMobile]=useState('')
    const [data,setData]=useState('')

useEffect(async()=>{
   let data=await AsyncStorage.getItem(Storage.mobile);
       setData(data)
},[])
const validateUser=async()=>{
    let userid=await AsyncStorage.getItem(Storage.userid);
    console.log('this is userid',userid);
    let token=await AsyncStorage.getItem(Storage.Token);
    const device_type= DeviceInfo.getSystemName()
    const mob = /^[0]?[789]\d{9}$/;
    if(mob.test(mobile)==false){
        Toast.show('Enter Valid Mobile Number')
    }
    else{
        dispatch({
          type: 'User_Login_Request',
          url: 'mlogin',
          mobile,
          device_token:token,
          device_type,
          navigation: navigation,
        })
        setMobile('')
      }
}

    return(
        <KeyboardAvoidingView style={styles.container}>
         {isFetching?<Loader/>:null} 
         <View style={{flex:1}}>
          <ScrollView style={{flex:1}}>
          <Header
          title={Lang.Login}
          />
           <View style={styles.imageContainer}>
               <Image style={{width:180,height:180}} 
               source={require('../../../assets/Images/GPL.png')}/>
           </View>
           <View style={styles.second}> 
              <View style={styles.titleCont}>
            <Text style={{fontFamily:'Poppins-Medium'}}>{Lang.MobileNumber}</Text>
            </View>
           <TextInput
            placeholder='Enter Mobile Number'
            onChangeText={(text)=>setMobile(text)}
            keyboardType='number-pad'
            maxLength={11}
            value={mobile}
            />
            <View style={styles.button}>
            <CustomButton
            title={Lang.Login}
            onPress={()=>validateUser()}
            /> 
            <View style={styles.bottom}>
               <Text style={{fontFamily:'Poppins-Medium'}}>If new user?</Text>
               <Text
                onPress={()=>navigation.navigate('Register')}
                style={{color:colors.red,fontFamily:'Poppins-Medium'}}> Register Now</Text>
            </View>
            </View>
           
         </View>
         </ScrollView>
         <StatusBar/>
         </View>
         <BottomTab 
          mobile={data}
         />
       </KeyboardAvoidingView>
    )
}
export default Login;

