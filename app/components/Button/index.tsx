// libs
import React from "react";
import { Text, TouchableOpacity } from "react-native";
// constants
import colors from "@/constants/colors";
// styles
import styles from "./styles";

type ButtonProps = {
  title: string;
  color?: string;
  onPress?: () => void;
};
const AppButton = ({ title, color = "primary", onPress }: ButtonProps) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor: colors[color] }]}
    onPress={onPress}
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);
export default AppButton;
