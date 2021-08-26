import React from 'react';
import {Text, TextProps} from './BasedComponents';
import {StyleSheet} from 'react-native';

export function MainText({style, ...otherProps}: TextProps) {
    return <Text style={[style, styles.main_text]} {...otherProps} />;
}

export function BoldText({style, ...otherProps}: TextProps) {
    return <Text style={[style, styles.main_text]} {...otherProps} />;
}

export function MonoText({style, ...otherProps}: TextProps) {
    return <Text style={[style, styles.main_text]} {...otherProps} />;
}

export function NomalText({style, ...otherProps}: TextProps) {
    return <Text style={[style, styles.nomal_text]} {...otherProps} />;
}

const styles = StyleSheet.create({
    main_text: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    title_text: {
        fontSize: 20,
    },
    nomal_text: {
        fontSize: 20,
    },
});
