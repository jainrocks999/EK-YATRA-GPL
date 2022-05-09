import React, { useState } from 'react';
import { View, Image, Text, ScrollView, ImageBackground, TouchableOpacity, Share, useWindowDimensions,BackHandler,Alert } from 'react-native';
import styles from './style';
import StatusBar from '../../../component/StatusBar';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from '../../../component/AsyncStorage';
import AwesomeButton from "react-native-really-awesome-button";
import colors from '../../../component/colors';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../component/loader';
import axios from "axios";
import Toast from 'react-native-simple-toast';

const Summery = ({ route }) => {
  const data = route.params
  const windowWidth = useWindowDimensions().width;
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const isFetching = useSelector(state => state.isFetching)
  AsyncStorage.setItem(Storage.commonQuizId, '')

  useEffect(async () => {
    const backAction = () => {
      navigation.navigate('Home')
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    const time = `${Math.floor(data.taken_time / 60)}:${data.taken_time % 60}`
    const user_id = await AsyncStorage.getItem(Storage.userid)
    try {
      const data1 = new FormData();
      data1.append('user_id', user_id)
      data1.append('quiz_id', data.quiz_id)
      data1.append('no_of_correct', data.correctCount)
      data1.append('no_of_incorrect',  data.totalQuestion - data.correctCount)
      data1.append('total_attempts',  data.total_attempts)
      data1.append('total_question', data.totalQuestion)
      data1.append('time_taken', data.taken_time)

      const response = await axios({
        method: 'POST',
        data:data1,
        headers: {
          'content-type': 'multipart/form-data',
          Accept: 'multipart/form-data',
        },
        url: 'https://ekyatraterapanth.com/gpl/index.php/api/savetest',
      });
      if (response.data.status == true) {
      
        Toast.show(response.data.msg);
        dispatch({
          type: 'Attempt_Question_Request',
          url: 'saveattemptquestion',
          attempdata: data.attempArrat,
          statistics_id: response.data.statistics_id
        })
        dispatch({
          type: 'Leader_Board_Request',
          url: 'leaderboard1',
        })
        AsyncStorage.setItem(Storage.correctCount,'')
        AsyncStorage.setItem(Storage.total_attempts,'')
        AsyncStorage.setItem(Storage.attempArrat,'')
        AsyncStorage.setItem(Storage.taken_time,'')
      } else {
       
      }
    } catch (error) {
      throw error;
    }
    return () => backHandler.remove();
  }, [])
  const share = async () => {
      await Share.share({
        message:
          `My total score for Quiz is ${data.correctCount} out of ${data.totalQuestion} Please play the quiz now 
          ${'https://play.google.com/store/apps/details?id=com.abtypapp'}
          ${'https://apps.apple.com/in/app/ek-yatra/id1578248971'}
           `
      });
  }
  return (
    <ImageBackground
      source={require('../../../assets/Images/bg-img.png')}
      style={styles.container}>
      {isFetching ? <Loader /> : null}
      <ScrollView>
        <View style={styles.imageCont}>
          <Text style={styles.quiz}>Quiz Result </Text>
          <Image style={styles.image1}
            source={require('../../../assets/Images/trophy.png')} />
        </View>
        <View style={styles.second}>
          <Text style={styles.cong}>Your quiz result has been  </Text>
          <Text style={styles.cong}>Submitted </Text>
          <Text style={styles.score}>YOUR SCORE </Text>
          <View style={styles.title}>
            <Text style={styles.correct}>{`${data.correctCount} `}</Text>
            <Text style={styles.wrong}>{`/ ${data.totalQuestion}`} </Text>
          </View>
          <View style={styles.button}>
            <View style={{ width: '47%' }}>
              <AwesomeButton
                backgroundDarker={'grey'}
                backgroundColor={colors.pinckColor}
                borderRadius={15}
                width={windowWidth * 3 / 7}
                height={45}
                style={{
                  borderRadius: 6,
                  opacity: 0.9,
                  flexDirection: 'row'
                }}
                raiseLevel={4}
                onPress={() => share()}
              >
                <Image
                  style={{ width: 14, height: 14 }}
                  source={(require('../../../assets/Images/Vector.png'))}
                />
                <Text style={[styles.textStyle, { marginLeft: 5 }]}>{'Share Result'}</Text>
              </AwesomeButton>
            </View>
            <View style={{ width: '47%' }}>
              <AwesomeButton
                backgroundDarker={'grey'}
                backgroundColor={colors.pinckColor}
                borderRadius={15}
                width={windowWidth * 3 / 7}
                height={45}
                style={{
                  borderRadius: 6,
                  opacity: 0.9,
                }}
                raiseLevel={4}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textStyle}>{'Take New Quiz'}</Text>
              </AwesomeButton>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.x}>
            <Text style={styles.text1}>x</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar />
    </ImageBackground>
  )
}

export default Summery