import {ScrollView, StyleSheet, View, Image, SafeAreaView} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
//
import React, {useCallback, useEffect} from 'react';
import Logo_icon from '../../../assets/icons/Logo_icon';
import {colors} from '../../../assets/colors';
import {images} from '../../../assets/images/images';
import QrCode_icon from '../../../assets/icons/QrCode_icon';
import Button from '../../components/base/Button';
import Map_icon from '../../../assets/icons/Map_icon';
import River_icon from '../../../assets/icons/River_icon';
import Home_About_icon from '../../../assets/icons/Home_About_icon';
import Home_Exposition_icon from '../../../assets/icons/Home_Exposition_icon';
import Home_Park_icon from '../../../assets/icons/Home_Park_icon';
import {SharedElement} from 'react-navigation-shared-element';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import CustomHeader from '../../navigation/components/CustomHeader';

const Main = () => {
  const routes = useRoute();
  const animatedText = useSharedValue(15);
  const animatedTextOpacity = useSharedValue(0);
  const animateBlocks = useSharedValue(-200);
  const animateRotation = useSharedValue('0deg');
  const navigation = useNavigation();

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedText.value}],
      opacity: animatedTextOpacity.value,
    };
  });

  useEffect(() => {
    //animation if SplashScreen
    if (routes.params?.screen === 'Splash') {
      animatedText.value = withDelay(400, withTiming(0, {duration: 200}));
      animatedTextOpacity.value = withDelay(
        400,
        withTiming(1, {duration: 200}),
      );
    }
  }, [animatedText, routes.params?.screen, animatedTextOpacity]);

  //animation if from other screens
  useFocusEffect(
    useCallback(() => {
      if (routes.params?.id === 'Main') {
        animateBlocks.value = withTiming(animateBlocks.value + 200, {
          duration: 400,
        });
        animateRotation.value = withTiming('360deg', {duration: 400});
        return () => {
          animateBlocks.value = -200;
          animateRotation.value = '0deg';
        };
      }
    }, [animateBlocks, animateRotation, routes]),
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <CustomHeader showBackButton={false} />
      <ScrollView
        style={styles.container}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <View style={{height: 333}}>
          <Image
            source={images.main_background_houses}
            style={{
              width: '100%',
              height: 360,
              position: 'absolute',
            }}
            resizeMode="cover"
          />
          <View>
            <View style={styles.logo_container}>
              <SharedElement id="logo.image">
                <Logo_icon />
              </SharedElement>

              <Animated.Text style={[styles.logo_title, textAnimatedStyle]}>
                Русскинской музей Природы и Человека имени Ядрошникова
                Александра Павловича
              </Animated.Text>
            </View>
          </View>
        </View>
        <Animated.View style={{transform: [{translateY: animatedText}]}}>
          <River_icon />
        </Animated.View>

        <View style={styles.header_buttons_container}>
          <View style={styles.header_button_wrapper}>
            <Map_icon />
            <Button text="Карта музея" onPress={() => {}} />
          </View>
          <View style={styles.header_button_wrapper}>
            <QrCode_icon />
            <Button text="Сканировать QR-код" onPress={() => {}} />
          </View>
        </View>

        <Animated.View
          style={[
            styles.bigButtons_wrapper,
            {
              transform: [
                {
                  translateY:
                    routes.params.id === 'Main' ? animateBlocks : animatedText,
                },
              ],
            },
          ]}>
          <Home_About_icon onPress={() => {}} />
          <Animated.View style={{transform: [{rotateZ: animateRotation}]}}>
            <Home_Exposition_icon onPress={() => {}} />
          </Animated.View>
          <Home_Park_icon onPress={() => {}} />
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 60,
    flex: 1,
  },
  logo_container: {
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  logo_title: {
    maxWidth: '70%',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    marginLeft: 10,
    color: colors.blue,
    fontSize: 20,
    fontFamily: 'OzHandicraftCyrillicBT',
    fontWeight: '600',
    // transform: [{translateY: -15}],
  },
  header_buttons_container: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 10,
    marginBottom: 16,
    marginTop: 10,
  },
  header_button_wrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  bigButtons_wrapper: {
    marginTop: 4,
    gap: 20,
    alignSelf: 'center',
    marginBottom: 100,
    transform: [{translateY: -15}],
  },
});
