import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../colors';
const CustomButton = (props) => {
  return (
    <TouchableOpacity style={[styles.button,props.style]} onPress={props.onPress}>
      <View style={{flexDirection: 'row', width: '80%'}}>
        <Image
          resizeMode={'center'}
          style={{width: 30, height: 30, marginRight: 20}}
          source={props.source}
        />
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.50,
shadowRadius: 3.84,

elevation: 5,
    flexDirection: 'row',
    height: 50,
    width: '100%',
    padding: 10,
    marginTop: 15,
    backgroundColor: colors.blue,
    opacity: 87,

    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    color: colors.black,
    fontSize: 14,
    alignSelf: 'center',

 
    textAlign: 'center',
  },
});

export default CustomButton;
