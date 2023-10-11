import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View, Image, Text} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../../assets/colors';

import Splash_title from '../../../assets/icons/Splash_title';
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

const SplashScreen = ({navigation}) => {
  const [animationDone] = useState(false);
  const bottomTranslateX = useSharedValue(0);
  const patternOpacity = useSharedValue(0);
  const titleScale = useSharedValue(1);

  //navigate to main

  // const navigation = useNavigation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navigateToMain = (id: string) => {
    navigation.replace('Home', {id, screen: 'Splash'});
  };

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
          // runOnJS(navigateToMain)('logo');
          runOnJS(navigateToMain)('logo');
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
    navigateToMain,
  ]);
  //check
  useEffect(() => {
    if (animationDone) {
      console.log('ok');
    }
  }, [animationDone]);
  return (
    <SafeAreaView style={styles.saveArea}>
      {/* <SharedElement id="logo.bg" style={{flex: 1}}>
        <View style={StyleSheet.absoluteFill} />
      </SharedElement> */}
      <Animated.View style={styles.splashContainer}>
        <Animated.View style={[styles.pattern, {opacity: patternOpacity}]}>
          <SharedElement id="logo.image">
            <Image
              source={images.splashScreen_bg}
              style={styles.bg}
              resizeMode="cover"
            />
          </SharedElement>
        </Animated.View>
        {/* LOGO */}
        <View style={styles.logo}>
          <View style={styles.circle}>
            <CircleLogo />
          </View>
          <SharedElement id="logo.logo" style={styles.image}>
            <Image source={images.logo} resizeMode="contain" />
          </SharedElement>
        </View>

        {/* TITLE */}
        <Animated.View style={[{transform: [{scale: titleScale}]}]}>
          <Splash_title />
        </Animated.View>

        <Animated.View style={styles.langContainer}>
          <Text style={styles.lang}>RU</Text>
          <Text style={styles.lang}>EN</Text>
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
    position: 'relative',
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
  image: {},
  bottom: {
    width: BOTTOM_WIDTH * 2,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  langContainer: {
    position: 'absolute',
    bottom: height / 4,
    flexDirection: 'row',
    gap: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  lang: {
    paddingHorizontal: 28,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    color: colors.yellow,
    borderRadius: height / 20,
    borderColor: colors.yellow,
    backgroundColor: colors.blue,
  },
});

export default SplashScreen;
