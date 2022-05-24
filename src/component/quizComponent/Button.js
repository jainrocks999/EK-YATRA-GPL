import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../colors";

const styles = StyleSheet.create({
  button: {
    backgroundColor: color,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "86%",
    marginTop: 10,
    borderWidth:1,
    borderColor:colors.red
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    color:'#000'
  },
  buttonContainer: {
    //flexDirection: "row",
   // flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems:'center',
  }
});

export const Button = ({ text,disable,color, onPress = () => {} }) => (
  <TouchableOpacity disabled={disable} onPress={onPress} style={[styles.button,{ backgroundColor:color?color:'#fff'}]}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export const ButtonContainer = ({ children }) => (
  <View style={styles.buttonContainer}>{children}</View>
);