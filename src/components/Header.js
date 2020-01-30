import React from "react";
import styled from "@emotion/native";
import { css } from "@emotion/core";
import { Link } from "react-router-native";
import { getTextColor } from "./utils/color";

const AppBar = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 20px;
  background-color: ${props => props.theme.card};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 60;
`;

const Title = styled.Text(
  {
    fontSize: 20,
    margin: 2,
    fontWeight: "900"
  },
  props => ({ color: props.theme.text })
);

const RightAction = props => css`
  padding: 12,
  margin: 4,
  borderRadius: 4,
  width: 100%,
  justify-content: center;
  align-items: center;
  border-color: "#d4e2f7";
  min-width: 64;
  border-style: "solid";
`;

const RightActionText = styled.Text(
  {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 12,
    textTransform: "uppercase"
  },
  props => ({ color: props.theme.primary })
);

export const Header = () => {
  return (
    <AppBar>
      <Title>Home</Title>
      <Link to="/login" css={RightAction}>
        <RightActionText>Logout</RightActionText>
      </Link>
    </AppBar>
  );
};
