import React from 'react';
import styled from '@emotion/native';

const View = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
`;

export const Row = ({ children }) => {
    return (
        <View>
            {children}
        </View>
    )
}