// libs
import React from "react";
import { StyleSheet, View } from "react-native";
// constants
import colors from "@/constants/colors";
// layouts
import Text from "@/components/Text";

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) {
    return null;
  }
  return (
    <View>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    color: colors.danger
  }
});
