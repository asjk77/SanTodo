import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import {DummyScreen} from '../screens/DummyScreen';
import {MainNavigation} from './MainNavigation';

export type RootStackParamList = {
    Splash: undefined;
    Main: undefined;
    NotFound: undefined;
    DummyScreen: undefined;
};

// Root Navigation
const Stack = createStackNavigator();

export function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{headerShown: false}}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Main" component={MainNavigation} />
                <Stack.Screen name="Auth" component={DummyScreen} />
                <Stack.Screen name="NotFound" component={NotFoundScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
