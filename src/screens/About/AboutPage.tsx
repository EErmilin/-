import React, { useEffect, useRef, useState } from 'react';
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Linking,
  useWindowDimensions
} from 'react-native';
import { images } from '../../../assets/images/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../assets/colors';
import CustomHeader from '../../navigation/components/CustomHeader';
import AudioPlayer from '../../components/Audio';
import { useStore } from '../../../App';
import HTML from 'react-native-render-html';
import { useNavigation } from '@react-navigation/native';
import Arrow_right from '../../../assets/icons/Arrow_right';
import Left_arrow from '../../../assets/icons/Left_arrow';
import VideoPlayer from 'react-native-video-controls';
import ImageView from 'react-native-image-viewing';

interface ExHibitProps {
  image: string;
  images: string[];
  description: string;
}


const AboutPage = () => {
  const refImage = useRef(null);
  const [active, setActive] = useState(0);
  const [layoutX, setLayoutX] = useState(0);
  const [visible, setIsVisible] = useState(-1);
  const { state }: any = useStore();
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const info = state?.content?.find(item => item.key == "омузее_история");
  const imgArray = info?.images?.map(img =>
    img.directus_files_id
      ? `https://museum.mobility.tw1.ru/assets/${img.directus_files_id?.filename_disk}`
      : null,
  );

  const nextSlider = () => {
    if (active === imgArray.length - 1) return;
    setActive(active + 1);
    setLayoutX(layoutX + 336);
  };

  const prevSlider = () => {
    if (active === 0) return;
    setActive(active - 1);
    setLayoutX(layoutX - 336);
  };



  const tagsStyles = {
    body: {
      whiteSpace: 'normal',
      color: 'gray',
    },
  };

  useEffect(() => {
    refImage?.current?.scrollTo({ x: layoutX, animated: true });
  }, [layoutX]);

  return (
    <>
      <SafeAreaView style={styles.container}>

        <ScrollView contentContainerStyle={styles.scroll}>
          <Text style={styles.title} onPress={() => console.log(imgArray)}>История</Text>
          <View style={styles.slider}>
            {imgArray && imgArray.length && imgArray[0] ? (
              <View style={styles.slider}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ref={refImage}>
                  {imgArray.map((image, i) => {
                    if (image.includes('mp4')) {
                      return <VideoPlayer
                        style={styles.imageStyle}
                        paused={true}
                        resizeMode="cover"
                        disableFullscreen={true}
                        source={{ uri: image }}
                        poster="https://sun9-43.userapi.com/impg/ROoE0VZCE17aUr80oB2iTGlOKwMDrv44nV9gEg/ZuuAwjZOm7g.jpg?size=778x539&quality=95&sign=d05cf33bedca56b5e42ff36729bba4e6&type=album"
                      />
                    }

                    return (
                      <TouchableOpacity
                        style={styles.imageStyle} onPress={() => setIsVisible(i)}>
                        <Image
                          source={{ uri: image }}
                          style={styles.imageStyle}
                          resizeMode="cover"
                          key={i}
                        />
                      </TouchableOpacity>
                    );
                  })}
                  <ImageView
                    images={imgArray.map(item => {
                      return { uri: item };
                    })}
                    imageIndex={visible}
                    visible={visible > -1 ? true : false}
                    onRequestClose={() => setIsVisible(-1)}
                  />
                </ScrollView>
                <TouchableOpacity style={styles.arrow} onPress={nextSlider}>
                  <Arrow_right />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.arrow, styles.left]}
                  onPress={prevSlider}>
                  <Left_arrow />
                </TouchableOpacity>
                <View style={styles.dotsContainer}>
                  {imgArray.map((_, index) => {
                    return (
                      <View
                        key={index}
                        style={[
                          styles.dots,
                          {
                            backgroundColor:
                              active === index ? colors.blue : colors.yellow,
                          },
                        ]}
                      />
                    );
                  })}
                </View>
              </View>
            ) : null}
            <TouchableOpacity style={styles.arrow} onPress={nextSlider}>
              <Arrow_right />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.arrow, styles.left]}
              onPress={prevSlider}>
              <Left_arrow />
            </TouchableOpacity>
            <View style={styles.dotsContainer}>
              {imgArray.map((_, index) => {
                return (
                  <View
                    key={index}
                    style={[
                      styles.dots,
                      {
                        backgroundColor:
                          active === index ? colors.blue : colors.yellow,
                      },
                    ]}
                  />
                );
              })}
            </View>
          </View>


          {/* INFO */}
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <AudioPlayer audio={["https://museum.mobility.tw1.ru/assets/3541dd36-8d98-468e-8603-158ebcf130a2.mp3"]} />
          </View>
          <View style={styles.infoContainer}>
            <HTML
              contentWidth={width}
              source={{ html: info.description }}
              tagsStyles={tagsStyles}
              renderersProps={{
                a: {
                  onPress(event, url, htmlAttribs, target) {
                    if(url.includes('43ae2845-b94a-46cd-aaf0-4d454f1b71e8')){
                      return navigation.navigate('Exposition');
                     }
                    if (url.includes('d964e041-0c8a-42bf-b18e-9ebeff55dd0b')) {
                      return navigation.navigate('Alexsander');
                    }
                    if (url.includes('exhibits')) {
                      const parts = url.split('/');
                      var uuid = parts[parts.length - 1];
                      navigation.navigate('Details', { uuid: uuid });
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

export default AboutPage;

const styles = StyleSheet.create({
  title: {
    paddingBottom: 10,
    maxWidth: 300,
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
    paddingTop: 50,
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
    marginRight: 13,
    marginLeft: 3,
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
