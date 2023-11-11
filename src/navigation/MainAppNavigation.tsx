import React from 'react';

// import {NavigationContainer} from '@react-navigation/native';

import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import TopDrawerMenu from './components/TopDrawerMenu';
import {TabParamList, TMainAppPage} from './types/TabTypes';

import CustomHeader from './components/CustomHeader';

// import Main from '../screens/Main/Main';
import About from '../screens/About/About';
import Fund from '../screens/Fund/Fund';
import Exposition from '../screens/Exposition/Exposition';
import Park from '../screens/Park/Park';
import TourismFeature from '../screens/TourismFeature/TourismFeature';

import MenuMain_icon from '../../assets/icons/MenuMain_icon';
import MenuAbout_icon from '../../assets/icons/MenuAbout_icon';
import MenuFund_icon from '../../assets/icons/MenuFund_icon';
import MenuExposition_icon from '../../assets/icons/MenuExposition_icon';
import MenuPark_icon from '../../assets/icons/MenuPark_icon';
import MenuTourismFeature_icon from '../../assets/icons/MenuTourismFeature_icon';
import SplashScreenNavigation from './SplashScreenNavigation';
import PhotoAppNavigation from './PhotoAppNavigation';
import CustomTabBar from '../../assets/icons/CustomTabBar';
import ExHibit from '../screens/Exhibit/Exhibit';
import ExhibitSlider from '../screens/Exhibit/ExhibitSlider';

const Tab = createBottomTabNavigator<TabParamList>();

export const PAGES: Array<TMainAppPage> = [
  {
    name: 'Main',
    title: 'Главная',
    icon: <MenuMain_icon />,
    screen: SplashScreenNavigation,
  },
  {
    name: 'About',
    title: 'О музее',
    icon: <MenuAbout_icon />,
    screen: About,
  },
  {
    name: 'Fund',
    title: 'Фонды',
    icon: <MenuFund_icon />,
    screen: Fund,
  },
  {
    name: 'Exposition',
    title: 'Экспозиция «Мир священной реки Тром-Аган»',
    icon: <MenuExposition_icon />,
    screen: Exposition,
  },
  {
    name: 'Park',
    title: 'Музейный этнографический парк «Земля предков»',
    icon: <MenuPark_icon />,
    screen: Park,
  },
  {
    name: 'TourismFeature',
    title: 'Туристический потенциал территории',
    icon: <MenuTourismFeature_icon />,
    screen: TourismFeature,
  },
  {
    name: 'History',
    title: '',
    icon: null,
    screen: ExhibitSlider,
  },
  {
    name: 'Details',
    title: '',
    icon: null,
    screen: ExHibit,
  },
  {
    name: 'Photo',
    title: '',
    icon: null,
    screen: PhotoAppNavigation,
  },
];

const NAVIGATION_OPTIONS: BottomTabNavigationOptions = {
  tabBarStyle: {height: 0},
  // headerShown: true,
  headerTransparent: true,
  headerStyle: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
  },
};

const MainAppNavigation = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName={PAGES[0].name}
        screenOptions={NAVIGATION_OPTIONS}
        backBehavior={'none'}
        tabBar={props => <CustomTabBar {...props} />}>
        {PAGES.map(page => (
          <Tab.Screen
            key={page.name}
            name={page.name}
            component={page.screen}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              header: ({navigation}) =>
                page.name !== 'Main' && (
                  <CustomHeader navigation={navigation} title={page.title} />
                ),
              tabBarButton: () => null,
            }}
          />
        ))}
      </Tab.Navigator>
      <TopDrawerMenu />
    </>
  );
};

export default MainAppNavigation;
