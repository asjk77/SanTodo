import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from './BasedComponents';
import {StyleSheet} from 'react-native';
import {Black2} from '../constants/Colors';

interface DefaultButtonProps extends TouchableOpacityProps {
    name: string | undefined;
}

// 기본 버튼입니다.
export function DefaultButton({
    name,
    style,
    ...otherProps
}: DefaultButtonProps) {
    return (
        <TouchableOpacity
            style={[style, defaultButtonStyle.container]}
            {...otherProps}>
            <Text>{name ? name : '이름 없는 버튼'}</Text>
        </TouchableOpacity>
    );
}

const defaultButtonStyle = StyleSheet.create({
    container: {
        width: '95%',
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Black2
    },
});

