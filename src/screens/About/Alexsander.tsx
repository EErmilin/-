import React, { useRef, useState } from 'react';
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  useWindowDimensions,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../assets/colors';
import MusicPlayer from '../../components/Audio';
import Arrow_right from '../../../assets/icons/Arrow_right';
import { useStore } from '../../../App';
import ImageView from 'react-native-image-viewing';
import HTML from 'react-native-render-html';
import Left_arrow from '../../../assets/icons/Left_arrow';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import VideoPlayer from 'react-native-video-controls';

interface ExHibitProps {
  image: string;
  images: string[];
  description: string;
}


const Alexsander = () => {
  const { state }: any = useStore();
  const refImage = useRef(null);
  const [active, setActive] = useState(0);
  const [layoutX, setLayoutX] = useState(0);
  const [visible, setIsVisible] = useState(-1);
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const info = state?.content?.find(item => item.key == "омузее_ЯдрошниковАП");
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

  useEffect(() => {
    refImage?.current?.scrollTo({ x: layoutX, animated: true });
  }, [layoutX]);


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
          <Text style={styles.title} onPress={() => console.log(imgArray)}>Александр Павлович Ядрошников</Text>

          {/* INFO */}
          <View style={styles.infoContainer}>
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
            <View
              style={{
                marginTop: 20,
                alignSelf: 'stretch',
                width: '100%'
              }}>
              <MusicPlayer
                audio={
                  ['https://museum.mobility.tw1.ru/assets/e7dfd520-c25a-4731-a3bb-ba570d7aa55d.mp3']
                }
              />
            </View>
            <HTML
              contentWidth={width}
              source={{ html: info.description }}
              tagsStyles={tagsStyles}
              renderersProps={{
                a: {
                  onPress(event, url, htmlAttribs, target) {
                    if (url.includes('6684d5ea-d564-481e-afa8-b5f85db93ccd')) {
                      return navigation.navigate('AboutPage');
                    }
                    if(url.includes('43ae2845-b94a-46cd-aaf0-4d454f1b71e8')){
                     return navigation.navigate('Exposition');
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

export default Alexsander;

const styles = StyleSheet.create({

  imageStyle: {
    width: 320,
    height: 170,
    marginRight: 13,
    marginLeft: 3,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  container: {
    flex: 1,
    paddingTop: 55,
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
  dots: {
    width: 10,
    aspectRatio: 1,
    backgroundColor: colors.blue,
    display: 'flex',
    // position: 'absolute',
    // bottom: -10,
    // left: 300 / 2,
    // transform: [{translateY: -10 / 2}],
    borderRadius: 5,
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
    width: '100%',
    //   position: 'absolute',
    bottom: -20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
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
});
