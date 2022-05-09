import { StyleSheet } from 'react-native';
import colors from '../../../component/colors';


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 0
      },
      text: {
        color: colors.white,
        fontSize: 16,
        letterSpacing: -0.02,
        fontFamily: "Poppins-SemiBold"
      },
      safearea: {
        
      },
      innerCircleStyle: {
        alignSelf: 'center',
        position: 'absolute',
      },
      timerProgress: {
        width: '90%',
        marginTop:30,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      },
      button:{
        marginTop:40,
        backgroundColor:'#42cef5',
        paddingVertical:13,
        paddingHorizontal:25,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        
      },
      container1:{
       
      },
      view:{
        width:'100%',
        padding:10
      },
      view1:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    main:{
        width:'100%',
        backgroundColor:'red',
        height:45,
        alignItems:'center',
        justifyContent:'flex-start',
        paddingHorizontal:10,
        flexDirection:'row'
    },
    image:{
        width:30,
        height:30,
        tintColor:'white'
    },
    title:{
        color:'white',
        fontSize:17,
        fontFamily:'Poppins-Bold'
    },
    button1:{
      backgroundColor:'#02e7f7',
      width:'100%',
      height:45,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
      marginVertical:6,
    },
    main1:{
      backgroundColor:colors.pinckColor,
      paddingHorizontal:10,
      paddingVertical:4,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:5,
      width:'45%'
    },
    prog:{
      alignItems:'center',
      justifyContent:'space-between',
      margin:10,
    },
    ques:{
      marginTop:40,
      justifyContent:'center',
      alignItems:'center',
      padding:5
    },
    index:{
      fontSize:16,
      color:colors.black,
      fontFamily:'Poppins-SemiBold'
    },
    safe:{
      paddingHorizontal:10,
      marginTop:'10%',
      justifyContent:'center',
      alignItems:'center'
    },
    answer:{
      color:'white',
      fontSize:16,
      fontFamily:'Poppins-SemiBold'
    },
    round:{
      color:'white',
      fontFamily:'Poppins-SemiBold'
    },
    buttonContainer:{ 
      width: '100%', 
      alignItems: 'center', 
      marginBottom: 20 
    },
    main2:{ 
      width: '100%', 
      alignItems: 'center' 
    },
    title1:{
      color: 'white',
      fontSize: 18,
      fontFamily: 'Poppins-SemiBold'
    }

})