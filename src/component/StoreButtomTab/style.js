import { Dimensions, StyleSheet } from 'react-native';
import colors from '../colors';
export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor:colors.red,
    alignItems: 'center',
    justifyContent: 'space-between',
    opacity: 10,
    paddingVertical:5,
  },

  itemSeperator: {
    borderBottomWidth: 0.5,
    borderColor: '#C1C1C1',
    width: '50%',
  },
  bottomTab: {
    tintColor: 'white',
    height: 22,
    width: 22,
  },
  bottomTab1: {
    height: 40,
    width: 40,
  },
  buttonText: {
    fontSize: 10,
    alignSelf: 'center',
    width: 90,
    padding: 4,
    textAlign: 'center',
  },
  text:{
    fontSize: 12,
    color:'white',
    fontFamily:'Poppins-SemiBold',
    marginTop:2
  },
  container:{
    justifyContent: 'center', 
    alignSelf: 'center', 
    alignItems: 'center'
  }
});
