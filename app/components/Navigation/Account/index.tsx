// libs
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

type props = {
  size: number;
  color: string;
};

const AccountNavigation: React.FC<props> = ({ size, color }) => (
  <View>
    <MaterialCommunityIcons name="account" size={size} color={color} />
  </View>
);

export default AccountNavigation;
