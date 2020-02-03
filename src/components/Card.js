import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'emotion-theming';



export const Card = ({ children }) => {
  const theme = useTheme();
  return (
    <View style={{ backgroundColor: theme.card, margin: 12, padding: 12, justifyContent: 'center', alignItems: 'center', elevation: 4 }}>
      {children}
    </View>
  );
}