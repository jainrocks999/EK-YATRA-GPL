import { StyleSheet } from 'react-native';
import colors from '../../../component/colors';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // alignSelf:'center'
    },
    second: {
       // padding: 10,
        width: '100%',
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        width: '100%',
        backgroundColor: 'red',
        height: 45,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    image: {
        width: 30,
        height: 30,
        tintColor: 'white'
    },
   
  
    card1: {
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { height: 2, width: 0 },
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        width: '94%',
        margin: 10,
        paddingHorizontal:15,
        paddingVertical:10,
        justifyContent:'center',
        borderWidth:2,
        borderColor:'#ddc393',
    },
    title:{ 
        fontSize: 13,
        fontFamily: 'Poppins-Medium'
    },
    value:{ 
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        width:'60%'
    },
    cardCont:{
        flexDirection:'row',
        justifyContent:'space-between',
        //alignItems:'center'
    },
     image5:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
    

})