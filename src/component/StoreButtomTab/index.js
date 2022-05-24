import React, { useEffect, useState } from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Lang from '../../component/language';
import Storage from '../AsyncStorage';
import AsyncStorage from '@react-native-community/async-storage';
import language from '../../component/language';

const BottomTab = (mobile) => {
  const navigation = useNavigation();
  const [Number, setNumber] = useState('');
  useEffect(async () => {
    let number = await AsyncStorage.getItem(Storage.mobile);
    setNumber(number)
  })
  const renderImageOnline = () => {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/Images/orders.png')}
          style={styles.bottomTab}
        />
        <Text style={styles.text}>{Lang.Home}</Text>
      </View>
    );

  };
  const renderImageNotification = () => {

    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/Images/book-img.png')}
          style={styles.bottomTab}
        />
        <Text style={styles.text}>{language.Ebook}</Text>
      </View>
    );

  };
  const renderImageReport = () => {

    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/Images/quiz1.png')}
          style={styles.bottomTab}
        />
        <Text style={styles.text}>{'Play Quiz'}</Text>
      </View>
    );

  };
  const renderImageSetting = () => {

    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/Images/analytic.png')}
          style={styles.bottomTab}
        />
        <Text style={styles.text}>{'Daily Winner'}</Text>
      </View>
    );

  };
  const call = async() => {
   
    let number = await AsyncStorage.getItem(Storage.mobile);
    if (number == null) {
      navigation.navigate('Login')
    }
    else {
      navigation.navigate('Category')
    }
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.bottomTabContainer}
        onPress={() => {
          navigation.navigate('Home');
        }}>

        {renderImageOnline()}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottomTabContainer}
        onPress={() => {
          navigation.navigate('Book');
        }}>
        {renderImageNotification()}
      </TouchableOpacity>



      <TouchableOpacity
        style={styles.bottomTabContainer}
        onPress={() => call()}
      // onPress={()=>navigation.navigate('HowTo')}
      >
        {renderImageReport()}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottomTabContainer}
        onPress={() => {
          navigation.navigate('Leader');
        }}>
        {renderImageSetting()}
      </TouchableOpacity>
    </View>
  );
};

export default BottomTab;