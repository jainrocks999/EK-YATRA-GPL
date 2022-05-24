import { takeEvery, put, call } from 'redux-saga/effects';
import Api from '../Api';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';
import Storage from '../../component/AsyncStorage';

//Login
function* doLogin(action) {
  try {
    const data = new FormData();
    data.append('mobile', action.mobile)
    data.append('device_token', action.device_token)
    data.append('device_type', action.device_type)
    
    const response = yield call(Api.fetchDataByPOST, action.url, data);

 
    if (response.status == true) {
      yield put({
        type: 'User_Login_Success',
        payload: response.user,
      });
       Toast.show(response.msg);
       action.navigation.navigate('Otp',{
        name:response.user.name,
        mobile:response.user.phone,
        email:response.user.email,
        userid:response.user.userid,
        last_name:response.user.last_name,
        gender:response.user.gender,
        address:response.user.address,
        dob:response.user.dob,
        pincode:response.user.pincode,
        area:response.user.area,
        otp:response.user.otp,
        value:true
       })

    } else {
      // Toast.show(response.msg);
      Alert.alert(response.msg)
      yield put({
        type: 'User_Login_Error',
      });
    }
  }
  catch (error) {
    Toast.show(error.msg)
      yield put({
        type: 'User_Login_Error',
      });
  }
}

//Register
function* doRegister(action) {
  try {
    const data = new FormData();
    data.append('first_name', action.first_name);
    data.append('last_name', action.last_name);
    data.append('mobile', action.mobile)
    data.append('email_id', action.email_id);
    data.append('dob', action.dob);
    data.append('gender', action.gender)
    data.append('address', action.address);
    data.append('area', action.area);
    // data.append('city', action.city)
    data.append('password', action.password);
    // data.append('state', action.state);
    data.append('pincode', action.pincode)
    data.append('otp', action.opt);
    data.append('device_token', action.device_token);
    data.append('device_type', action.device_type)
    const response = yield call(Api.fetchDataByPOST, action.url, data);
    if (response.status == true) {
      Toast.show(response.msg);
      yield put({
        type: 'User_Register_Success',
        payload: response.data,
      });
      AsyncStorage.setItem(Storage.userid, response.data.userid)
      AsyncStorage.setItem(Storage.email, response.data.email)
      AsyncStorage.setItem(Storage.mobile, response.data.mobile)
      AsyncStorage.setItem(Storage.name, response.data.name)
      action.navigation.navigate('Home')
    } else {
      Toast.show(response.msg);
      yield put({
        type: 'User_Register_Error',
      });
    }
  }
  catch (error) {
    Toast.show(error.message)
    console.log(error.message)
     yield put({
        type: 'User_Register_Error',
      });
  }
}
////Logout
function* logout(action) {
  try {
    const data = new FormData();
    data.append('userid', action.userid)
    const response = yield call(Api.fetchDataByPOST, action.url, data);
    if (response.status == true) {
      yield put({
        type: 'User_Logout_Success',
        payload: response.user,
      });
      Toast.show(response.msg);
      AsyncStorage.setItem(Storage.userid, '')
      AsyncStorage.setItem(Storage.email, '')
      AsyncStorage.setItem(Storage.mobile,'')
      AsyncStorage.setItem(Storage.name, '')
      AsyncStorage.setItem(Storage.commonQuizId, '')

      // AsyncStorage.clear();
      action.navigation.navigate('Login')
    } else {
      Toast.show(response.msg);
      yield put({
        type: 'User_Logout_Error',
      });
    }
  }
  catch (error) {
    Toast.show(error.message)
  }
}

/////OTP Varification
function* OTPVarification(action) {
  try {
    const data = new FormData();
    data.append('otp', action.otp)
    data.append('mobile', action.mobile)
    const response = yield call(Api.fetchDataByPOST, action.url, data);
    if (response.status == true) {
      yield put({
        type: 'OTP_Varification_Success',
        payload: response.user,
      })
      Toast.show(response.msg);
      AsyncStorage.setItem(Storage.userid, response.user.userid)
      AsyncStorage.setItem(Storage.email, response.user.email)
      AsyncStorage.setItem(Storage.mobile, response.user.phone)
      AsyncStorage.setItem(Storage.name, response.user.name)
      action.navigation.navigate('Home')
    } else {
      Toast.show(response.msg);
      yield put({
        type: 'OTP_Varification_Error',
      });
    }
  }
  catch (error) {
    Toast.show(error.message)
  }
}

