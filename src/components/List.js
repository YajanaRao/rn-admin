import React from "react";
import styled from "@emotion/native";
import { Text } from "react-native";
import { useTheme } from "emotion-theming";
import color from "color";

const ListContainer = styled.View(
  {
    padding: 12,
    width: "100%"
  },
  props => ({ backgroundColor: props.theme.card })
);

const TitleText = styled.Text(
  {
    fontSize: 18,
    padding: 2
  },
  props => ({ color: props.theme.text })
);

export const List = ({ title, description }) => {
  const theme = useTheme();
  const titleColor = color(theme.text)
    .alpha(0.87)
    .rgb()
    .string();
  const descriptionColor = color(theme.text)
    .alpha(0.54)
    .rgb()
    .string();
  return (
    <ListContainer>
      <TitleText style={{ color: titleColor }}>{title}</TitleText>
      <Text style={{ fontSize: 16, color: descriptionColor }}>
        {description}
      </Text>
    </ListContainer>
  );
};
