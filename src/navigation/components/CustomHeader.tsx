import React, { useEffect } from 'react';
import { Platform, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../../assets/colors';
import Drawer_icon from '../../../assets/icons/Drawer_icon';
import { open as openDrawer } from '../../store/drawerModel';

type TStyle = 'dark' | 'light';

type TProps = {
  navigation: BottomTabNavigationProp<ParamListBase, string, undefined>

  showBackButton?: boolean;
  title?: string;

};
const CustomHeader = ({
  navigation,

  showBackButton = true,
  title,
}: TProps) => {
  const insets = useSafeAreaInsets();


  return (
    <View
      style={[
        styles.header,
        { paddingTop: insets.top },
      ]}>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity style={styles.drawer} onPress={() => openDrawer()}>
        <Drawer_icon />
      </TouchableOpacity>

      {showBackButton && (
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={2}
        // onPress={navigation.goBack}
        >
        </TouchableOpacity>
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
  darkHeader: {
    backgroundColor: colors.blue_light,
  },
  lightHeader: {
    backgroundColor: colors.white,
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: Platform.OS === 'ios' ? 10 : 10,
    zIndex: 1,
    width: 30,
    height: 30,
  },
  drawer: {
    position: 'absolute',
    left: 16,
    top: Platform.OS === 'ios' ? 10 : 10,
    zIndex: 100,
    justifyContent: 'center',
    height: 30,
  },
  title: {
    fontSize: 14,
    lineHeight: 14,
    color: colors.white,
    width: '100%',
    textAlign: 'center',
    letterSpacing: 2,
    paddingTop: 5,
  },
});

export default CustomHeader;
