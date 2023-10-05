import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home/Home';
import MenuHome_icon from '../../assets/icons/MenuHome_icon';

import CustomHeader from './components/CustomHeader';


import About from '../screens/About/About';
import Fund from '../screens/Fund/Fund';
import { TabParamList, TMainAppPage } from './types/TabTypes';
import TopDrawerMenu from './components/TopDrawerMenu';
import MenuAbout_icon from '../../assets/icons/MenuAbout_icon';
import MenuFund_icon from '../../assets/icons/MenuFund_icon';
import MenuExposition_icon from '../../assets/icons/MenuExposition_icon';
import MenuPark_icon from '../../assets/icons/MenuPark_icon';
import MenuTourismFeature_icon from '../../assets/icons/MenuTourismFeature_icon';
import Exposition from '../screens/Exposition/Exposition';
import Park from '../screens/Park/Park';
import TourismFeature from '../screens/TourismFeature/TourismFeature';

const Tab = createBottomTabNavigator<TabParamList>();

export const PAGES: Array<TMainAppPage> =
  [{
    name: "Home",
    title: 'Главная',
    icon: <MenuHome_icon />,
    screen: Home
  },
  {
    name: "About",
    icon: <MenuAbout_icon />,
    title: 'О музее',
    screen: About
  },
  {
    name: "Fund",
    icon: <MenuFund_icon />,
    title: 'Фонды',
    screen: Fund
  },
  {
    name: "Exposition",
    icon: <MenuExposition_icon />,
    title: 'Экспозиция «Мир священной реки Тром-Аган»',
    screen: Exposition
  },
  {
    name: "Park",
    icon: <MenuPark_icon />,
    title: 'Музейный этнографический парк «Земля предков»',
    screen: Park
  },
  {
    name: "TourismFeature",
    icon: <MenuTourismFeature_icon />,
    title: 'Туристический потенциал территории',
    screen: TourismFeature
  },
  ]

const NAVIGATION_OPTIONS: BottomTabNavigationOptions = {

  tabBarStyle: {
    height: 0,
  },
  headerShown: true,
  headerTransparent: true,
  headerStyle: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
  },
};


const MainAppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={PAGES[0].name}
        screenOptions={NAVIGATION_OPTIONS}
        backBehavior={'none'}>

        {PAGES.map(page =>
          <Tab.Screen
            key={page.name}
            name={page.name}
            component={page.screen}
            options={{
              header: ({ navigation }) => (
                <CustomHeader navigation={navigation} />
              ),
              tabBarButton: () => null,
            }}

          />
        )}

      </Tab.Navigator>

      <TopDrawerMenu />
    </NavigationContainer>
  );
};

export default MainAppNavigation;