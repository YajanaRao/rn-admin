import React from "react";
import { View } from "react-native";
import styled from "@emotion/native";
import color from "color";
import { useTheme } from "emotion-theming";

import { getTextColor } from "./utils/color";
// import { TouchableOpacity } from 'react-native';

const TouchableOpacity = styled.TouchableOpacity({
  padding: 12,
  margin: 4,
  borderRadius: 4,
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  minWidth: 64,
  borderStyle: "solid",
  alignSelf: "stretch"
});

const ButtonText = styled.Text({
  fontSize: 15,
  fontWeight: "bold",
  textAlign: "center",
  marginHorizontal: 12,
  textTransform: "uppercase"
});

export const Button = ({ onPress, title, disabled = false }) => {
  const theme = useTheme();
  let backgroundColor = theme.primary;
  const isDark = color(theme.primary).isDark();
  let textColor = isDark ? "white" : "black";
  if (disabled) {
    backgroundColor = color(isDark ? "white" : "black")
      .alpha(0.12)
      .rgb()
      .string();
  }
  return (
    <View style={{ alignSelf: "stretch" }}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={{ backgroundColor }}
      >
        <ButtonText style={{ color: textColor }}>{title}</ButtonText>
      </TouchableOpacity>
    </View>
  );
};
