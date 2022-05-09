import { StyleSheet } from 'react-native';
import colors from '../../../component/colors';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // alignSelf:'center'
    },
    second: {
        padding: 10,
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       // marginBottom:20
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
    text: {
        color: 'white',
        fontSize: 17,
        fontWeight: '700'
    },
    main1: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    card: {
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#8f3d61',
        width: '45%',
        padding: 4,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop:10
    },
    card1: {
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { height: 2, width: 0 },
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 140,
        width: '46%',
        margin: 8,
        alignItems:'center',
        paddingHorizontal:5,
        paddingVertical:10,
        borderWidth:2,
        borderColor:'#ddc393',
    },
    round: {
        color: colors.black,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        padding: 4,
    },
    round1: {
        color: colors.red,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        padding: 4,
    },
    round2:{
        color:'white', 
        padding: 4, 
        fontSize: 12, 
    }

})