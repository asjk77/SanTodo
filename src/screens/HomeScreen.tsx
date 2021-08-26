import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView} from '../components/BasedComponents';
import {MainText} from '../components/StyledTexts';
import {List} from '../components/List';
import {StyleSheet} from 'react-native';
import {useAppSelector} from '../hooks/useRedux';
import {RootState} from '../store/store';
import {Border} from '../components/Border';

import {DefaultButton} from '../components/Button';

export function HomeScreen() {
    const todoState = useAppSelector((state: RootState) => state.todo.todoList);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles._inner}>
                <Border>
                    <MainText style={styles.border_title}>
                        오늘 해야할 일
                    </MainText>
                    <List stringList={todoState} />
                </Border>

                <Border>
                    <MainText style={styles.border_title}>메모!</MainText>
                    <List stringList={todoState} />
                </Border>
                <Border>
                    <List stringList={todoState} />
                </Border>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    _inner: {
        padding: 20,
    },
    border_title: {
        textAlign: 'right',
        margin: 20,
    },
});
