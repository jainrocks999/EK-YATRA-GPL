import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';

const Preview = ({
  style,
  item,
  imageKey,
  onPress,
  index,
  active,
  local,
}) => {
  console.log('namee............',item,imageKey);
  return (
      
     <View style={{flex:1}}>
       <View style={[styles.card]}>
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <View style={{width:'100%'}}>
           <Image  style={{width:'100%',height:300}}
           // resizeMode="cover" 
            source={{uri:item.winner_image}}/>
           </View>
           <View style={{marginTop:10}}>
             <Text style={[styles.name,{fontSize:16}]}>
              {item.title}
             </Text>
           </View>
           <View>
             <Text style={[styles.name,{fontSize:14}]}>
               {item.description}
             </Text>
           </View>
          </View>
          </View>
          </View>
   
  );
};
export default Preview
const styles = StyleSheet.create({
    card:{
      shadowColor:'black',
        shadowOpacity:0.25,
        shadowRadius:4,
        shadowOffset:{height:2,width:0},
        elevation:5,
        borderRadius:10,
        borderWidth:2,
        borderColor:'#ddc393',
        backgroundColor:'white',
         marginTop:10,
        // padding:10,
        // marginHorizontal:10,
        // marginBottom:10,
       // flex:1,
        width:Platform.OS=='android'?330:360,
        height:450,
        
        
    },
    name:{
        fontFamily:'Poppins-SemiBold',
        color:'#000',
        paddingHorizontal:10,
        //fontSize:16,
    },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    
   // borderRadius:15
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});