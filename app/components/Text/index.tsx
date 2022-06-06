// libs
import React from "react";
import { Text } from "react-native";
// config
import defaultStyles from "@/config/styles";

type TextProps = {
  children?: React.ReactNode;
  style?: object;
};

const AppText: React.FC<TextProps> = ({ children, style, ...otherProps }) => (
  <Text style={[defaultStyles.text, style]} {...otherProps}>
    {children}
  </Text>
);
export default AppText;
