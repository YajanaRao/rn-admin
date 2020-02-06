import React from "react";
import styled from "@emotion/native";
import { Link } from "react-router-native";
import { Avatar } from './Avatar';
import { Icon } from './Icon';

const AppBar = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 20px;
  height: 70px;  
  background-color: ${props => props.theme.primary};
`;

const AppBarContainer = styled.View({
  width: '100%',
  elevation: 8,
  paddingHorizontal: 4
},
  props => ({ backgroundColor: props.theme.card })
);


const Title = styled.Text(
  {
    fontSize: 32,
    marginHorizontal: 12,
    fontWeight: "300"
  },
  props => ({ color: props.theme.text })
);

const ContainedView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
`;
const RightActionText = styled.Text(
  {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 12,
    textTransform: "uppercase"
  },
  props => ({ color: props.theme.text })
);

const RightAction = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Header = () => {
  return (
    <AppBarContainer>
      <AppBar>
        <ContainedView>
          <Icon name="menu" />
          <Title>rn-admin</Title>
        </ContainedView>
        <RightAction>
          <Link to="/login" css={RightAction}>
            <RightActionText>Logout</RightActionText>
          </Link>
          <Avatar />
        </RightAction>
      </AppBar>
    </AppBarContainer>
  );
};
