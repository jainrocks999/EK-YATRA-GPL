import React,{useState,useEffect} from 'react';
import { View,Text, ScrollView ,Image,KeyboardAvoidingView} from 'react-native';
import CustomButton from '../../../component/button1';
import { useNavigation } from '@react-navigation/native';
import TextInput from '../../../component/TextInput';
import styles from './style';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from '../../../component/AsyncStorage';
import BottomTab from '../../../component/StoreButtomTab';
import StatusBar from '../../../component/StatusBar';
import { useDispatch,useSelector } from 'react-redux';
import Loader from '../../../component/loader';
import Header from '../../../component/header';
import Lang from '../../../component/language';
import DatePicker from 'react-native-datepicker'
import RNPickerSelect from 'react-native-picker-select';
import DeviceInfo from 'react-native-device-info';
const Data2=[
    { label: 'Chembur', value: 'Chembur' },
{ label: 'Dadar', value: 'Dadar' },
{ label: 'Kurla', value: 'Kurla'},
{label:'South Mumbai',value:'South Mumbai'},
{label:'Elphinstone',value:'Elphinstone'},
{label:'MDWS',value:'MDWS'},
{label:'Sion Koliwada',value:'Sion Koliwada'},
{label:'Juna Kurla',value:'Juna Kurla'},
{label:'Kajupada',value:'Kajupada'},
{label:'Ghatkopar',value:'Ghatkopar'},
{label:'Vikhroli',value:'Vikhroli'},
{label:'Vikhroli Parkside',value:'Vikhroli Parkside'},
{label:'Kanjurmarg',value:'Kanjurmarg'},
{label:'Bhandup',value:'Bhandup'},
{label:'Mulund',value:'Mulund'},
{label:'Thane (Wagle Estate)',value:'Thane (Wagle Estate)'},
{label:'Thane Kopri',value:'Thane Kopri'},
{label:'Thane Central',value:'Thane Central'},
{label:'Bhiwandi',value:'Bhiwandi'},
{label:'Dombivali',value:'Dombivali'},
{label:'Bandra',value:'Bandra'},
{label:'Khar',value:'Khar'},
{label:'Khar East',value:'Khar East'},
{label:'Santacruz',value:'Santacruz'},
{label:'Vile Parle',value:'Vile Parle'},
{label:'Andheri',value:'Andheri'},
{label:'Sakinaka',value:'Sakinaka'},
{label:'Jogeshwari',value:'Jogeshwari'},
{label:'Bangur Nagar',value:'Bangur Nagar'},
{label:'Goregaon',value:'Goregaon'},
{label:'Malad',value:'Malad'},
{label:'Kandivali',value:'Kandivali'},
{label:'Borivali',value:'Borivali'},
{label:'Dahisar',value:'Dahisar'},
{label:'Mira road',value:'Mira road'},
{label:'Bhayander',value:'Bhayander'},
{label:'Nalasopara',value:'Nalasopara'},
{label:'Vasai',value:'Vasai'},
{label:'Virar',value:'Virar'},
{label:'Vashi',value:'Vashi'},
{label:'Koperkhairne',value:'Koperkhairne'},
{label:'Airoli',value:'Airoli'},
{label:'Nerul',value:'Nerul'},
{label:'CBD Belapur',value:'CBD Belapur'},
{label:'Kharghar',value:'Kharghar'},
{label:'Panvel',value:'Panvel'},
{label:'Uran',value:'Uran'},
{label:'Ulhasnagar',value:'Ulhasnagar'},
{label:'Govandi',value:'Govandi'},
{label:'Kamothe',value:'Kamothe'},
{label:'Badlapur',value:'Badlapur'},
{label:'Mumbra',value:'Mumbra'},


]
const data=[
{ label: 'Male', value: 'Male' },
{ label: 'Female', value: 'Female' },
{ label: 'Others', value: 'Others'}]

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
    const [email_id,setEmail]=useState('')
    const [mobile,setMobile]=useState('')
    const [gender,setGender]=useState('')
    const [address,setAddress]=useState('')
    const [area,setArea]=useState('')
    const [pincode,setPincode]=useState('')
    const [password,setPassword]=useState('123456')
    const [confirm,setConfirm]=useState('123456')
    const [text,setText]=useState('')
    const [number,setNumber]=useState('')

   useEffect(async()=>{
   let number=await AsyncStorage.getItem(Storage.mobile)
   setNumber(number)
   })

    const userRegister=async()=>{
    const token=await AsyncStorage.getItem(Storage.Token)
    const device_type= DeviceInfo.getSystemName()
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const mob = /^[0]?[789]\d{9}$/;
    if(first_name==''){
      Toast.show('Please Enter First Name')
    }
    else if(last_name==''){
      Toast.show('Please Enter Last Name')
    }
    else if(mob.test(mobile)==false){
        Toast.show('Enter Valid Mobile Number')
        return false
    }
    else if(gender==''){
        Toast.show('Please Select Gender')
    }
    else if(password==''){
        Toast.show('Please Enter Password')
    }
    else if(confirm!=password){
        Toast.show('Please Enter Confirm Password')
    }
    else if(text==''){
        Toast.show('Please Enter Date Of Birth')
    }
    else if(area==''){
        Toast.show('Please Enter Area')
    }
   
    else{
        dispatch({
            type: 'OTP_Send_Request',
            url: 'send_otp',
            first_name,
            last_name,
            mobile,
            email_id,
            dob:text,
            gender,
            address,
            area,
            password,
            otp:'',
            pincode,
            device_token:token,
            device_type:device_type,
            navigation:navigation
          })
          setFirstName('')
          setLastName('')
          setMobile('')
          setEmail('')
          setText('')
          setGender('')
          setAddress('')
          setArea('')
          setPincode('')
      }
}

    return(
        <KeyboardAvoidingView style={styles.container}>
            {isFetching?<Loader/>:null}
            <Header
            title={Lang.Registration}
            />
           <View style={styles.container}>
           <ScrollView style={{}}>
           <View style={styles.imageCont}>
               <Image style={styles.logo} 
               source={require('../../../assets/Images/GPL.png')}/>
           </View>
            <View style={styles.second}>
            <View style={[styles.view,{flexDirection:'row'}]}>
            <Text style={{fontFamily:'Poppins-Medium'}}>{Lang.FirstName}</Text>
            <Image style={{height:12,width:12,marginLeft:2}}
             source={require('../../../assets/Images/star1.png')}/>
            </View>
           
            <TextInput
            placeholder='Enter First Name'
            onChangeText={(text)=>setFirstName(text)}
            maxLength={40}
            value={first_name}
            
            />
             <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>{Lang.LastName}</Text>
            <Image style={{height:12,width:12,marginLeft:2}}
             source={require('../../../assets/Images/star1.png')}/>
            </View>
            <TextInput
            placeholder='Enter Last Name'
            onChangeText={(text)=>setLastName(text)}
            maxLength={40}
            value={last_name}
            />
            <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>{Lang.email}</Text>
            </View>
            <TextInput
            placeholder='Enter Email'
            onChangeText={(text)=>setEmail(text)}
            maxLength={40}
            value={email_id}
            />
            <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>{Lang.MobileNumber}</Text>
            <Image style={{height:12,width:12,marginLeft:2}}
             source={require('../../../assets/Images/star1.png')}/>
            </View>
            <TextInput
            placeholder='Enter Mobile Number'
            onChangeText={(text)=>setMobile(text)}
            keyboardType='phone-pad'
            maxLength={11}
            value={mobile}

            />
            <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>{Lang.Gender}</Text>
            <Image style={{height:12,width:12,marginLeft:2}}
             source={require('../../../assets/Images/star1.png')}/>
            </View>
            <View style={styles.drop}>
            <RNPickerSelect
            onValueChange={(value) => setGender(value)}
            items={data}
            style={{ inputAndroid: { color: 'black' } }}
            value={gender}
            useNativeAndroidPickerStyle={false}
            placeholder={{ label: "Select Gender", value: null,color:'black' }}
            />
            </View>
            <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>{Lang.DateOfBirth}</Text>
            <Image style={{height:12,width:12,marginLeft:2}}
             source={require('../../../assets/Images/star1.png')}/>
            </View>
             <View style={styles.drop}>
             <DatePicker
              style={{width: '99%'}}
                date={text}
                mode="date"
                placeholder="Select Date Of Birth"
                format="DD-MM-YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                maxDate={new Date()}
                customStyles={{
                    placeholderText:{marginLeft:0},
                    
                dateIcon: {
                    width:0,
                    height:0,
                },
                dateInput: {
                    borderWidth:0,
                    width:'100%',
                    height:'100%',
                    alignItems:'flex-start',
                }
                }}
                onDateChange={(date) => setText(date)}
            />
           
            </View>
            <View></View>
            <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>{Lang.area}</Text>
            <Image style={{height:12,width:12,marginLeft:2}}
             source={require('../../../assets/Images/star1.png')}/>
            </View>
            <View style={styles.drop}>
            <RNPickerSelect
            onValueChange={(value) => setArea(value)}
            items={Data2}
            style={{ inputAndroid: { color: 'black' } }}
            value={area}
            useNativeAndroidPickerStyle={false}
            placeholder={{ label: "Select Area", value: null,color:'black' }}
            />
            </View>
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
            title={Lang.Register}
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

