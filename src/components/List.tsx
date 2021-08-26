import React from 'react';

import {DefaultView as View} from './BasedComponents';
import {MainText, NomalText} from './StyledTexts';

function ListColumn({string}: {string: string; key: number}) {
    return (
        <View
            style={{
                width: '100%',
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <NomalText>{string}</NomalText>
        </View>
    );
}

export type ListProps = {
    stringList?: Array<string>;
};

export function List({stringList}: ListProps) {
    var lists: Array<JSX.Element> = [];

    if (stringList) {
        stringList.forEach((value, index) => {
            lists.push(<ListColumn string={value} key={index} />);
        });
    }

    return (
        <View>
            <MainText>ListStart</MainText>
            {lists}
            <MainText>ListEnd</MainText>
        </View>
    );
}
