import React from 'react';
import styled from '@emotion/native';

const Href = styled.Text({
    color: 'blue',
    marginHorizontal: 4
});

export const LinkText = ({ title }) => {
    return (
        <Href>{title}</Href>
    )
}