import React,{useState,useEffect} from 'react';
import { View,Text, ScrollView ,Image,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import CustomButton from '../../../component/button1';
import { useNavigation } from '@react-navigation/native';
import TextInput from '../../../component/TextInput';
import styles from './styles';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from '../../../component/AsyncStorage';
import BottomTab from '../../../component/StoreButtomTab';
import StatusBar from '../../../component/StatusBar';
import { useDispatch,useSelector } from 'react-redux';
import Loader from '../../../component/loader';
import Lang from '../../../component/language';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../../../component/colors';

const data1=[
{ label: 'Andhra Pradesh', value: 'Andhra Pradesh'},
{ label: 'Arunachal Pradesh', value: 'Arunachal Pradesh' },
{ label: 'Assam', value: 'Assam'},
{ label:'Bihar',value:'Bihar'},
{ label:'Chhattisgarh',value:'Chhattisgarh'},
{ label: 'Goa', value: 'Goa'},
{ label: 'Gujarat', value: 'Gujarat'},
{ label: 'Haryana', value: 'Haryana'},
{ label: 'Himachal Pradesh', value: 'Himachal Pradesh'},
{ label: 'Jharkhand', value: 'Jharkhand'},
{ label: 'Karnataka', value: 'Karnataka'},
{ label: 'Kerala', value: 'Kerala'},
{ label: 'Madhya Pradesh', value: 'Madhya Pradesh'},
{ label: 'Maharashtra', value: 'Maharashtra'},
{ label: 'Manipur', value: 'Manipur'},
{ label: 'Meghalaya', value: 'Meghalaya'},
{ label: 'Mizoram', value: 'Mizoram'},
{ label: 'Nagaland', value: 'Nagaland'},
{ label: 'Odisha', value: 'Odisha'},
{ label: 'Punjab', value: 'Punjab'},
{ label: 'Rajasthan', value: 'Rajasthan'},
{ label: 'Sikkim', value: 'Sikkim'},
{ label: 'Tamil Nadu', value: 'Tamil Nadu'},
{ label: 'Telangana', value: 'Telangana'},
{ label: 'Tripura', value: 'Tripura'},
{ label: 'Uttar Pradesh', value: 'Utter Pradesh'},
{ label: 'Uttarakhand', value: 'Uttarakhand'},
{ label: 'West Bengal', value: 'Best Bengal'},
]
const RegisterPage=(props)=>{
    const navigation=useNavigation()
    const dispatch=useDispatch()
    const isFetching=useSelector((state)=>state.isFetching)
    const [first_name,setFirstName]=useState('')
    const [last_name,setLastName]=useState('')
    const [address,setAddress]=useState('')
    const [area,setArea]=useState('')
    const [city,setCity]=useState('')
    const [state,setState]=useState('')
    const [pincode,setPincode]=useState('')
    const [number,setNumber]=useState('')

   useEffect(async()=>{
   let number=await AsyncStorage.getItem(Storage.mobile)
   setNumber(number)
   })
    const userRegister=async()=>{
    let userid=await AsyncStorage.getItem(Storage.userid)
    if(first_name==''){
      Toast.show('Please Enter First Name')
    }
    else if(last_name==''){
      Toast.show('Please Enter Last Name')
    }
    else if(area==''){
        Toast.show('Please Enter Area')
    }
    else if(address==''){
        Toast.show('Please Enter Address')
    }
    else if(city==''){
        Toast.show('Please Enter City Name')
    }
    else if(state==''){
        Toast.show('Please Select State Name')
    }
    else if(pincode==''){
        Toast.show('Please Enter Pincode Number')
    }
    else{
        dispatch({
            type: 'Update_Profile_Request',
            url: 'profileupdate',
            userid,
            first_name,
            last_name,
            address,
            area,
            city,
            state,
            pincode,
          })
          setFirstName('')
          setLastName('')
          setAddress('')
          setArea('')
          setCity('')
          setState('')
          setPincode('')
      }
}

    return(
        <KeyboardAvoidingView style={styles.container}>
            {isFetching?<Loader/>:null}
            <View style={[styles.main, { backgroundColor: colors.red, }]}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image style={styles.image}
            source={require('../../../assets/Images/arrow1.png')} />
        </TouchableOpacity>
        <View style={{ marginLeft: '22%' }}>
          <Text style={styles.header}>Update Profile </Text>
        </View>
         </View>
           <View style={styles.container}>
           <ScrollView style={{flex:1}}>
           <View style={styles.imageCont}>
               <Image style={styles.logo} 
               source={require('../../../assets/Images/logo.png')}/>
           </View>
            <View style={styles.second}>
            <View style={styles.view}>
            <Text style={{fontFamily:'Poppins-Medium'}}>{Lang.FirstName}</Text>
            </View>
            <TextInput
            placeholder='Enter First Name'
            onChangeText={(text)=>setFirstName(text)}
            maxLength={40}
            value={first_name}
            />
             <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>{Lang.LastName}</Text>
            </View>
            <TextInput
            placeholder='Enter Last Name'
            onChangeText={(text)=>setLastName(text)}
            maxLength={40}
            value={last_name}
            />
            <View></View>
            <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>{Lang.area}</Text>
            </View>
            <TextInput
            placeholder='Enter Area'
            onChangeText={(text)=>setArea(text)}
            maxLength={50}
            value={area}
            />
            <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>{Lang.Address}</Text>
            </View>
            <TextInput
            placeholder='Enter Address'
            onChangeText={(text)=>setAddress(text)}
            maxLength={100}
            value={address}
            />
            <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>{Lang.City}</Text>
            </View>
            <TextInput
            placeholder='Enter City Name'
            onChangeText={(text)=>setCity(text)}
            maxLength={40}
            value={city}
            />
            <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>{Lang.State}</Text>
            </View>
            <View style={styles.drop}>
              <RNPickerSelect
            onValueChange={(value) => setState(value)}
            items={data1}
            style={{ inputAndroid: { color: 'black' } }}
            value={state}
            useNativeAndroidPickerStyle={false}
            placeholder={{ label: "Select State", value: null }}
            />
            </View>
            <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>{Lang.Pincode}</Text>
            </View>
            <TextInput
            placeholder='Enter Pincode Number'
            onChangeText={(text)=>setPincode(text)}
            keyboardType='number-pad'
            maxLength={6}
            value={pincode}
            />
            <View style={styles.button}>
            <CustomButton
            title={'Update Profile'}
            onPress={()=>userRegister()}
            /> 
            </View>
            </View>
            </ScrollView>
            </View>
            <BottomTab
             mobile={number}
            />
         <StatusBar/>
       </KeyboardAvoidingView>
    )
}
export default RegisterPage;

