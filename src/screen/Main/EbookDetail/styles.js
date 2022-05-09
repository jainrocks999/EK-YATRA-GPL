

import { StyleSheet ,Dimensions} from 'react-native';
import colors from "../../../component/colors";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    second:{
        flex:1
    },
    main:{
        width:'100%',
        height:45,
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:15,
        flexDirection:'row'
    },
    main2:{
        width:'100%',
        height:45,
        alignItems:'center',
       
        paddingHorizontal:10,
       
    },
    image:{
        width:30,
        height:30,
        tintColor:'white'
    },
    book:{
        color:'white',
        fontSize:17,
        fontFamily:'Poppins-Bold'
    },
    pdf: {
        width:Dimensions.get('window').width,
        height:'100%',
    },
    main1:{
        flex:1,
       
    },
   
    bottom:{
        backgroundColor:colors.red,
        height:50,
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:20,
       
    }
})