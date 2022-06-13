// libs
import Constants from "expo-constants";
import React from "react";
import { SafeAreaView, View } from "react-native";
// styles
import styles from "./styles";

type LayoutScreenProps = {
  hasHeader?: boolean;
  style?: object;
  children?: React.ReactNode;
  testID?: string;
};

const Screen: React.FC<LayoutScreenProps> = ({
  hasHeader = false,
  style,
  children,
  testID
}) => (
  <SafeAreaView
    style={[
      styles.screen,
      hasHeader ? { paddingTop: 0 } : { paddingTop: Constants.statusBarHeight }
    ]}
  >
    <View style={[styles.container, style]} testID={testID}>
      {children}
    </View>
  </SafeAreaView>
);
export default Screen;
