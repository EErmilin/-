import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View, Image, StatusBar} from 'react-native';
import {SharedElement, nodeFromRef} from 'react-native-shared-element';

import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../../assets/colors';

import Splash_title from '../../../assets/icons/Splash_title';
import Logo from '../../../assets/icons/Logo';
import Bottom_wave from '../../../assets/icons/Bottom_wave';
import Animated, {
  Easing,
  runOnJS,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {images} from '../../../assets/images/images';
import CircleLogo from '../../../assets/icons/CircleLogo';

const BOTTOM_WIDTH = 975;
const {width, height} = Dimensions.get('window');

const SplashScreen = () => {
  const [animationDone, setAnimationDone] = useState(false);
  const bottomTranslateX = useSharedValue(0);
  const patternOpacity = useSharedValue(0);
  const titleScale = useSharedValue(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const hidePattern = () => {
    patternOpacity.value = withTiming(0, {duration: 3000});
  };
  //animation bottom and bg
  useEffect(() => {
    if (!animationDone) {
      bottomTranslateX.value = withTiming(
        -(BOTTOM_WIDTH - width),
        {
          duration: 12000,
          easing: Easing.bezier(0.25, 0, 0.25, 1),
        },
        () => {
          runOnJS(setAnimationDone)(true);
        },
      );
      patternOpacity.value = withDelay(
        500,
        withTiming(0.2, {duration: 4000}, () => {
          runOnJS(hidePattern)();
        }),
      );
      titleScale.value = withTiming(1.2, {duration: 6000});
    }
  }, [
    bottomTranslateX,
    patternOpacity,
    hidePattern,
    titleScale,
    animationDone,
  ]);
  //check
  useEffect(() => {
    if (animationDone) {
      console.log('ok');
    }
  }, [animationDone]);
  return (
    <SafeAreaView style={styles.saveArea}>
      <Animated.View style={styles.splashContainer}>
        <Animated.View style={[styles.pattern, {opacity: patternOpacity}]}>
          <Image
            source={images.splashScreen_bg}
            style={styles.bg}
            resizeMode="cover"
          />
        </Animated.View>
        {/* LOGO */}
        <View style={styles.logo}>
          <View style={styles.circle}>
            <CircleLogo />
          </View>
          <Logo />
        </View>

        {/* TITLE */}
        <Animated.View style={[{transform: [{scale: titleScale}]}]}>
          <Splash_title />
        </Animated.View>
        {/* WAVE */}
        <Animated.View
          style={[
            styles.bottom,
            {transform: [{translateX: bottomTranslateX}]},
          ]}>
          <Bottom_wave />
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
  pattern: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    width,
    height,
  },
  circle: {
    position: 'absolute',
    bottom: 45,
  },
  logo: {
    marginBottom: 32,
    alignItems: 'center',
  },
  bottom: {
    width: BOTTOM_WIDTH * 2,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});

export default SplashScreen;
