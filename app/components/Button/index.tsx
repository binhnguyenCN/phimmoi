// libs
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
// constants
import colors from "@/constants/colors";
// styles
import styles from "./styles";

type ButtonProps = {
  title: string;
  color?: string;
  testID?: string;
  onPress?: () => void;
};

const AppButton = ({
  title,
  color = "primary",
  testID,
  onPress
}: ButtonProps) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor: colors[color] }]}
    onPress={onPress}
  >
    <View testID={testID}>
      <Text style={styles.text}>{title}</Text>
    </View>
  </TouchableOpacity>
);
export default AppButton;
