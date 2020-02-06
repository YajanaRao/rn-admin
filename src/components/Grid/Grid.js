import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  display: block;
`;

export const Grid = ({ children, item, m = 0, p = 0 }) => {
  if (item) {
    return <Item style={{ margin: m, padding: p }}>{children}</Item>;
  }
  return <Container style={{ margin: m, padding: p }}>{children}</Container>;
};
