import React from 'react';
import { Image } from 'react-native';
import ImageContent from '../../assets/emotion.png';


export const Avatar = () => {
    return (
        <Image
            style={{ width: 40, height: 40, borderRadius: 20 }}
            source={ImageContent}
        />
    )
}