///Sned otp
function* OTPSend(action) {
  try {
    const data = new FormData();
    data.append('mobile', action.mobile)
    const response = yield call(Api.fetchDataByPOST, action.url, data);
    if (response.status == false) {
      yield put({
        type: 'OTP_Send_Success',
        payload: response.user,
      })
      action.navigation.navigate('Otp',{
        first_name:action.first_name,
        last_name:action.last_name,
        mobile:action.mobile,
        email_id:action.email_id,
        dob:action.dob,
        gender:action.gender,
        address:action.address,
        area:action.area,
        // city:action.city,
        password:action.password,
        // state:action.state,
        otp:response.user.otp,
        pincode:action.pincode,
        device_token:action.device_token,
        device_type:action.device_type,
    });
    } else {
      yield put({
        type: 'OTP_Send_Error',
      })
       Toast.show(response.msg);
    }
  }
  catch (error) {
    Toast.show(error.message)
  }
}

//GetList
function* getList(action) {
  console.log('i am getting user is',action, action.user_id);
  const data = new FormData();
  data.append('user_id',action.user_id);
  const response = yield call(Api.fetchDataByPOST, action.url,data);
  console.log('this isi reposce calie adjkfdkl',response.data);
  if (response.status == true) {
    yield put({
      type: 'Category_List_Success',
      payload: response.data,
    });
  } else {
    yield put({
      type: 'Category_List_Error',
    });
  }
}

//getQuizById
 function* getQuizById(action) {
 
  const data = new FormData();
  data.append('quiz_id', action.quiz_id);
  const response = yield call(Api.fetchDataByPOST, action.url, data);
  if (response.status == true) {
    yield put({
      type: 'Get_Quiz_List_Success',
      payload: response.data,
    });
    action.navigation.navigate('Quiz',{
      quiz_id:action.quiz_id
     })
  } else {
    Toast.show(response.data)
    yield put({
      type: 'Get_Quiz_List_Error',
    });
  }
}

//Sponsor
function* getSponsor(action) {
  const response = yield call(Api.fetchDataByPOST, action.url);
  console.log('.............',response.data);
  if (response.status == true) {
    yield put({
      type: 'Sponsor_List_Success',
      payload: response.data,
    });
  } else {
    yield put({
      type: 'Sponsor_List_Error',
    });
  }
}
//Summery or LastPage
function* Summery(action) {
  try {
    const data = new FormData();
    data.append('user_id', action.user_id)
    data.append('quiz_id', action.quiz_id)
    data.append('no_of_correct', action.no_of_correct)
    data.append('no_of_incorrect', action.no_of_incorrect)
    data.append('total_attempts', action.total_attempts)
    data.append('total_question', action.total_question)
    data.append('time_taken', action.time_taken)

    const response = yield call(Api.fetchDataByPOST, action.url, data);
    
    if (response.status == true) {
      yield put({
        type: 'User_Summery_Success',
        payload: response,
      });
      Toast.show(response.msg);
    } else {
      Toast.show(response.msg);
      yield put({
        type: 'User_Summery_Error',
      });
    }
  }
  catch (error) {
    Toast.show(error.message)
  }
}

//getPlayedQuiz
function* PlayedQuiz(action) {
  const data = new FormData();
  data.append('user_id', action.user_id)
  const response = yield call(Api.fetchDataByPOST, action.url, data);
  if (response.status == true) {
    yield put({
      type: 'Played_Quiz_Success',
      payload: response.data,
    });
  } else {
    yield put({
      type: 'Played_Quiz_Error',
    });
  }
}


//attemptQuestion
function* AttemptQuestion(action) {
  try {
    const data = new FormData();
    data.append('statistics_id', action.statistics_id)
    data.append('attempdata', JSON.stringify(action.attempdata))
    const response = yield call(Api.fetchDataByPOST, action.url, data);
    if (response.status==true) {
      yield put({
        type: 'Attempt_Question_Success',
        payload: response,
      });
      Toast.show(response.msg);
    } else {
      Toast.show(response.msg);
      yield put({
        type: 'Attempt_Question_Error',
      });
    }
  }
  catch (error) {
    Toast.show(error.message)
  }
}


