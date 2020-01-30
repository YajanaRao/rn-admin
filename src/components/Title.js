import styled from '@emotion/native';

export const Title = styled.Text(
  {
    fontSize: 30,
    margin: 2,
    fontWeight: '600'
  },
  props => ({ color : props.theme.text})
)