import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import styled from "@emotion/native";

const width = Dimensions.get("window").width;

const View = styled.View`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Column = ({ children }) => {
  const style =
    Platform.OS === "web" ? { flex: 1 } : { flexDirection: "column" };
  return <View style={style}>{children}</View>;
};

const Row = ({ children, responsive = false }) => {
  let direction = "row";
  if (responsive) {
    direction = width > 800 ? "row" : "column";
  }
  return <View style={{ flexDirection: direction }}>{children}</View>;
};

export const Grid = ({ children, item }) => {
  if (item) {
    <Column>{children}</Column>;
  }
  return <Row>{children}</Row>;
};
