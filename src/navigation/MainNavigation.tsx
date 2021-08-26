import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DummyScreen} from '../screens/DummyScreen';
import {SettingNavigation} from './SettingNavigation';
import {
    SettingIcon,
    SettingOutlineIcon,
    HomeIcon,
    HomeOutlineIcon,
    ListIcon,
    ListOutlineIcon,
} from '../components/Icons';
import {HomeScreen} from '../screens/HomeScreen';

// MainTabNavigation

const Tab = createBottomTabNavigator();

export function MainNavigation() {
    return (
        <Tab.Navigator
            initialRouteName="Study"
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => {
                    let returnIcon = null;
                    let routeName = route.name;

                    switch (routeName) {
                        case 'Home':
                            returnIcon = focused ? (
                                <HomeIcon color={color} size={size} />
                            ) : (
                                <HomeOutlineIcon color={color} size={size} />
                            );
                            break;
                        case 'Report':
                            returnIcon = focused ? (
                                <ListIcon color={color} size={size} />
                            ) : (
                                <ListOutlineIcon color={color} size={size} />
                            );
                            break;
                        case 'Setting':
                            returnIcon = focused ? (
                                <SettingIcon color={color} size={size} />
                            ) : (
                                <SettingOutlineIcon color={color} size={size} />
                            );
                            break;
                    }
                    return returnIcon;
                },
            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Report" component={DummyScreen} />
            <Tab.Screen name="Setting" component={SettingNavigation} />
        </Tab.Navigator>
    );
}
