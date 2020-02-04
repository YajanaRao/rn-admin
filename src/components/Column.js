import React from "react";
import { View } from "react-native";
import styled from "@emotion/native";

export const Column = ({ children }) => {
  return <View style={{ flexDirection: "column" }}>{children}</View>;
};
