import React, { useEffect, useState } from 'react';
import { View,FlatList,Text ,Image,TouchableOpacity} from 'react-native';
import BottomTab from '../../../component/StoreButtomTab';
import styles from './style';
import StatusBar from '../../../component/StatusBar';
import Header from '../../../component/header';
import Lang from '../../../component/language';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from '../../../component/AsyncStorage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Loader from '../../../component/loader'

const Book = () => {
  const [mobile, setMobile] = useState('');
  const [data,setData]=useState(null)
  const navigation=useNavigation()
  useEffect(async () => {
    aboutData()
    let mobile = await AsyncStorage.getItem(Storage.mobile)
    setMobile(mobile)
  }, [])
  const aboutData = async (url) => {
    try {
      const response = await axios({
        method: 'GET',
        headers: {
          'content-type': 'multipart/form-data',
          Accept: 'multipart/form-data',
        },
        url: 'https://ekyatraterapanth.com/gpl/index.php/api/getPdf',
      });
      setData(response.data.data)
    } catch (error) {
      throw error;
    }
  };

  return (
    <View style={styles.container}>
      {!data?<Loader/>:null}
      <Header
        title={Lang.Ebook}
      />
      <View style={styles.second}>
        <View style={styles.main1}>
        <FlatList
        data={data}
        renderItem={({item})=>(
          <TouchableOpacity 
          onPress={()=>navigation.navigate('EbookDetail',{
            title:item.title,
            pdf:item.link
          })}
          style={styles.card1}>
             <View style={{flexDirection:'row',alignItems:'center'}}>
               <Image style={{height:50,width:50}} source={{uri:item.icon}}/>
             <Text style={{marginLeft:20}}>{'QnA set 1'}</Text>
             </View>
          </TouchableOpacity>
        )}
        />
        </View>
      </View>
      <StatusBar />
      <BottomTab
        mobile={mobile}
      />
    </View>
  )
}
export default Book;