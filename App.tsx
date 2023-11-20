import React, { createContext, useContext, useReducer } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import MainAppNavigation from './src/navigation/MainAppNavigation';

import { colors } from './assets/colors';

import { NavigationContainer } from '@react-navigation/native';

// Create a context for your store
const StoreContext = createContext({});

// Create a custom hook to access the store
export const useStore = () => useContext(StoreContext);

// Define the initial state
const initialState = {
  exhibits: null,
  exhibitUuid: null
};

// Define the reducer function
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'setExhibits':
      return { ...state, exhibits: action.payload };
    case 'setUuid':
      return { ...state, exhibitUuid: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
            <MainAppNavigation />
          </SafeAreaView>
        </NavigationContainer>
      </GestureHandlerRootView>
    </StoreContext.Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
