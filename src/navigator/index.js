import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screen/Auth/SplashPage";
import DashBoardPage from "../screen/DashboardPage";
import OtpVarification from '../screen/Auth/OtpVarification'
import Summery from '../screen/Main/Summery';
import QuizScreen from '../screen/Main/QuizScreen';
import CategoryScreen from '../screen/Main/CategoryScreen';
import Profile from '../screen/Main/Profile'
import Notification from '../screen/Main/Notification'
import {navigationRef } from './rootNavigation';
import EbookDetail from '../screen/Main/EbookDetail';
const Stack = createStackNavigator();
function Navigate() {
  return (
    //InitialPages
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="DashBoardPage" component={DashBoardPage} /> 
        <Stack.Screen name="Otp" component={OtpVarification}/>
        <Stack.Screen name="Summery" component={Summery}/>
        <Stack.Screen name='Category' component={CategoryScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Notification" component={Notification}/>
        <Stack.Screen name="EbookDetail" component={EbookDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigate;
