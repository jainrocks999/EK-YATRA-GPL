import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './style';
import StatusBar from '../../../component/StatusBar';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from '../../../component/AsyncStorage';
import colors from '../../../component/colors';
import BottomTab from '../../../component/StoreButtomTab';
import Loader from '../../../component/loader';
import axios from "axios";
const Round = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [mobile, setMobile] = useState('');
  const [userId, setUserId] = useState('');
  const selector = useSelector(state => state.CategoryList);
  const playedInformation = useSelector(state => state.PlayedQuiz);
  const isFetching=useSelector(state =>state.isFetching)
  const [data,setData]=useState('')
  useEffect(() => {
    initial();
  }, []);

  const initial = async () => {
   
    let mobile = await AsyncStorage.getItem(Storage.mobile)
    let user_id = await AsyncStorage.getItem(Storage.userid)
    dispatch({
      type: 'Category_List_Request',
      url: 'getquiz',
      user_id:user_id
    })
    setMobile(mobile);
    setUserId(user_id)
  }

  const checkIn = async (item) => {
    dispatch({
      type: 'Get_Quiz_List_Request',
      url: 'getquestion_quizbyid',
      quiz_id: item.quiz_id,
      navigation: navigation
    })
 
  }

  const renderItem2=(item)=>{
    if(item.isplayed == 1){
      return(
        <TouchableOpacity
        disabled>
        <View style={[styles.card, { backgroundColor: 'gray' }]}>
          <Text style={[styles.round, styles.round2]}>Played</Text>
        </View>
      </TouchableOpacity>
      )
    }
    else if(item.iscanplay == 1){
      return(
        <TouchableOpacity
        onPress={() => { checkIn(item) }}>
        <View style={[styles.card, { backgroundColor: '#ed2225' }]}>
          <Text style={[styles.round, styles.round2]}>Play Quiz</Text>
        </View>
      </TouchableOpacity>
      )
    }
    else if(item.upcoming_date!=''){
      return(
        <Text style={{ color: colors.black,
            fontFamily: 'Poppins-SemiBold',
            fontSize: 13,
            padding: 4,}}>{`Start Date:${item.upcoming_date}`}
        </Text>
        
      )
    }
    else{
      <View></View>
    }

  }

  const renderItem1 = (item) => {
    return (
          <View style={styles.card1}>
            <Text style={[styles.round]} >{item.quizname}</Text>
                {renderItem2(item)}
          </View>
    )
  }
  return (
    <View style={styles.container}>
      {isFetching?<Loader/>:null}
      <View style={[styles.main, { backgroundColor: colors.red, }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.image}
            source={require('../../../assets/Images/arrow1.png')} />
        </TouchableOpacity>
        <View style={{ marginLeft: '30%' }}>
          <Text style={{
            color: 'white',
            fontSize: 18,
            fontFamily: 'Poppins-SemiBold'
          }}>Round </Text>
        </View>
      </View>

      <View style={styles.second}>
        <FlatList
          style={{ width: '99%' }}
          data={selector}
          keyExtractor={(item, index) => item.round_id}
          renderItem={({ item }) => (
            <View style={{ justifyContent: 'flex-start' }}>
              <Text style={styles.round1}>{item.roundname}</Text>
              <FlatList
                style={{ width: '99%' }}
                data={item.quiz}
                numColumns={2}
                keyExtractor={(item, index) => item.round_id}
                renderItem={({ item }) =>
                  renderItem1(item)
                }
              />
            </View>
          )
          }
        />
      </View>
      <BottomTab/>
      <StatusBar />
    </View>
  )
}
export default Round;