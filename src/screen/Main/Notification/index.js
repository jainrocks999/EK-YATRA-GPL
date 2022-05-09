import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './styles';
import StatusBar from '../../../component/StatusBar';
import { useNavigation } from '@react-navigation/native';
import { useDispatch,useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from '../../../component/AsyncStorage';
import colors from '../../../component/colors';
import Loader from '../../../component/loader';

const Notifications = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const selector = useSelector(state => state.notificationData);
  const isFetching=useSelector(state=>state.isFetching)

useEffect(async()=>{
  let user_id=await AsyncStorage.getItem(Storage.userid)
  dispatch({
    type: 'Get_Notification_Request',
    url: 'notification',
    user_id,
  })
},[])

const showList=()=>{
  if(selector){
    return(
      <View style={styles.second}>
      <FlatList
        style={{ width: '99%',marginBottom:42 }}
        data={selector}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => (
         <View style={styles.card1}>
             <View style={styles.cardCont}>
                 <Text style={styles.value}>{item.title}</Text>
                 <Text style={[styles.title,{marginTop:5,marginLeft:-10,}]}>{item.date}</Text>
             </View>
             <Text style={styles.title}>{item.notification}</Text>
         </View>
        )
        }
      />
    </View>
    )
  }
  else{
    return(
      <View style={styles.image5}>
         <Image source={require('../../../assets/Images/dummy.jpg')}/>
       </View>
    )
  }
}

  return (
    <View style={styles.container}>
      {isFetching?<Loader/>:null}
      <View style={[styles.main, { backgroundColor: colors.red, }]}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('DashBoardPage')}
        >
          <Image style={styles.image}
            source={require('../../../assets/Images/arrow1.png')} />
        </TouchableOpacity>
        <View style={{ marginLeft: '30%' }}>
          <Text style={{
            color: 'white',
            fontSize: 18,
            fontFamily: 'Poppins-SemiBold'
          }}>Notification </Text>
        </View>
      </View>
      {showList()}
      <StatusBar />
    </View>
  )
}
export default Notifications;