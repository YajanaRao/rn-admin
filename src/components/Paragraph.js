import styled from '@emotion/native';

export const Paragraph = styled.Text(
  {
    fontSize: 20,
    margin: 1,
    opacity: 0.3
  },
  props => ({ color : props.theme.text})
)