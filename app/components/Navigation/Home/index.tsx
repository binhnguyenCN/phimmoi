// libs
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

type props = {
  size: number;
  color: string;
};

const HomeNavigation: React.FC<props> = ({ size, color }) => (
  <View>
    <MaterialCommunityIcons name="home" size={size} color={color} />
  </View>
);
export default HomeNavigation;
