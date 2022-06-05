// libs
import LottieView from "lottie-react-native";
import React from "react";
import { View, StyleSheet } from "react-native";
// others
const loader = require("../../../assets/animations/loader.json");

type ActivityIndicatorProps = {
  onDone?: any;
  visible: boolean;
};

const ActivityIndicator = ({
  onDone,
  visible = false
}: ActivityIndicatorProps) => {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView loop autoPlay onAnimationFinish={onDone} source={loader} />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    zIndex: 1,
    opacity: 0.8
  }
});

export default ActivityIndicator;
