import React from 'react';
import { Image } from 'react-native';


export const Avatar = () => {
    return (
        <Image
            style={{ width: 40, height: 40, borderRadius: 20 }}
            source={{ uri: 'https://picsum.photos/40/40'}}
        />
    )
}