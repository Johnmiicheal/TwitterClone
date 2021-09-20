import * as React from 'react';
import { Image } from 'react-native';

export type ProfilePictureProps = {
    image?: string,
    size?: number,
    marginLeft?: number,
}

const ProfilePicture = ({image, size=50, marginLeft=0} : ProfilePictureProps) => (
    <Image source={{ uri: image }}
    style={{ 
        width: size,
        height: size,
        borderRadius: size,
        marginLeft: marginLeft,
    }}
    />
)


export default ProfilePicture;
