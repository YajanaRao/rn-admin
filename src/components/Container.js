import React from "react";
import { View } from "react-native";

export const Container = ({ children }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {children}
    </View>
  );
};
