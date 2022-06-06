// libs
import { StyleSheet } from "react-native";
// constants
import colors from "@/constants/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.dark,
    alignItems: "center"
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1
  },
  title: {
    fontWeight: "500"
  },
  subTitle: {
    color: colors.medium
  }
});

export default styles;
