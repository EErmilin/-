import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../../assets/colors';
import About_block from '../../../assets/icons/About_block';
import History_block from '../../../assets/icons/History_block';
import Information_block from '../../../assets/icons/Information_block';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const {height} = Dimensions.get('window');

const About = () => {
  const blocksY = useSharedValue(200);
  const blocksOpacity = useSharedValue(0);
  const blockRotate = useSharedValue('0deg');

  const animateBlocks = useAnimatedStyle(() => {
    return {
      // transform: [{translateY: blocksY.value}],
      marginTop: blocksY.value,
      opacity: blocksOpacity.value,
    };
  });

  useEffect(() => {
    blocksY.value = withTiming(blocksY.value - 200, {duration: 500});
    blocksOpacity.value = withTiming(1, {duration: 500});
    blockRotate.value = withTiming('360deg', {duration: 400});
    return () => {
      blocksY.value = 200;
      blocksOpacity.value = 0;
    };
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Animated.View style={[styles.blocks, animateBlocks]}>
          <About_block />
          <History_block />
          <Animated.View style={{transform: [{rotateZ: blockRotate}]}}>
            <Information_block />
          </Animated.View>
        </Animated.View>
      </ScrollView>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scroll: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blocks: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: height / 26,
  },
});
