import React, {useState, useEffect} from 'react';
import {StyleSheet, AsyncStorage} from 'react-native';
import {
    SafeAreaView,
    Text,
    ActivityIndicator,
} from '../components/BasedComponents';
import {RootStackParamList} from '../navigation';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PrimaryColor} from '../constants/Colors';

type SplashScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Splash'
>;

function useInitConfigLoading(): boolean {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigation = useNavigation<SplashScreenNavigationProp>();

    useEffect(() => {
        async function LoadInitConfig() {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (error) {
                console.warn(error);
            } finally {
                setIsLoading(false);
                navigation.navigate('Main');
            }
        }
        LoadInitConfig();
    });

    return isLoading;
}

export default function SplashScreen() {
    const isLoading = useInitConfigLoading();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>SplashScreen</Text>
            {isLoading && <ActivityIndicator />}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: PrimaryColor,
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
    },
});
