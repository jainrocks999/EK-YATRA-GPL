import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import CustomButton from '../../../component/button1';
import {useNavigation} from '@react-navigation/native';
import TextInput from '../../../component/TextInput';
import styles from './style';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from '../../../component/AsyncStorage';
import BottomTab from '../../../component/StoreButtomTab';
import StatusBar from '../../../component/StatusBar';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../../component/loader';
import Header from '../../../component/header';
import Lang from '../../../component/language';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';
import DeviceInfo from 'react-native-device-info';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const data = [
  {label: 'Male', value: 'Male'},
  {label: 'Female', value: 'Female'},
  {label: 'Others', value: 'Others'},
];
const RegisterPage = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const selector = useSelector(state => state.Area);
  console.log('this is working here  ,,,,,,,', selector);
  const isFetching = useSelector(state => state.isFetching);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email_id, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [area, setArea] = useState('');
  const [pincode, setPincode] = useState('');
  const [password, setPassword] = useState('123456');
  const [confirm, setConfirm] = useState('123456');
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');
  const [selected, setSelected] = useState();

  const selectHandler = item => {
    setSelected(item);
  }

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  
  useEffect(async () => {
    let number = await AsyncStorage.getItem(Storage.mobile);
    setNumber(number);
    dispatch({
      type: 'Area_List_Request',
      url: 'areas',
    });
  }, []);

  const userRegister = async () => {
    const token = await AsyncStorage.getItem(Storage.Token);
    console.log('token', token);
    const device_type = DeviceInfo.getSystemName();
    console.log('device_type', device_type);
    const mob = /^[0]?[789]\d{9}$/;
    if (first_name == '') {
      Toast.show('Please Enter First Name');
    } else if (last_name == '') {
      Toast.show('Please Enter Last Name');
    } else if (mob.test(mobile) == false) {
      Toast.show('Enter Valid Mobile Number');
      return false;
    } else if (gender == '') {
      Toast.show('Please Select Gender');
    } else if (password == '') {
      Toast.show('Please Enter Password');
    } else if (confirm != password) {
      Toast.show('Please Enter Confirm Password');
    } else if (text == '') {
      Toast.show('Please Enter Date Of Birth');
    } else if (area == '') {
      Toast.show('Please Enter Area');
    } else {
      console.log('this is iworking ');
      dispatch({
        type: 'OTP_Send_Request',
        url: 'send_otp',
        first_name,
        last_name,
        mobile,
        email_id,
        dob: text,
        gender,
        address,
        area,
        password,
        otp: '',
        pincode,
        device_token: token,
        device_type: device_type,
        navigation: navigation,
      });
      setFirstName('');
      setLastName('');
      setMobile('');
      setEmail('');
      setText('');
      setGender('');
      setAddress('');
      setArea('');
      //   setCity('')
      //   setState('')
      setPincode('');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      {isFetching ? <Loader /> : null}
      <Header title={Lang.Registration} />
      <View style={styles.container}>
        <ScrollView style={{}}>
          <KeyboardAwareScrollView
          contentContainerStyle={{flex:1}}
          enableOnAndroid={true}
          keyboardShouldPersistTaps='handled'
          extraScrollHeight={20}
          >
          <View style={styles.imageCont}>
            <Image
              style={styles.logo}
              source={require('../../../assets/Images/GPL.png')}
            />
          </View>
          <View style={styles.second}>
            <View style={[styles.view, {flexDirection: 'row'}]}>
              <Text style={{fontFamily: 'Poppins-Medium'}}>
                {Lang.FirstName}
              </Text>
              <Image
                style={{height: 12, width: 12, marginLeft: 2}}
                source={require('../../../assets/Images/star1.png')}
              />
            </View>

            <TextInput
              placeholder="Enter First Name"
              onChangeText={text => setFirstName(text)}
              maxLength={40}
              value={first_name}
            />
            <View style={styles.view1}>
              <Text style={{fontFamily: 'Poppins-Medium'}}>
                {Lang.LastName}
              </Text>
              <Image
                style={{height: 12, width: 12, marginLeft: 2}}
                source={require('../../../assets/Images/star1.png')}
              />
            </View>
            <TextInput
              placeholder="Enter Last Name"
              onChangeText={text => setLastName(text)}
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
              value={email_id}
            />
            <View style={styles.view1}>
              <Text style={{fontFamily: 'Poppins-Medium'}}>
                {Lang.MobileNumber}
              </Text>
              <Image
                style={{height: 12, width: 12, marginLeft: 2}}
                source={require('../../../assets/Images/star1.png')}
              />
            </View>
            <TextInput
              placeholder="Enter Mobile Number"
              onChangeText={text => setMobile(text)}
              keyboardType="phone-pad"
              maxLength={11}
              value={mobile}
            />
            <View style={styles.view1}>
              <Text style={{fontFamily: 'Poppins-Medium'}}>{Lang.Gender}</Text>
              <Image
                style={{height: 12, width: 12, marginLeft: 2}}
                source={require('../../../assets/Images/star1.png')}
              />
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
              <Image
                style={{height: 12, width: 12, marginLeft: 2}}
                source={require('../../../assets/Images/star1.png')}
              />
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
                  placeholderText: {marginLeft: 0},

                  dateIcon: {
                    width: 0,
                    height: 0,
                  },
                  dateInput: {
                    borderWidth: 0,
                    width: '100%',
                    height: '100%',
                    alignItems: 'flex-start',
                  },
                }}
                onDateChange={date => setText(date)}
              />
            </View>
            <View></View>
            <View style={styles.view1}>
              <Text style={{fontFamily: 'Poppins-Medium'}}>{Lang.area}</Text>
              <Image
                style={{height: 12, width: 12, marginLeft: 2}}
                source={require('../../../assets/Images/star1.png')}
              />
            </View>
            <View
              style={styles.drop}>
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
              <Text style={{fontFamily: 'Poppins-Medium'}}>{Lang.Address}</Text>
            </View>
            <TextInput
              placeholder="Enter Address"
              onChangeText={text => setAddress(text)}
              maxLength={100}
              value={address}
            />
            <View style={styles.view1}>
              <Text style={{fontFamily: 'Poppins-Medium'}}>{Lang.Pincode}</Text>
            </View>
            <TextInput
              placeholder="Enter Pincode Number"
              onChangeText={text => setPincode(text)}
              keyboardType="number-pad"
              maxLength={6}
              value={pincode}
            />
           
            <View style={styles.button}>
              <CustomButton
                title={Lang.Register}
                onPress={() => userRegister()}
              />
            </View>
          </View>
          </KeyboardAwareScrollView>
        </ScrollView>
      </View>
      <BottomTab mobile={number} />
      <StatusBar />
    </KeyboardAvoidingView>
  );
};
export default RegisterPage;

