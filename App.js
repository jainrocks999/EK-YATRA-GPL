import React, { useEffect, useState } from 'react';
import { SafeAreaView, LogBox, } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/Redux/Store';
import RootApp from './src/navigator';
import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-community/async-storage';
import * as RootNavigation from './src/navigator/rootNavigation';
import Storage from './src/component/AsyncStorage';
import crashlytics from '@react-native-firebase/crashlytics';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import colors from './src/component/colors';
import messaging from '@react-native-firebase/messaging';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

PushNotification.createChannel(
  {
    channelId: "default-channel-id",
    channelName: "My channel",
    vibrate: true,
  },
  (created) => console.log(`createChannel returned '${created}'`)
);
const App = (props) => {
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
   
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
     
      getFcmTocken();
    }
  }
  const getFcmTocken = async () => {
    let cheackToken = await AsyncStorage.getItem('fcmTocken');
   
    if (!cheackToken) {
      try {
      
        const fcmTocken = await messaging().getToken()
        if (!!fcmTocken) {
        
          AsyncStorage.setItem(Storage.Token, fcmTocken);
        }
      } catch (error) {
       
        alert(error?.message)

      }
    }

  }
  const notificationListener = async () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
      
    });
    messaging().onMessage(async remoteMessage => {
     
      messaging()
        .getInitialNotification()
        .then(remoteMessage => {
          if (remoteMessage) {
            
          }
        })
    })
  }

  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [user_id, setUser_id] = useState('')

  useEffect(async () => {
    
    const email = await AsyncStorage.getItem(Storage.email)
    const mobile = await AsyncStorage.getItem(Storage.mobile)
    const user_id = await AsyncStorage.getItem(Storage.userid)
   
    setEmail(email)
    setMobile(mobile)
    setUser_id(user_id)
    crashlytics().log('Analytics page just mounted')
    getCrashlyticsDetail(email, mobile, user_id)

    return () => {
      crashlytics().log('Analytics page just unmounted')
    }
  }, [])

  useEffect(async()=>{
    notificationListener();
    requestUserPermission();

  },[])

  PushNotification.configure({
    onRegister: function (token) {
      AsyncStorage.setItem(Storage.Token, token.token)
    },
    onNotification: function (notification) {
      
     
      notification.finish(PushNotificationIOS.FetchResult.NoData);
      if (notification.userInteraction === true && notification.foreground == false) {
        RootNavigation.replace('Splash')
        AsyncStorage.setItem('value', '1')
      }
      else {
        if (notification.userInteraction == true && notification.foreground == true) {
          RootNavigation.replace('Notification')
        }
      }
    },

    onAction: function (notification) {
    },
    onRegistrationError: function (err) {
      console.error(err.message, err);
    },

    popInitialNotification: true,
    requestPermissions: true,
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },

  });

  const getCrashlyticsDetail = (email, mobile, user_id) => {
    try {
      crashlytics().setUserId(user_id)
      crashlytics().setAttribute('user_id', user_id)
      crashlytics().setAttributes({
        role: 'user',
        email: email,
        mobile: mobile
      })
    } catch (err) {
      crashlytics().recordError(err)
    }
  }

  return (
    <SafeAreaView style={{
      flex: 1,backgroundColor:colors.red
    }}>
      <Provider store={Store}>
        <RootApp />
      </Provider>
    </SafeAreaView>
  );
}
export default App;