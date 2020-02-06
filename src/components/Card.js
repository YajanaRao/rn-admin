import React from "react";
import { View } from "react-native";
import { useTheme } from "emotion-theming";

export const Card = ({ children, style }) => {
  const theme = useTheme();
  return (
    <View
      style={[
        {
          backgroundColor: theme.card,
          margin: 12,
          elevation: 4,
          borderRadius: 4,
          overflow: "hidden"
        },
        style
      ]}
    >
      {children}
    </View>
  );
};
