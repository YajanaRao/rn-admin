import styled from '@emotion/native';

export const Title = styled.Text(
  {
    fontSize: 24,
    margin: 2,
    fontWeight: '700',
    fontFamily: 'Open Sans,sans-serif'
  },
  props => ({ color : props.theme.text})
)