import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import MainAppNavigation from './MainAppNavigation';
import {StackParamList} from './types/TabTypes';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator<StackParamList>();

const SplashScreenNavigation = () => {
  const navigation = useNavigation();
  useEffect(() => {
    // setTimeout(() => {
    //   navigation.reset({routes: [{name: 'TabScreens'}]});
    // }, 1000);
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
