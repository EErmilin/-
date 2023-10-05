import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';


import { GestureHandlerRootView } from 'react-native-gesture-handler';

import MainAppNavigation from './src/navigation/MainAppNavigation';

import { colors } from './assets/colors';

const App = () => {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#fff"
        />
        <MainAppNavigation />
      </SafeAreaView>
    </GestureHandlerRootView>

  );
}

const styles = StyleSheet.create({

});

export default App;
