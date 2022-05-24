import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    second:{
        padding:20,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    view:{
        width:'100%',
        justifyContent:'flex-start'
    },
    view1:{
        width:'100%',
        justifyContent:'flex-start',
        marginTop:10,
        flexDirection:'row'
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
        width:30,
        height:30,
        tintColor:'white'
    },
    title:{
        color:'white',
        fontSize:17,
        fontFamily:'KRDEV011'
    },
    drop:{
        width:'100%',
        height:40,
        borderWidth:1,
        justifyContent:'center',
        paddingHorizontal:10,
        borderRadius:10,
        borderColor:'grey'
    },
    imageCont:{
        alignItems:'center',
        marginTop:20
    },
    button:{
        width:'100%',
        marginTop:30
    },
    logo:{
        width:180,
        height:180
    },
    img:{height: 12, width: 12, marginLeft: 2}
   
})