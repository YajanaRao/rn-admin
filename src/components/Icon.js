import React from "react";
import IconGroup from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "emotion-theming";

export const Icon = ({ name, color }) => {
  const theme = useTheme();
  return (
    <IconGroup
      name={name}
      size={28}
      color={color || theme.text}
      style={{ opacity: 0.6 }}
    />
  );
};
