import { StyleSheet ,Dimensions} from 'react-native';


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
        backgroundColor:'red',
        height:45,
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10,
        flexDirection:'row'
    },
    image:{
        width:35,
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
})