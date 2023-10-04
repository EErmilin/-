/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const RNRedux = () => (

    <GestureHandlerRootView style={{ flex: 1 }}>
        <App />
    </GestureHandlerRootView>

);


AppRegistry.registerComponent("RusMuseum", () => RNRedux);
