import React from 'react';
import {Dimensions, StatusBar, StyleSheet} from 'react-native';

import {useStore} from 'effector-react';
import {$isDrawerOpen, close as closeDrawer} from '../../store/drawerModel';

import {colors} from '../../../assets/colors';

import Modal from 'react-native-modal';

import DrawerMenu from './DrawerMenu';
import {useNavigation} from '@react-navigation/native';
import {TabParamList} from '../types/TabTypes';

const {width, height} = Dimensions.get('screen');

const TopDrawerMenu = () => {
  const navigation = useNavigation();

  const isDrawerOpen = useStore($isDrawerOpen);

  const navigationState = navigation.getState();

  const onNavigation = (screen: string) => {
    navigation.navigate(screen, {history: navigationState.history});
    // if (screen === 'Main') {
    //   navigation.navigate('Home', {id: screen});
    // } else {
    //   navigation.navigate(screen as never);
    // }

    closeDrawer();
  };

  const onCloseDrawer = () => {
    closeDrawer();
  };

  return (
    <>
      <StatusBar
        barStyle={isDrawerOpen ? 'light-content' : 'dark-content'}
        backgroundColor={isDrawerOpen ? colors.blue : '#fff'}
      />
      <Modal
        isVisible={isDrawerOpen}
        animationIn="slideInDown"
        animationOut="slideOutUp"
        backdropOpacity={0}
        style={styles.modal}
        backdropColor={colors.blue}>
        <DrawerMenu onClose={onCloseDrawer} onNavigation={onNavigation} />
      </Modal>
    </>
  );
};

export default TopDrawerMenu;

const styles = StyleSheet.create({
  modal: {
    height,
    width,
    margin: 0,
    backgroundColor: colors.blue,
  },
});
