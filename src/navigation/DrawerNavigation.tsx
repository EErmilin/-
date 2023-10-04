import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerMenu from './DrawerMenu';
import Home from '../screens/Home/Home';
import TopDrawerMenu from './TopDrawerMenu';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={TopDrawerMenu}
        initialRouteName="Home"
        screenOptions={{
          overlayColor: "transparent",
          drawerType: "slide",
          drawerStyle: {width: 0, backgroundColor: "transparent" },
          sceneContainerStyle: { backgroundColor: "transparent" }          
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;