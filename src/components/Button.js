import React from 'react';
import styled from '@emotion/native';
// import { TouchableOpacity } from 'react-native';

const TouchableOpacity = styled.TouchableOpacity({
    padding: 12,
    margin: 4,
    borderRadius: 4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#d4e2f7'
},
    props => ({ backgroundColor: props.theme.primary })
)

const ButtonText = styled.Text(
    {
        fontSize: 15,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        opacity: 0.7
    },
    props => ({ color: props.theme.text })
)

export const Button = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <ButtonText>{title}</ButtonText>
        </TouchableOpacity>
    )
}