import React from 'react';
import styled from '@emotion/native';

const View = styled.View`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
`;

export const Column = ({ children }) => {
    return (
        <View>
            {children}
        </View>
    )
}