import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, Alert,TouchableOpacity } from 'react-native';
import {
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from '@react-navigation/native';
import lang from '../../component/language';
import {
    Avatar,
    Title,
    Caption,
    Text,
} from 'react-native-paper';
import styles from './styles';
import Storage from '../AsyncStorage';
import { useSelector,useDispatch } from 'react-redux';


const DrawerContent=({props,name,email,mobile,address,area,dob,pincode,gender,last_name})=> {
    const navigation = useNavigation();
    const dispatch=useDispatch()
    useEffect(() => {
       // initial();
    }, []);

    const initial = async () => {
        //  Email = await AsyncStorage.getItem(Storage.email);
        //  Name = await AsyncStorage.getItem(Storage.name);
        //  mobile=await AsyncStorage.getItem(Storage.mobile);
        //  last_name=await AsyncStorage.getItem(Storage.last_name);
        //  address =await AsyncStorage.getItem(Storage.address);
        //  pincode=await AsyncStorage.getItem(Storage.pincode);
        //  dob=await AsyncStorage.getItem(Storage.dob);
        //  area=await AsyncStorage.getItem(Storage.area);
        //  gender =await AsyncStorage.getItem(Storage.gender);
    }
    const getLogout=async()=>{
        const userid=await AsyncStorage.getItem(Storage.userid)
          dispatch({
              type: 'User_Logout_Request',
              url: 'logout',
             userid,
             navigation: navigation,
            });
      }

    const Logout = () => {
        console.log('this is working');
        Alert.alert(
            "Are you want to logout ?",
            "",
            [
                {
                    text: "Cancel",
                    onPress: () => {
                        cancelable: false;
                    },
                    style: "cancel",
                },
                { text: "ok", onPress: () => getLogout() },
            ],
            { cancelable: false }
        );
    };

    return (
        <DrawerContentScrollView {...props}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.drawerContent}>
                <View style={[styles.drawers]}>
                    <View style={{width:'50%',alignItems:'center',padding:10}}>
                    <Image style={{width:100,height:100,marginLeft:20}} source={require('../../assets/Images/GPL.png')}/>
                    </View>
                    <View style={{marginLeft:10,width:'60%'}}>
                   {!mobile?
                   <View style={styles.profile}>
                    <Text style={styles.title}>{lang.RegisterToProfileView}</Text>
                    </View>:
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('Profile',{name,email,mobile,address,area,dob,pincode,gender,last_name})}
                     style={styles.profile}>
                        <Title style={styles.title}>{name}</Title>
                        <Caption style={styles.caption}>{mobile}</Caption>
                    </TouchableOpacity>}
                    </View>
                   
                </View>
                {!mobile?
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Login')
                    }}>
                    <View style={[styles.drawer, {}]}>
                        <View style={{ flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
                            <View style={styles.iconView}>
                                <Image style={styles.imageicon} source={require('../../assets/Images/login.jpg')}/>
                            </View>
                            <Text style={styles.text}>{lang.Login}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                :<View></View>
                }
                {!mobile?
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Register')
                    }}>
                    <View style={[styles.drawer]}>
                        <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconView}>
                                <Image style={styles.imageicon} source={require('../../assets/Images/register.png')}/>
                            </View>
                            <Text style={styles.text}> {lang.Registration}</Text>
                        </View>
                    </View>
                </TouchableOpacity>:
                <View></View>
                } 
                {/* <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Leader')
                    }}>
                    <View style={[styles.drawer]}>
                        <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconView}>
                                <Image style={styles.imageicon} source={require('../../assets/Images/leader.png')}/>
                            </View>
                            <Text style={styles.text}>{lang.LeaderBoard}</Text>
                        </View>
                    </View>
                </TouchableOpacity> */}
               
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Contact')
                    }}>
                    <View style={[styles.drawer]}>
                        <View style={{  flexDirection: 'row',justifyContent:'center',alignItems:'center' }}>
                        <View style={styles.iconView}>
                                <Image style={styles.imageicon} source={require('../../assets/Images/call1.png')}/>
                            </View>
                            <Text style={styles.text}>{lang.ContactUs}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Book')
                    }}>
                    <View style={[styles.drawer]}>
                        <View style={{  flexDirection: 'row',justifyContent:'center',alignItems:'center' }}>
                        <View style={styles.iconView}>
                                <Image style={styles.imageicon} source={require('../../assets/Images/book.png')}/>
                            </View>
                            <Text style={styles.text}>{lang.Ebook}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('HowTo')
                    }}>
                    <View style={[styles.drawer]}>
                        <View style={{ flexDirection: 'row',justifyContent:'center',alignItems:'center' }}>
                        <View style={styles.iconView}>
                                <Image style={{ 
                                    tintColor: 'black',
                                    height: 22,
                                    width: 22,}} 
                                source={require('../../assets/Images/histroy.png')}/>
                            </View>
                            <Text style={styles.text}>{'How To Play'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('About')
                    }}>
                    <View style={[styles.drawer]}>
                        <View style={{  flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
                        <View style={styles.iconView}>
                                <Image style={{ tintColor: 'black',
                                    height: 22,
                                    width: 22,}} 
                                source={require('../../assets/Images/about-img.png')}/>
                            </View>
                            <Text style={styles.text}>{'About Us'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
              

                <TouchableOpacity>
                     {mobile?
                    <TouchableOpacity 
                    onPress={()=>Logout()}
                    style={[styles.drawer]}>
                        <View style={{  flexDirection: 'row',justifyContent:'center',alignItems:'center' }}>
                        <View style={styles.iconView}>
                                <Image style={styles.imageicon} source={require('../../assets/Images/logout.png')}/>
                            </View>
                            <Text style={styles.text}>{lang.Logout}</Text>
                        </View>
                    </TouchableOpacity>
                     :
                     <View></View>
                 } 
                </TouchableOpacity>
            </ScrollView>
        </DrawerContentScrollView>
    );
}
export default DrawerContent;
