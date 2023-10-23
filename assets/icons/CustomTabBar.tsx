import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Home_tab_icon from './Home_tab_icon';
import ScanQr_tab_icon from './ScanQr_tab_icon';

const CustomTabBar = ({state, descriptors, navigation}) => {
  //get page from state
  const pageKey = state?.history[0]?.key.split('-')[0];

  const onPress = (route: string) => {
    navigation.navigate(route, {id: route});
  };

  return (
    <View>
      {/* {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            EventTarget: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
      })} */}
      <View>
        {pageKey !== 'Main' ? (
          <View style={styles.tabBarContainer}>
            <TouchableOpacity
              style={styles.tabBtn}
              onPress={() => onPress('Home')}>
              <Home_tab_icon />
              <Text style={styles.label}>Главная</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tabBtn}
              onPress={() => onPress('Photo')}>
              <Text style={styles.label}>QR-код</Text>
              <ScanQr_tab_icon />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  tabBarContainer: {
    height: 60,
    borderTopColor: '#EDEDED',
    borderTopWidth: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    flexDirection: 'row',
  },
  tabBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  label: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'OzHandicraftCyrillicBT',
  },
  tabActive: {},
  tabInactive: {},
  textActive: {},
  textInactive: {},
});
