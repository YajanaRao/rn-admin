import React from 'react';
import { View } from 'react-native';
import { Icon } from './Icon';
import styled from '@emotion/native';
import { useTheme } from 'emotion-theming';


//     flex-direction: row;
//     justify-content: flex-start;
//     width: 100%;
//     margin-vertical: 4;
//     align-items: center;
// `;

const Text = styled.Text`
    color: ${props => props.theme.text};
    margin-left: 12;
`

const CheckBoxContainer = styled.TouchableOpacity({
},
    props => ({
        backgroundColor: props.theme.backgroundColor,
    })
)


export const CheckBox = ({ title, value, onChange }) => {
    const theme = useTheme();
    return (
        <View style={
            {
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginVertical: 4,
                alignItems: 'center'
            }
        }>
            <CheckBoxContainer
                onPress={() => onChange(!value)}
            >
                {value ? <Icon name="checkbox-marked" color={theme.primary} /> : <Icon name="checkbox-blank-outline" />}
            </CheckBoxContainer>
            <Text>{title}</Text>
        </View>
    )
}