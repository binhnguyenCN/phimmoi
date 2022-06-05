// constants
import colors from "@/constants/colors";
// libs
const { Platform } = require("react-native");

const defaultStyles = {
  colors,
  text: {
    color: colors.white,
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir"
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto"
      }
    })
  }
};
export default defaultStyles;
