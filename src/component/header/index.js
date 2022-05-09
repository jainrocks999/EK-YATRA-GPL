import React from 'react';
import { View,Text,TouchableOpacity ,StyleSheet,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../colors';
const Header=({title,source})=>{
    const navigation=useNavigation()
    return(
        <View>
            <View style={styles.main}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image style={styles.drawer} source={require('../../assets/Images/drawer1.png')}/>
            </TouchableOpacity>
            <Text style={styles.text}>{title} </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
            <Image style={styles.drawer} source={source}/>
            </TouchableOpacity>
           </View>
        </View>
    )
}
export default Header
const styles=StyleSheet.create({
    main:{
        width:'100%',
        backgroundColor:colors.red,
        height:45,
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:15,
        flexDirection:'row'
    },
    drawer:{
        width:30,
        height:30,
        tintColor:'white'
    },
    text:{
        color:'white',
        fontSize:18,
        fontFamily:'Poppins-SemiBold'
    },
})