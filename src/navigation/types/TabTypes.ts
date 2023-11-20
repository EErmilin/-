import {StackNavigationProp} from '@react-navigation/stack';
//Main
export type TMainAppPage = {
  name: keyof TabParamList;
  title: string;
  icon: React.ReactNode;
  screen: React.ComponentType;
  customTitle: string;
};

//splash & home Stack types
export type StackParamList = {
  SplashScreen: undefined;
  Home: undefined;
};
export type RootStackParamList = {
  Home: {id: string; screen: string};
};

export type HomeScreenRouteProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
//Tab
export type TabParamList = {
  Main: undefined;
  About: undefined;
  Fund: undefined;
  Exposition: undefined;
  Park: undefined;
  TourismFeature: undefined;
  Details: undefined;
  Photo: undefined;
  Quiz: undefined;
  Info:undefined;
  Alexsander:undefined;
  AboutPage: undefined;
};


