import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import MainAppNavigation from './src/navigation/MainAppNavigation';

import {colors} from './assets/colors';

import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
          <MainAppNavigation />
        </SafeAreaView>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({});

export default App;
