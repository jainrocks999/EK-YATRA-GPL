initialstate = {
  isFetching: false,
  UserDetails: [],
  RegisterDetails: [],
  Logout: [],
  OTP: [],
  CategoryList:[],
  GetListById:null,
  Sponsor:[],
  Summery:[],
  PlayedQuiz:[],
  otpResponse:[],
  notificationData:[],
  Winner:[],
  Area:[],
};
export default (state = initialstate, action) => {
  switch (action.type) {
    //Login
    case 'User_Login_Request':
      return { ...state, isFetching: true };
    case 'User_Login_Success':
      return { ...state, isFetching: false, UserDetails: action.payload };
    case 'User_Login_Error':
      return { ...state, isFetching: false };
    //Register
    case 'User_Register_Request':
      return { ...state, isFetching: true };
    case 'User_Register_Success':
      return { ...state, isFetching: false, RegisterDetails: action.payload };
    case 'User_Register_Error':
      return { ...state, isFetching: false };
    //Logout
    case 'User_Logout_Request':
      return { ...state, isFetching: true };
    case 'User_Logout_Success':
      return { ...state, isFetching: false, Logout: action.payload };
    case 'User_Logout_Error':
      return { ...state, isFetching: false };
    
    //Otp 
    case 'OTP_Varification_Request':
      return { ...state, isFetching: true };
    case 'OTP_Varification_Success':
      return { ...state, isFetching: false, OTP: action.payload };
    case 'OTP_Varification_Error':
      return { ...state, isFetching: false };

    // send otp
    case 'OTP_Send_Request':
      return { ...state, isFetching: true };
    case 'OTP_Send_Success':
      return { ...state, isFetching: false, otpResponse: action.payload };
    case 'OTP_Send_Error':
      return { ...state, isFetching: false };
    //Quiz kart
    case 'Quiz_Data_Request':
      return { ...state, isFetching: true };
    case 'Quiz_Data_Success':
      return { ...state, isFetching: false, QuizData: action.payload };
    case 'Quiz_Data_Error':
      return { ...state, isFetching: false };

    //CategoryList
    case 'Category_List_Request':
      return { ...state, isFetching: true };
    case 'Category_List_Success':
      return { ...state, isFetching: false, CategoryList: action.payload };
    case 'Category_List_Error':
      return { ...state, isFetching: false };
    //getQuiz
    case 'Get_Quiz_List_Request':
      return { ...state, isFetching: true };
    case 'Get_Quiz_List_Success':
      return { ...state, isFetching: false, GetListById: action.payload };
    case 'Get_Quiz_List_Error':
      return { ...state, isFetching: false };

    //LeaderBoard
    case 'Sponsor_List_Request':
      return { ...state, isFetching: true };
    case 'Sponsor_List_Success':
      return { ...state, isFetching: false, Sponsor: action.payload };
    case 'Sponsor_List_Error':
    return { ...state, isFetching: false };
     //Get Winner List
    case 'Winner_List_Request':
      return { ...state, isFetching: true };
    case 'Winner_List_Success':
      return { ...state, isFetching: false, Winner: action.payload };
    case 'Winner_List_Error':
      return { ...state, isFetching: false };
  
    //Summery or LastPage
    case 'User_Summery_Request':
      return { ...state, isFetching: true };
    case 'User_Summery_Success':
      return { ...state, isFetching: false, Summery: action.payload };
    case 'User_Summery_Error':
      return { ...state, isFetching: false };
    //PlayedQuizInformation
    case 'Played_Quiz_Request':
      return { ...state, isFetching: true };
    case 'Played_Quiz_Success':
      return { ...state, isFetching: false, PlayedQuiz: action.payload };
    case 'Played_Quiz_Error':
      return { ...state, isFetching: false };  
    //AttempQuestion
    case 'Attempt_Question_Request':
      return { ...state, isFetching: true };
    case 'Attempt_Question_Success':
      return { ...state, isFetching: false,};
    case 'Attempt_Question_Error':
      return { ...state, isFetching: false }; 
    //UpdateProfile
    case 'Update_Profile_Request':
      return { ...state, isFetching: true };
    case 'Update_Profile_Success':
      return { ...state, isFetching: false,};
    case 'Update_Profile_Error':
      return { ...state, isFetching: false };
    //getNotification
    case 'Get_Notification_Request':
      return { ...state, isFetching: true };
    case 'Get_Notification_Success':
      return { ...state, isFetching: false,notificationData:action.payload};
    case 'Get_Notification_Error':
   return { ...state, isFetching: false };

   case 'Area_List_Request':
    return { ...state, isFetching: true };
   case 'Area_List_Success':
    return { ...state, isFetching: false,Area:action.payload};
    case 'Area_List_Error':
    return { ...state, isFetching: false };


    default:
      return state;
  }
};
