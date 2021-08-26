import React from 'react';
import {
    SafeAreaView as BasedSafeAreaView,
    View as BasedView,
    Text as BasedText,
    ActivityIndicator as BasedActivityIndicator,
    TouchableOpacity as BasedTouchableOpacity,
    ScrollView as BasedScrollView,
} from 'react-native';

import AppColor from '../constants/AppColor';
import {useColorScheme} from '../hooks/useColorScheme';

export const DefaultView = BasedView;
export type ViewProps = BasedView['props'];
export function View({style, ...other}: ViewProps) {
    const colorScheme = useColorScheme();
    var backgroundColor: string = '';
    if (colorScheme) {
        backgroundColor = AppColor[colorScheme].view;
    }
    return <BasedView style={[{backgroundColor}, style]} {...other} />;
}

export const DefaultText = BasedText;
export type TextProps = BasedText['props'];
export function Text({style, ...other}: TextProps) {
    const colorScheme = useColorScheme();
    var color: string = '';
    if (colorScheme) {
        color = AppColor[colorScheme].text;
    }
    return <BasedText style={[{color}, style]} {...other} />;
}

export const DefaultSafeAreaView = BasedSafeAreaView;
export type SafeAreaViewProps = BasedSafeAreaView['props'];
export function SafeAreaView({style, ...other}: SafeAreaViewProps) {
    const colorScheme = useColorScheme();
    var backgroundColor: string = '';
    if (colorScheme) {
        backgroundColor = AppColor[colorScheme].view;
    }
    return <BasedSafeAreaView style={[{backgroundColor}, style]} {...other} />;
}

export const ActivityIndicator = BasedActivityIndicator;

export const DefaultTouchableOpacity = BasedTouchableOpacity;
export type TouchableOpacityProps = BasedTouchableOpacity['props'];
export function TouchableOpacity({style, ...other}: TouchableOpacityProps) {
    const colorScheme = useColorScheme();
    var backgroundColor: string = '';
    if (colorScheme) {
        backgroundColor = AppColor[colorScheme].view;
    }
    return (
        <BasedTouchableOpacity style={[{backgroundColor}, style]} {...other} />
    );
}

export const DefaultScrollView = BasedScrollView;
export type ScrollViewProps = BasedScrollView['props'];
export function ScrollView({style, ...other}: ScrollViewProps) {
    const colorScheme = useColorScheme();
    var backgroundColor: string = '';
    if (colorScheme) {
        backgroundColor = AppColor[colorScheme].view;
    }
    return <BasedScrollView style={[{backgroundColor}, style]} {...other} />;
}
