import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerLayout } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import DrawerMenu from './DrawerMenu';
import { DrawerContentComponentProps, useDrawerStatus } from '@react-navigation/drawer';



const TopDrawerMenu = (props: DrawerContentComponentProps) => {

    const isDrawerOpen = useDrawerStatus() === 'open';



    return (
        <Modal
            isVisible={isDrawerOpen}
            animationIn="slideInDown" // Анимация появления сверху вниз
            animationOut="slideOutUp" // Анимация исчезновения сверху вверх
            backdropOpacity={0} // Прозрачность заднего фона                            
            style={{flex: 1}}
        >
            <DrawerMenu props={props} />
        </Modal>

    );
};

export default TopDrawerMenu;


