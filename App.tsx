import 'react-native-gesture-handler';
import React from 'react';
import {RootNavigation} from './src/navigation/index';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import './src/common/NotificationService';

function App() {
    return (
        <Provider store={store}>
            <RootNavigation />
        </Provider>
    );
}

export default App;
