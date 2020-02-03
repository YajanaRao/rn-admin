import styled from '@emotion/native';

export const Paragraph = styled.Text(
  {
    fontSize: 16,
    margin: 1,
    opacity: 0.7,
    fontFamily: 'Open Sans,sans-serif'
  },
  props => ({ color: props.theme.text })
)