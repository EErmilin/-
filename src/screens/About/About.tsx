import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { colors } from '../../../assets/colors';
import About_block from '../../../assets/icons/About_block';
import History_block from '../../../assets/icons/History_block';
import Information_block from '../../../assets/icons/Information_block';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const { height } = Dimensions.get('window');

const About = props => {
  const blocksY = useSharedValue(200);
  const blocksOpacity = useSharedValue(0);
  const blockRotate = useSharedValue('0deg');
  const navigation = useNavigation();

  const animateBlocks = useAnimatedStyle(() => {
    return {
      // transform: [{translateY: blocksY.value}],
      marginTop: blocksY.value,
      opacity: blocksOpacity.value,
    };
  });
  //if focused animation
  useFocusEffect(
    useCallback(() => {
      blocksY.value = withTiming(blocksY.value - 270, { duration: 500 });
      blocksOpacity.value = withTiming(1, { duration: 500 });
      blockRotate.value = withTiming('360deg', { duration: 400 });
      return () => {
        blocksY.value = 200;
        blocksOpacity.value = 0;
        blockRotate.value = '0deg';
      };
    }, [blockRotate, blocksOpacity, blocksY]),
  );

  // useEffect(() => {
  //   blocksY.value = withTiming(blocksY.value - 200, {duration: 500});
  //   blocksOpacity.value = withTiming(1, {duration: 500});
  //   blockRotate.value = withTiming('360deg', {duration: 400});
  //   return () => {
  //     blocksY.value = 200;
  //     blocksOpacity.value = 0;
  //   };
  // }, [blockRotate, blocksOpacity, blocksY]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Animated.View style={[styles.blocks, animateBlocks]}>
        <Text style={styles.title}>О музее</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Alexsander')}>
            <About_block />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AboutPage')}>
            <History_block />
          </TouchableOpacity>
          <Animated.View >
            <TouchableOpacity onPress={() => navigation.navigate('Info')}>
              <Information_block />
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </ScrollView>
    </View>
  );
};

//style={{transform: [{rotateZ: blockRotate}]}} // Анимация для нижнего блока


export default About;

const styles = StyleSheet.create({
  title: {
    maxWidth:300,
    fontSize: 24,
    lineHeight: 30,
    color: '#2B2B2B',
    width: '100%',
    textAlign: 'center',
    letterSpacing: 2,
    paddingTop: 0,
    fontFamily: 'OzHandicraftCyrillicBT',
  },
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
