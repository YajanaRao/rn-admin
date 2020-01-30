import React from "react";
import styled from "@emotion/native";

const Surface = styled.View`
  margin: 6px;
  width: 100%;
`;

const TextInput = styled.TextInput(
  {
    borderWidth: 0.5,
    borderRadius: 4,
    padding: 12,
    width: "100%",
    borderColor: "grey",
    minWidth: 300
  },
  props => ({
    color: props.theme.text,
    backgroundColor: props.theme.backgroundColor,
    borderColor: props.error ? "red" : "grey"
  })
);

const Caption = styled.Text`
  font-size: 16;
  color: ${props => props.theme.text};
  padding: 1px;
  font-weight: 500;
  opacity: 0.5;
`;

const ErrorText = styled.Text`
  font-size: 14;
  color: red;
  padding: 1px;
  opacity: 0.8;
`;

export const Input = ({ value, onChangeText, error, label, placeholder }) => {
  return (
    <Surface>
      <Caption>{label}</Caption>
      <TextInput
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="grey"
        error={error}
      />
      {error ? <ErrorText>{error}</ErrorText> : false}
    </Surface>
  );
};
