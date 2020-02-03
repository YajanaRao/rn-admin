import React from 'react';
import styled from '@emotion/native';

const ListContainer = styled.View({
    padding: 12,
    width: '100%'
},
    props => ({ backgroundColor: props.theme.card })
)


const TitleText = styled.Text({
    fontSize: 18,
    padding: 2,
    fontFamily: 'Open Sans,sans-serif'
},
    props => ({ color: props.theme.text })
);



const DescriptionText = styled.Text({
    fontFamily: 'Open Sans,sans-serif'
},
    props => ({ color: props.theme.text })
)


export const List = ({ title, description }) => {
    return (
        <ListContainer>
            <TitleText>
                {title}
            </TitleText>
            <DescriptionText>
                {description}
            </DescriptionText>
        </ListContainer>
    )
}