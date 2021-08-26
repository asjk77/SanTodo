import React from 'react';
import {View, ViewProps} from './BasedComponents';
import {WhiteSmokeColor, GrayColor} from '../constants/Colors';

export type BorderProps = ViewProps;
export function Border({style, ...other}: BorderProps) {
    return (
        <View
            style={[
                {
                    backgroundColor: WhiteSmokeColor,
                    borderRadius: 20,
                },
                style,
            ]}
            {...other}
        />
    );
}

export function BorderLine({style, ...other}: BorderProps ) {
    return (
        <View
            style={[
                {
                    borderBottomWidth: 1,
                    borderColor: WhiteSmokeColor,
                },
                style,
            ]}
            {...other}
        />
    )
}
