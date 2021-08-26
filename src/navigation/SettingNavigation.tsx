import React from 'react';
import {SettingMainScreen, SettingInfoScreen} from '../screens/SettingScreens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export function SettingNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SettingMain"
                component={SettingMainScreen}
            />
            <Stack.Screen
                name="SettingInfo"
                component={SettingInfoScreen}
            />
        </Stack.Navigator>
    );
}
