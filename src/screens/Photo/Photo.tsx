import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const Photo = () => {
  return (
    <SafeAreaView style={styles.camera}>
      <View />
    </SafeAreaView>
  );
};

export default Photo;

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    backgroundColor: '#000',
  },
});
