
export type TMainAppPage = {
  name: keyof TabParamList,
  title: string,
  icon: React.ReactNode,
  screen: React.ComponentType
};

export type TabParamList = {  
  Main: undefined;
  About: undefined;
  Fund: undefined;  
  Exposition: undefined;
  Park: undefined;
  TourismFeature: undefined;
};


