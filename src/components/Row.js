import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import styled from "@emotion/native";

const width = Dimensions.get("window").width;

const View = styled.View`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Row = ({ children, responsive = false }) => {
  let direction = "row";
  if (responsive) {
    direction = width > 800 ? "row" : "column";
  }
  return <View style={{ flexDirection: direction }}>{children}</View>;
};
