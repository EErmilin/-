import { useNavigation } from '@react-navigation/native';
import React, { Component, useRef, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useStore } from '../../../App';
import CustomHeader from '../../navigation/components/CustomHeader';

const Photo = () => {

  const { state, dispatch } = useStore();
  const navigation = useNavigation();

  function onBarCodeRead(scanResult) {
    if (scanResult.data != null) {
      if (state.exhibits.find((item) => item.id == scanResult.data)) {
        navigation.navigate('Details', { uuid: scanResult.data })
      }
    }
    return;
  }
  const camera = useRef()

  return (
    <><CustomHeader title="" />
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            camera.current = ref;
          }}
          defaultTouchToFocus
          flashMode={RNCamera.Constants.FlashMode.auto}
          mirrorImage={false}
          onBarCodeRead={onBarCodeRead}
          onFocusChanged={() => { }}
          onZoomChanged={() => { }}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
        />
        <View style={[styles.overlay, styles.topOverlay]}>
          <Text style={styles.scanScreenMessage}>Отсканируйте QR-код</Text>
        </View>
      </View>
    </>
  );
}

const styles = {
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center'
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  enterBarcodeManualButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40
  },
  scanScreenMessage: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default Photo;