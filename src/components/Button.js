import React from "react";
import styled from "@emotion/native";
import { getTextColor } from "./utils/color";
// import { TouchableOpacity } from 'react-native';

const TouchableOpacity = styled.TouchableOpacity(
  {
    padding: 12,
    margin: 4,
    borderRadius: 4,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#d4e2f7",
    minWidth: 64,
    borderStyle: "solid"
  },
  props => ({ backgroundColor: props.theme.primary })
);

const ButtonText = styled.Text(
  {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 12,
    textTransform: "uppercase"
  },
  props => ({ color: getTextColor(props.theme.primary) })
);

export const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </TouchableOpacity>
  );
};