//UpdateProfile
function* UpdateProfile(action) {
  console.log('hi...........ff.......');
  try {
    const data = new FormData();
    data.append('userid',action.userid)
    data.append('first_name', action.first_name);
    data.append('last_name', action.last_name);
    data.append('address', action.address);
    data.append('area', action.area);
   data.append('gender',action.gender);
   data.append('mobile',action.mobile);
   data.append('email_id',action.email_id);
    data.append('pincode', action.pincode);
   data.append('dob',action.dob);
    const response = yield call(Api.fetchDataByPOST, action.url, data);
    console.log(',,,,,,,,,,,dddd,d,d,,',response);
    if (response.status == true) {
      Toast.show(response.msg);
      yield put({
        type: 'Update_Profile_Success',
        payload: response.data,
      });
      AsyncStorage.setItem(Storage.userid, response.user.userid)
      AsyncStorage.setItem(Storage.email, response.user.email)
      AsyncStorage.setItem(Storage.mobile, response.user.phone)
      AsyncStorage.setItem(Storage.name, response.user.first_name)
      AsyncStorage.setItem(Storage.last_name,response.user.last_name)
      AsyncStorage.setItem(Storage.address,response.user.address)
      AsyncStorage.setItem(Storage.pincode,response.user.pincode)
      AsyncStorage.setItem(Storage.gender,response.user.gender)
      AsyncStorage.setItem(Storage.dob,response.user.dob)
      AsyncStorage.setItem(Storage.area,response.user.area)
     action.navigation.navigate('Home')

    } else {
      Toast.show(response.msg);
      yield put({
        type: 'Update_Profile_Error',
      });
    }
  }
  catch (error) {
    Toast.show(error.message)
    console.log(error.message)
     yield put({
        type: 'Update_Profile_Error',
      });
  }
}
//Notication
function* getNotification(action) {
  try {
    const data = new FormData();
    data.append('user_id', action.user_id)
    const response = yield call(Api.fetchDataByPOST, action.url, data);
    if (response.status=true) {
      yield put({
        type: 'Get_Notification_Success',
        payload: response.data,
      });
    } else {
      yield put({
        type: 'Get_Notification_Error',
      });
    }
  }
  catch (error) {
     yield put({
        type: 'Get_Notification_Error',
      });
  }
}

function* getWinner(action) {
  try {
    const response = yield call(Api.fetchDataByGET, action.url);
    if (response.status=true) {
      yield put({
        type: 'Winner_List_Success',
        payload: response.data,
      });
    } else {
      yield put({
        type: 'Winner_List_Error',
      });
    }
  }
  catch (error) {
     yield put({
        type: 'Winner_List_Error',
      });
  }
}

function* getArea(action) {
  try {
    const response = yield call(Api.fetchDataByGET, action.url);
    if (response.status=true) {
      yield put({
        type: 'Area_List_Success',
        payload: response.data,
      });
    } else {
      yield put({
        type: 'Area_List_Error',
      });
    }
  }
  catch (error) {
     yield put({
        type: 'Area_List_Error',
      });
  }
}

export default function* authSaga() {
  yield takeEvery('User_Login_Request', doLogin);
  yield takeEvery('User_Register_Request', doRegister);
  yield takeEvery('User_Logout_Request', logout);
  yield takeEvery('OTP_Varification_Request', OTPVarification)
  yield takeEvery('Category_List_Request', getList)
  yield takeEvery('Get_Quiz_List_Request', getQuizById)
  yield takeEvery('Sponsor_List_Request', getSponsor)
  yield takeEvery('User_Summery_Request', Summery);
  yield takeEvery('Played_Quiz_Request', PlayedQuiz);
  yield takeEvery('OTP_Send_Request',OTPSend)
  yield takeEvery('Attempt_Question_Request',AttemptQuestion)
  yield takeEvery('Update_Profile_Request',UpdateProfile)
  yield takeEvery('Get_Notification_Request',getNotification)
  yield takeEvery('Winner_List_Request',getWinner)
  yield takeEvery('Area_List_Request',getArea)

}
