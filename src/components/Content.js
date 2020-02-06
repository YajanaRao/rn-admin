import React from "react";
import { View, StyleSheet } from "react-native";

export const Content = ({ children, centered = false, p = 12 }) => {
  return (
    <View style={[{ padding: p }, centered ? styles.centered : styles.default]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    justifyContent: "center",
    alignItems: "center"
  },
  default: {
    justifyContent: "flex-start",
    alignItems: "center"
  }
});
