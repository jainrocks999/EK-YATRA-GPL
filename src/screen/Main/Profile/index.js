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
import DatePicker from 'react-native-datepicker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const data = [
  {label: 'Male', value: 'Male'},
  {label: 'Female', value: 'Female'},
  {label: 'Others', value: 'Others'},
];

const RegisterPage=({route})=>{
    const navigation=useNavigation()
    const dispatch=useDispatch()
    const selector =useSelector(state=>state.Area)
    const isFetching=useSelector((state)=>state.isFetching)
    const [first_name,setFirstName]=useState(route.params.name)
    const [last_name,setLastName]=useState(route.params.last_name)
    const [address,setAddress]=useState(route.params.address)
    const [area,setArea]=useState(route.params.area)
    const [pincode,setPincode]=useState(route.params.pincode)
    const [number,setNumber]=useState()
    const [email_id, setEmail] = useState(route.params.email);
    const [mobile, setMobile] = useState(route.params.mobile);
    const [gender, setGender] = useState(route.params.gender);
    const [text, setText] = useState(route.params.dob);
    console.log("texxxxtttt",text);
   useEffect(async()=>{
   let number=await AsyncStorage.getItem(Storage.mobile)
   setNumber(number)
   })
    const userRegister=async()=>{
    let userid=await AsyncStorage.getItem(Storage.userid)
    console.log('this is');
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
    else if(gender==''){
        Toast.show('Please Select Gender')
    }
   
    else if(pincode==''){
        Toast.show('Please Enter Pincode Number')
    }
    else{
      console.log('thisaaa  ddfff');
        dispatch({
            type: 'Update_Profile_Request',
            url: 'profileupdate',
            userid,
            first_name,
        last_name,
        mobile,
        email_id,
        dob: text,
        gender,
        address,
        area,
        pincode,
        navigation
          })
          console.log('faagagadgadg');
          setFirstName('');
          setLastName('');
          setMobile('');
          setEmail('');
          setText('');
          setGender('');
          setAddress('');
          setArea('');
          setPincode('');
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
           <ScrollView style={{}}>
           <KeyboardAwareScrollView
          contentContainerStyle={{flex:1}}
          enableOnAndroid={true}
          keyboardShouldPersistTaps='handled'
          extraScrollHeight={30}
          >
           <View style={styles.imageCont}>
               <Image style={styles.logo} 
               source={require('../../../assets/Images/GPL.png')}/>
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
             <View style={styles.view1}>
              <Text style={{fontFamily: 'Poppins-Medium'}}>{Lang.email}</Text>
            </View>
            <TextInput

              placeholder="Enter Email"
              onChangeText={text => setEmail(text)}
              maxLength={40}
              editable={false}
              value={email_id}
            />
            <View style={styles.view1}>
              <Text style={{fontFamily: 'Poppins-Medium'}}>
                {Lang.MobileNumber}
              </Text>
           
            </View>
            <TextInput
              placeholder="Enter Mobile Number"
              onChangeText={text => setMobile(text)}
              keyboardType="phone-pad"
              maxLength={11}
              editable={false}
              value={mobile}
            />
             <View style={styles.view1}>
              <Text style={{fontFamily: 'Poppins-Medium'}}>{Lang.Gender}</Text>
            </View>
            <View style={styles.drop}>
              <RNPickerSelect
                onValueChange={value => setGender(value)}
                items={data}
                style={{inputAndroid: {color: 'black'}}}
                value={gender}
                useNativeAndroidPickerStyle={false}
                placeholder={{
                  label: 'Select Gender',
                  value: null,
                  color: 'black',
                }}
              />
            </View>
            <View style={styles.view1}>
              <Text style={{fontFamily: 'Poppins-Medium'}}>
                {Lang.DateOfBirth}
              </Text>
            </View>
           
               <TextInput
            placeholder=''
            onChangeText={(text)=>setText(text)}
            maxLength={100}
            editable={false}
            value={text}
            />

            <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>{Lang.area}</Text>
            </View>
            <View style={styles.drop}>
            <RNPickerSelect
                onValueChange={value => setArea(value)}
                items={selector}
                style={{inputAndroid: {color: 'black'}}}
                value={area}
                useNativeAndroidPickerStyle={false}
                placeholder={{
                  label: 'Select Area',
                  value: null,
                  color: 'black',
                }}
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
            title={'Update Profile'}
            onPress={()=>userRegister()}
            /> 
            </View>
            </View>
            </KeyboardAwareScrollView>
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

