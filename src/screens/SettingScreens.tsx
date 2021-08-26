import React from 'react';
import {SafeAreaView, Text} from '../components/BasedComponents';
import {DefaultButton} from '../components/Button';
import {StyleSheet} from 'react-native';

// 메인 설정 스크린을 정의합니다.

export function SettingMainScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>MainScreen</Text>
            <DefaultButton name="String" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
});

export function SettingInfoScreen() {
    return (
        <SafeAreaView>
            <Text>InfoScreen</Text>
        </SafeAreaView>
    );
}
