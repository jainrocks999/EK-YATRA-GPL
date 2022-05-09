import { StyleSheet } from 'react-native';
import { colors } from 'react-native-elements';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    second: {
        padding: 10,
        flex: 1
    },
    main: {
        width: '100%',
        backgroundColor: 'red',
        height: 45,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    image: {
        width: 35,
        height: 30,
        tintColor: 'white'
    },
    contact: {
        color: 'white',
        fontSize: 17,
        fontFamily: 'Poppins-Bold'
    },
    main1: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    view: {
        flexDirection: 'row',
        marginTop: 10
    },
    text: {
        fontFamily: 'Poppins-Medium',
        marginLeft: 6,
        color:colors.black
    },
    text1: {
        fontFamily: 'Poppins-Medium',
        marginLeft: 6,
        color:'green'
    },
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { height: 2, width: 0 },
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth:2,
        borderColor:'#ddc393',
        margin: 20,
        padding: 10
    }
})