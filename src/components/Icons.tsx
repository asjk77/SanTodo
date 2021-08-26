import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export type IconProps = {
    size?: number;
    color?: string;
};

export function SettingIcon({size, color}: IconProps) {
    return <Icon name="settings" size={size} color={color} />;
}

export function SettingOutlineIcon({size, color}: IconProps) {
    return <Icon name="settings-outline" size={size} color={color} />;
}

export function ListIcon({size, color}: IconProps) {
    return <Icon name="list" size={size} color={color} />;
}

export function ListOutlineIcon({size, color}: IconProps) {
    return <Icon name="list-outline" size={size} color={color} />;
}

export function HomeIcon({size, color}: IconProps) {
    return <Icon name="home" size={size} color={color} />;
}

export function HomeOutlineIcon({size, color}: IconProps) {
    return <Icon name="home-outline" size={size} color={color} />;
}

export function AddIcon({size, color}: IconProps) {
    return <Icon name="add" size={size} color={color} />;
}

export function RemoveIcon({size, color}: IconProps) {
    return <Icon name="remove" size={size} color={color} />;
}
