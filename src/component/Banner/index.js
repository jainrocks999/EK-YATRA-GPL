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
 // console.log('hi............',item,imageKey);
  return (
      <View style={{alignItems:'center',justifyContent:'center',borderRadius:15}}>
    <TouchableOpacity >
      <View style={styles.imageContainer}>
        <Image
 style={{height:140,width:Platform.OS=='android'?300:330}} 
          resizeMode={Platform.OS=='android'?'center':'contain'}
          source={{uri: item.logo_image}}
        />
      </View>
    </TouchableOpacity>
    </View>
  );
};
export default Preview
const styles = StyleSheet.create({
  
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