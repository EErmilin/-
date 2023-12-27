import React, { useRef, useState } from 'react';
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  useWindowDimensions,
  Linking
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../assets/colors';
import HTML from 'react-native-render-html';
import { useStore } from '../../../App';
import { useNavigation } from '@react-navigation/native';

interface ExHibitProps {
  image: string;
  images: string[];
  description: string;
}

const Info = () => {
  const {state}: any = useStore();
  const {width} = useWindowDimensions();
  const info = state?.content?.find(item => item.key == "омузее_дляпосетителей");
  const navigation = useNavigation();

  const tagsStyles = {
    body: {
      whiteSpace: 'normal',
      color: 'gray',
    },
  };



  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Для посетитилей</Text>
          <View style={styles.infoContainer}>
            <HTML
              contentWidth={width}
              source={{html: info.description}}
              tagsStyles={tagsStyles}
              renderersProps={{
                a: {
                  onPress(event, url, htmlAttribs, target) {
                    if (url.includes('exhibits')) {
                      const parts = url.split('/');
                      var uuid = parts[parts.length - 1];
                      navigation.navigate('Details', {uuid: uuid});
                    } else {
                      Linking.canOpenURL(url).then(supported => {
                        if (supported) {
                          Linking.openURL(url);
                        }
                      });
                    }
                  },
                },
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Info;

const styles = StyleSheet.create({
  title: {
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
    paddingTop: 60,
    backgroundColor: colors.white,
  },
  scroll: {
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  slider: {
    height: 170,
    width: '100%',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 320,
    height: 170,
    marginRight: 20,
  },
  arrow: {
    width: 30,
    height: 30,
    backgroundColor: colors.white,
    borderRadius: 15,
    position: 'absolute',
    right: -30 / 2,
    top: 161 / 2,
    transform: [{ translateY: -30 / 2 }],
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  left: {
    width: 30,
    height: 30,
    backgroundColor: colors.white,
    borderRadius: 15,
    position: 'absolute',
    left: -30 / 2,
    top: 161 / 2,
    transform: [{ translateY: -30 / 2 }],
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotsContainer: {
    width: 100,
    position: 'absolute',
    bottom: -20,
    left: 'auto',
    transform: [{ translateX: 300 / 2 }],
    flexDirection: 'row',
    gap: 4,
  },
  dots: {
    width: 10,
    aspectRatio: 1,
    backgroundColor: colors.blue,
    // position: 'absolute',
    // bottom: -10,
    // left: 300 / 2,
    // transform: [{translateY: -10 / 2}],
    borderRadius: 5,
  },
  voiceContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'stretch',
  },
  play: {
    width: 40,
    aspectRatio: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    // opacity: 0.5,
  },
  infoContainer: {
    alignSelf: 'stretch',
    marginTop: 30,
  },
  infoText: {
    color: 'gray',
    fontSize: 16,
    lineHeight: 20,
    marginTop: 22,
  },
});
