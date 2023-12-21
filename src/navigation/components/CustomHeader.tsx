import React from 'react';
import { Platform, View, StyleSheet, Text, Pressable } from 'react-native';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../../assets/colors';
import Drawer_icon from '../../../assets/icons/Drawer_icon';
import { open as openDrawer } from '../../store/drawerModel';
import Arrow_right_header from '../../../assets/icons/Arrow_right_header';
import TrackPlayer from 'react-native-track-player';

type TStyle = 'dark' | 'light';

type TProps = {
  navigation?: BottomTabNavigationProp<ParamListBase, string, undefined>;
  customTitle?: string
  showBackButton?: boolean;
  title?: string;
};
const CustomHeader = ({
  navigation,
  showBackButton = true,
  customTitle,
  title,
}: TProps) => {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const navigationHook = useNavigation();

  //go back button
  const navigationScreens = () => {
    const parent = navigation?.canGoBack();
    if (route.params && route?.params?.history) {
      const goToScreen = route?.params?.history[0].key.split('-')[0];
      return navigation?.navigate(goToScreen);
    }
    return navigationHook.navigate('Main');
  };


  return (
    <View style={[styles.header, { paddingTop: insets.top }]}>
      <Text style={styles.title}>{customTitle ?? title}</Text>
      <Pressable
        hitSlop={10}
        style={styles.drawer}
        onPress={() => openDrawer()}>
        <Drawer_icon />
      </Pressable>

      {showBackButton && (
        <Pressable
          style={styles.backButton}
          hitSlop={10}
          onPress={navigationScreens}>
          <View style={styles.arrow}>
            <Arrow_right_header />
          </View>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    height: Platform.OS === 'ios' ? 44 : 50, // Высота заголовка
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    right: 16,
    top: Platform.OS === 'ios' ? 10 : 10,
    zIndex: 1,


  },
  drawer: {
    position: 'absolute',
    left: 11,
    top: Platform.OS === 'ios' ? 10 : 10,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#ffffff90',
  },
  title: {
    maxWidth:300,
    fontSize: 24,
    lineHeight: 18,
    color: '#2B2B2B',
    width: '100%',
    textAlign: 'center',
    letterSpacing: 2,
    paddingTop: 0,
    fontFamily: 'OzHandicraftCyrillicBT',
  },
  arrow: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomHeader;
