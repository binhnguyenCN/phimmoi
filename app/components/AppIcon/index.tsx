// libs
import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// constants
import colors from "@/constants/colors";

const AppIcon = ({
  name,
  size = 40,
  backgroundColor = colors.black,
  iconColor = "#fff"
}) => (
  <View
    style={[
      styles.container,
      {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor
      }
    ]}
  >
    <MaterialCommunityIcons name={name} color={iconColor} size={size / 2} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  }
});
export default AppIcon;
