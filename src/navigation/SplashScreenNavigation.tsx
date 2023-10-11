import React, {useEffect} from 'react';
import MainAppNavigation from './MainAppNavigation';
import {StackParamList} from './types/TabTypes';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Main from '../screens/Main/Main';

const Stack = createSharedElementStackNavigator<StackParamList>();

const SplashScreenNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen
        name="Home"
        component={Main}
        sharedElements={(route, otherRoute, showing) => {
          const {id} = route.params;

          return [{id: `${id}.image`, animation: 'fade-in'}];
        }}
      />
    </Stack.Navigator>
  );
};

export default SplashScreenNavigation;
