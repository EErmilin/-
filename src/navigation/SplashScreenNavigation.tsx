import React, {useEffect} from 'react';
import MainAppNavigation from './MainAppNavigation';
import {StackParamList} from './types/TabTypes';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import {useNavigation} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator<StackParamList>();

const SplashScreenNavigation = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const navigationTimer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'TabScreens'}],
      });
    }, 11000);
    return () => {
      clearTimeout(navigationTimer);
    };
  }, [navigation]);

  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="TabScreens" component={MainAppNavigation} />
    </Stack.Navigator>
  );
};

export default SplashScreenNavigation;
