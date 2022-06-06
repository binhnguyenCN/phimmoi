// libs
import { DarkTheme } from "@react-navigation/native";
// constants
import colors from "@/constants/colors";

const NavigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.white,
    background: colors.black
  }
};
export default NavigationTheme;
