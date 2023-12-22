import React, {useEffect} from 'react';
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
import MenuMain_icon from '../../assets/icons/MenuMain_icon';
import MenuAbout_icon from '../../assets/icons/MenuAbout_icon';
import MenuExposition_icon from '../../assets/icons/MenuExposition_icon';
import SplashScreenNavigation from './SplashScreenNavigation';
import PhotoAppNavigation from './PhotoAppNavigation';
import CustomTabBar from '../../assets/icons/CustomTabBar';
import ExHibit from '../screens/Exhibit/Exhibit';
import ExhibitSlider from '../screens/Exhibit/ExhibitSlider';
import Quiz from '../screens/Quiz/Quiz';
import AboutPage from '../screens/About/AboutPage';
import River from '../screens/About/River';
import Alexsander from '../screens/About/Alexsander';
import Info from '../screens/About/Info';
import TrackPlayer from 'react-native-track-player';
import MenuPark_icon from '../../assets/icons/MenuPark_icon';
import Park from '../screens/Park/Park';
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
  // {
  //   name: 'Fund',
  //   title: 'Фонды',
  //   icon: <MenuFund_icon />,
  //   screen: Fund,
  // },
  {
    name: 'Exposition',
    title: 'Экспозиция «Мир священной реки Тром-Аган»',
    icon: <MenuExposition_icon />,
    screen: River, // Exposition,
  },
   {
     name: 'Park',
     title: 'Музейный этнографический парк «Земля предков»',
     icon: <MenuPark_icon />,
     screen: Park,
   },

  // {
  //   name: 'TourismFeature',
  //   title: 'Туристический потенциал территории',
  //   icon: <MenuTourismFeature_icon />,
  //   screen: TourismFeature,
  // },
  {
    name: 'Quiz',
    title: 'Викторина о музее',
    icon: <MenuMain_icon />,
    screen: Quiz,
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
  {
    name: 'AboutPage',
    title: 'История',
    icon: null,
    screen: AboutPage,
  },
  {
    name: 'Alexsander',
    title: 'Александр Павлович Ядрошников',
    icon: null,
    screen: Alexsander,
  },
  {
    name: 'Info',
    title: 'Для посетитилей',
    icon: null,
    screen: Info,
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
  React.useEffect(() => {
    TrackPlayer.setupPlayer().catch(err =>
      console.error('TrackPlayer.setupPlayer: ', err),
    );
  }, []);

  return (
    <>
      <Tab.Navigator
        initialRouteName={PAGES[0].name}
        screenOptions={NAVIGATION_OPTIONS}
        backBehavior={'history'}
        tabBar={props => <CustomTabBar {...props} />}>
        {PAGES.map(page => (
          <Tab.Screen
            key={page.name}
            name={page.name}
            component={page.screen}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              header: ({navigation}) =>
                page.name !== 'Main' &&
                page.name !== 'Photo' && (
                  <CustomHeader navigation={navigation} />
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
