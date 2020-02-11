import React from 'react';
import styled from "@emotion/styled";

const Link = styled.a`
    color: ${props => props.theme.text};
    &:hover {
        text-decoration: underline;
    }
  
    &:active {
        text-decoration: underline;
    }
`;

export const LinkText = ({ title }) => {
    return (
        <Link className="link">{title}</Link>
    )
}
