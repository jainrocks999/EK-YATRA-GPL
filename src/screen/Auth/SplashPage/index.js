import React,{useEffect,useState} from 'react';
import { View,Text,Image,TouchableOpacity,Linking ,Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './style';
import axios from 'axios';
import Modal from 'react-native-modal';
import { useDispatch} from "react-redux";
import colors from '../../../component/colors';
const Splash=()=>{
    const navigation=useNavigation()
    const [isModalVisible, setModalVisible] = useState(false);
    const dispatch=useDispatch();
    useEffect(async() => {
        const value=await AsyncStorage.getItem('value')
        if (value==1) {
            setTimeout(() => navigation.replace("Notification"), 2000);
            AsyncStorage.setItem('value','0')
        } else {
            appVersion()
        }
      }, []);
      useEffect(()=>{
        dispatch({
          type: 'Sponsor_List_Request',
          url: 'sponsor',
        })
      },[])

      const appVersion = async (url) => {
        try {
          const response = await axios({
            method: 'GET',
            headers: {
              'content-type': 'multipart/form-data',
              Accept: 'multipart/form-data',
            },
            url: 'https://ekyatraterapanth.com/gpl/index.php/api/version',
          });https://ekyatraterapanth.com/gpl/index.php/api/
          console.log("aaaaaaaaaaaaaa",response.data);
          if (Platform.OS=='android') {
            if (response.data.android_version > 1) {
              setModalVisible(true)
             } else {
              initial();
             }
          } else {
            if (response.data.ios_version > 1) {
              setModalVisible(true)
             } else {
                initial();
             }
          }
         
        } catch (error) {
          throw error;
        }
      };

      const initial = async () => {
         setTimeout(() => navigation.replace("DashBoardPage"), 2000);
          setModalVisible(false)
      }
    const openUrl=()=>{
      if (Platform.OS=='android') {
        Linking.openURL("https://play.google.com/store/apps/details?id=com.abtypapp")
      } else {
        Linking.openURL("https://apps.apple.com/in/app/ek-yatra/id1578248971")
      }
       
    }
    return(
        <View style={styles.container}>
             <Modal
                isVisible={isModalVisible}
                >
                <View style={styles.modal}>
                <View style={{width: '100%'}}>
                    <Text
                    style={{
                        color:colors.red,
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>
                    Update
                    </Text>
                </View>
                <TouchableOpacity style={styles.ModelmsgView}>
                    <Text style={styles.ModelMsgText}>{'New Update Available'}</Text>
                </TouchableOpacity>

                <View
                    style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    width: '100%',
                    }}>
                    <TouchableOpacity style={styles.popup}
                     onPress={()=>openUrl()}
                     >
                    <Text style={styles.ModelBtntext}>Download Now</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </Modal>
            <Image style={styles.image} 
            resizeMode={'cover'}
             source={require('../../../assets/Images/GPL.png')}/>
        </View>
    )
}
export default Splash;