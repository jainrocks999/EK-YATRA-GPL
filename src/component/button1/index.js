import React from "react";
import { Image, StyleSheet, Text, useWindowDimensions } from "react-native";
import colors from "../colors";
import AwesomeButton from "react-native-really-awesome-button";
const CustomButton1 = (props) => {
  const windowWidth = useWindowDimensions().width;
  return (
              <AwesomeButton
                backgroundDarker={'grey'}
                backgroundColor={colors.red}
                borderRadius={15}
                width={windowWidth-40}
                height={55}
                style={{
                  borderRadius: 6,
                  opacity:0.9,
                }}
                raiseLevel={4}
                onPress={props.onPress}
                >
                    <Text style={styles.textStyles}>{props.title}</Text>
              </AwesomeButton>
  );
};
const styles = StyleSheet.create({
  button: {
    width: "100%",
    height:40,
    backgroundColor: colors.pinckColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:8,
  },
  buttonText: {
    alignSelf: "center",
    color: colors.white,
    fontFamily:'Poppins-SemiBold',
    fontSize: 18,
  },
  textStyles:{ 
    color:colors.white,
    alignSelf: 'center',
    textTransform: 'capitalize',
    fontSize: 16
    }
});

export default CustomButton1;
