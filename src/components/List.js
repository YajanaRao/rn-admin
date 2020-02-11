import React from "react";
import styled from "@emotion/native";
import { Text } from "react-native";
import { useTheme } from "emotion-theming";
import color from "color";
import IconGroup from "react-native-vector-icons/MaterialCommunityIcons";

const ListContainer = styled.View(
  {
    padding: 12,
    width: "100%",
    flexDirection: "row"
  },
  props => ({ backgroundColor: props.theme.card })
);

const ListIcon = styled.View({
  marginHorizontal: 8,
  justifyContent: 'center'
});

const ListText = styled.View({
  flexDirection: "column",
  marginHorizontal: 8,
  flex: 10
})


const TitleText = styled.Text(
  {
    fontSize: 18,
    padding: 2
  },
  props => ({ color: props.theme.text })
);

export const List = ({ title, description, icon }) => {
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
      {icon ?
        <ListIcon>
          <IconGroup
            name={icon}
            size={28}
            color={titleColor}
            style={{ opacity: 0.6 }}
          />
        </ListIcon>
        :
        false
      }
      <ListText>
        <TitleText style={{ color: titleColor }}>{title}</TitleText>
        <Text style={{ fontSize: 16, color: descriptionColor, numberOfLines: 2 }}>
          {description}
        </Text>
      </ListText>
    </ListContainer>
  );
};
