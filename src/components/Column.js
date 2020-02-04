import React from "react";
import { View, Platform } from "react-native";

export const Column = ({ children }) => {
  const style =
    Platform.OS === "web" ? { flex: 1 } : { flexDirection: "column" };
  return <View style={style}>{children}</View>;
};
