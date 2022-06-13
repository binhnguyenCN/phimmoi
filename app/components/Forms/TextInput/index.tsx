// libs
import React from "react";
import { TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// constants
import colors from "@/constants/colors";
import defaultStyles from "@/config/styles";
// styles
import styles from "./styles";

type AppTextInputProps = {
  icon?: any;
  width?: string;
  value?: any;
  onChangeText?: any;
  onBlur?: any;
  type?: string;
  testID?: string;
};

const AppTextInput = ({
  icon,
  width = "100%",
  testID,
  ...otherProps
}: AppTextInputProps) => (
  <View style={[styles.container, { width }]}>
    {icon && (
      <MaterialCommunityIcons
        name={icon}
        size={20}
        color={colors.medium}
        style={styles.icon}
      />
    )}
    <TextInput
      placeholderTextColor={colors.medium}
      style={[defaultStyles.text, styles.inputText]}
      testID={testID}
      {...otherProps}
    />
  </View>
);
export default AppTextInput;
