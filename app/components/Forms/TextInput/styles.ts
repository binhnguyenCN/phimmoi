// libs
import { StyleSheet } from "react-native";
// constants
import colors from "@/constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    paddingRight: 30,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  },
  inputText: {
    flex: 1,
    color: colors.black
  }
});

export default styles;
