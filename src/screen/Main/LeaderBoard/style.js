import { StyleSheet } from 'react-native';
import colors from '../../../component/colors';


export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    second:{
     // height:'100%'
    },
    main:{
        width:'100%',
        backgroundColor:'red',
        height:45,
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10,
        flexDirection:'row'
    },
    leader:{
        color:'white',
        fontSize:17,
        fontFamily:'Poppins-Bold'
    },
    card:{shadowColor:'black',
        shadowOpacity:0.25,
        shadowRadius:4,
        shadowOffset:{height:2,width:0},
        elevation:5,
        borderRadius:10,
        borderWidth:2,
        borderColor:'#ddc393',
        backgroundColor:'white',
        marginTop:10,
        padding:10,
        marginHorizontal:10,
        marginBottom:10,
        flex:1,
        width:340,
        height:500,
        
        
    },
    main1:{
     
    },
    name:{
        fontFamily:'Poppins-SemiBold',
        color:colors.black,
        paddingHorizontal:10,
        fontSize:16,
    },
    time:{
        fontFamily:'Poppins-Medium',
        fontSize:13,
        color:'red'
    },
    score:{
        fontFamily:'Poppins-Medium',
        color:'red'
    },
    bottom:{
        bottom:0,
        right:0,
        left:0,
        position:'absolute'
    },
    image:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
})