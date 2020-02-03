import { View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from 'emotion-theming';

export const Screen = ({ children, scrollable = true }) => {
  const theme = useTheme();
  return (
    <View style={{ backgroundColor: theme.backgroundColor, flex: 1 }}>
      {scrollable ? <ScrollView>{children}</ScrollView> : <View style={{ justifyContent: 'center', flex: 1 }}>{children}</View>}
    </View>
  )
}
