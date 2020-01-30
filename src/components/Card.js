import styled from '@emotion/native';

export const Card = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  border-radius: 4px;
  padding: 20px;
  background-color: ${props => props.theme.card};
  box-shadow: 0 2px 2px rgba(0,0,0,0.2);
  transition: 0.3s;
`