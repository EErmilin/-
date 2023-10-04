import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerMenu from './DrawerMenu';
import Home from '../screens/Home/Home';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={DrawerMenu}
        initialRouteName="Home"
      >
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;