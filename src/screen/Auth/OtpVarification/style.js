import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import colors from '../../../component/colors';
export default StyleSheet.create({
    inputContainerStyle: {
        height: 50,
        borderRadius: hp('1%'),
        backgroundColor: '#ffffff',
        borderWidth:1
    },
    inputStyle: {
        fontSize: 14, 
        marginLeft: 10
    },
    container:{
        flex:1,
        backgroundColor:colors.white
    },
    back:{
        width:25,
        height:30
    },
    main:{
        justifyContent:'center',
        flex:1,
        paddingHorizontal:10
    },
    main2:{
        paddingHorizontal:15,
        marginBottom:10
    },
    forgot:{
        fontSize:16,
        fontWeight:'700'
    },
    change:{
        alignItems:'center',
        marginTop:30
    },
    main1:{
        width:'100%',
        backgroundColor:colors.red,
        height:45,
        justifyContent:'center',
        
        paddingHorizontal:10,
      
   },
   image:{
       width:30,
       height:30,
       tintColor:'white'
   },
   title:{
       color:'white',
       fontSize:17,
       fontFamily:'KRDEV011'
   },
   second:{
       padding:20,
       marginTop:100
    },
    otp:{
        width: 40,
        height: 45,
        borderWidth: 1,
        borderColor:'red',
        borderRadius:6,
        color:colors.red
    },
    button:{
        width:'100%',
        marginTop:30,
        marginBottom:50,
    },
    titleCont:{
        justifyContent:'flex-start',
        width:'100%'
    },
    imageCont:{
        width:'100%',
        alignItems:'center',
        marginTop:20
    },
    logo:{
        width:180,
        height:180
    },
    enter:{
        fontFamily:'Poppins-Medium',
        margin:6
    },
})