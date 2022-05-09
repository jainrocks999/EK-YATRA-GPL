import { StyleSheet } from "react-native";
import colors from "../../component/colors";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: 20,
    height: 50,
    alignContent: "center",
    justifyContent: "space-between",
    backgroundColor: colors.yellow,
    borderBottomEndRadius: 20,
    opacity: 10,
    elevation: 10,
  },
  secondView: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10,
    marginVertical: 10,
  },
  textInputView: {
    alignItems: "center",
    flexDirection: "row",
    width: "85%",
    height: 40,
    backgroundColor: colors.white,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.Darkgrey,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 6,
  },
  textInput: {
    width: "90%",
    fontSize:11
  },

  flatListView: {
    backgroundColor: colors.white,
    marginTop: 10,
  },
  rowBack: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },

  backRightBtnRight: {
    right: 0,
  },
});
