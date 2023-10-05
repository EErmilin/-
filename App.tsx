import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import TopDrawerMenu from './src/navigation/components/TopDrawerMenu';
import MainAppNavigation from './src/navigation/MainAppNavigation';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={[backgroundStyle, { flex: 1 }]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <MainAppNavigation />
      </SafeAreaView>


    </GestureHandlerRootView>

  );
}

const styles = StyleSheet.create({

});

export default App;
