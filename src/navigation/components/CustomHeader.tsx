import React from 'react';
import {Platform, View, StyleSheet, Text, Pressable} from 'react-native';

import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {ParamListBase, useRoute} from '@react-navigation/native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../../assets/colors';
import Drawer_icon from '../../../assets/icons/Drawer_icon';
import {open as openDrawer} from '../../store/drawerModel';
import Arrow_right from '../../../assets/icons/Arrow_right';

type TStyle = 'dark' | 'light';

type TProps = {
  navigation?: BottomTabNavigationProp<ParamListBase, string, undefined>;

  showBackButton?: boolean;
  title?: string;
};
const CustomHeader = ({
  navigation,

  showBackButton = true,
  title,
}: TProps) => {
  const insets = useSafeAreaInsets();
  const route = useRoute();

  //go back button
  const navigationScreens = () => {
    const parent = navigation?.canGoBack();
    if (route.params) {
      const goToScreen = route?.params?.history[0].key.split('-')[0];
      navigation?.navigate(goToScreen);
    } else if (parent === false) {
      navigation?.navigate('Main');
    }
  };

  return (
    <View style={[styles.header, {paddingTop: insets.top}]}>
      <Text style={styles.title}>{title}</Text>

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
            <Arrow_right />
          </View>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
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

    transform: [{rotateZ: '180deg'}],
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
    fontSize: 16,
    lineHeight: 14,
    color: colors.blue,
    width: '100%',
    textAlign: 'center',
    letterSpacing: 2,
    paddingTop: 5,
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
