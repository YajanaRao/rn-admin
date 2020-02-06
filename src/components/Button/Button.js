import React from "react";
import { View } from "react-native";
import styled from "@emotion/styled";
import color from "color";
import { useTheme } from "emotion-theming";

// import { TouchableOpacity } from 'react-native';
const TouchableOpacity = styled.button`
  display: inline-block;
  border-radius: 4px;
  cursor: ${props => (props.disabled ? "not-allowed;" : "pointer;")};
  font-size: 15px;
  font-weight: bold;
  padding: 12px;
  text-transform: uppercase;
  border-style: none;
  &:hover {
    opacity: 0.85;
    text-decoration: none;
  }
`;

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
        onClick={onPress}
        disabled={disabled}
        style={{ backgroundColor, color: textColor }}
      >
        {title}
      </TouchableOpacity>
    </View>
  );
};
