import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView, View, Text} from '../components/BasedComponents';
import {MainText} from '../components/StyledTexts';

type Props = {
    name: string | undefined;
};

export function DummyScreen({name}: Props) {
    return (
        <View style={styles.container}>
            <SafeAreaView
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <MainText>{name ? name : 'undefined'}</MainText>
                <Text> 아직 이 스크린은 개발중입니다.</Text>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
