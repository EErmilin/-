import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../../assets/colors';
import Arrow_right from '../../../assets/icons/Arrow_right';
import ExhibitTitle from '../../navigation/components/ExhibitTitle';
import CustomHeader from '../../navigation/components/CustomHeader';
import {useStore} from '../../../App';
import ImageView from 'react-native-image-viewing';
import HTML from 'react-native-render-html';
import {useRef} from 'react';
import Left_arrow from '../../../assets/icons/Left_arrow';
import {useEffect} from 'react';
import MusicPlayer from '../../components/Audio';
import ImagesModal from './components/ImagesModal/ImagesModal';
import {useNavigation} from '@react-navigation/native';

const ExHibit = props => {
  const {state} = useStore();
  const navigation = useNavigation();
  const current = state?.exhibits?.find(item => item.id == props.route.params.uuid);
  const imgArray = current?.images?.map(img =>
    img.directus_files_id
      ? `https://museum.mobility.tw1.ru/assets/${img.directus_files_id?.filename_disk}`
      : null,
  );
  const audios = current?.audios?.map(audio =>
    audio.directus_files_id
      ? `https://museum.mobility.tw1.ru/assets/${audio.directus_files_id?.filename_disk}`
      : null,
  );
  const {width} = useWindowDimensions();
  const [active, setActive] = useState(0);
  const [layoutX, setLayoutX] = useState(0);
  const [visible, setIsVisible] = useState(-1);
  const refImage = useRef(null);
  const nextSlider = () => {
    if (active === imgArray.length - 1) return;
    setActive(active + 1);
    setLayoutX(layoutX + 320);
    console.log(layoutX);
  };

  const prevSlider = () => {
    if (active === 0) return;
    setActive(active - 1);
    setLayoutX(layoutX - 320);
    console.log(layoutX);
  };

  useEffect(() => {
    refImage?.current?.scrollTo({x: layoutX, animated: true});
  }, [layoutX]);

  const tagsStyles = {
    body: {
      whiteSpace: 'normal',
      color: 'gray',
    },
  };

  if (!current) return<></>;
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>{current.name}</Text>
          {/* SLIDER */}
          {imgArray && imgArray.length && imgArray[0] ? (
            <View style={styles.slider}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
                ref={refImage}>
                {imgArray.map((image, i) => {
                  return (
                    <TouchableOpacity onPress={() => setIsVisible(i)}>
                      <Image
                        source={{uri: image}}
                        style={styles.imageStyle}
                        resizeMode="contain"
                        key={i}
                      />
                    </TouchableOpacity>
                  );
                })}
                <ImageView
                  images={imgArray.map(item => {
                    return {uri: item};
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
          {/* VOICE */}

          <View style={styles.voiceContainer}>
            <MusicPlayer audio={audios} />
          </View>
          {/* INFO */}
          <View style={styles.infoContainer}>
            <HTML
              contentWidth={width}
              source={{html: current.description}}
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

export default ExHibit;

const styles = StyleSheet.create({
  title: {
    paddingBottom:15,
    fontSize: 24,
    lineHeight: 30,
    color: '#2B2B2B',
    width: '100%',
    textAlign: 'center',
    letterSpacing: 2,
    paddingTop: 0,
    fontFamily: 'OzHandicraftCyrillicBT',
  },
  left: {
    width: 30,
    height: 30,
    backgroundColor: colors.white,
    borderRadius: 15,
    position: 'absolute',
    left: -30 / 2,
    top: 161 / 2.5,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  scroll: {
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  slider: {
    height: 170,
    width: 300,
    justifyContent: 'center',
  },
  imageStyle: {
    width: 316,
    height: 170,
    marginRight: 13,
  },
  webview: {
    flex: 1,
    height: 600,
  },
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: colors.white,
  },
  dotsContainer: {
    width: 100,
    position: 'absolute',
    bottom: -20,
    left: 'auto',
    transform: [{translateX: 300 / 2}],
    flexDirection: 'row',
    gap: 4,
  },
  scroll: {
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  slider: {height: 161},
  arrow: {
    width: 30,
    height: 30,
    backgroundColor: colors.white,
    borderRadius: 15,
    position: 'absolute',
    right: -10,
    top: 161 / 2.5,

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
  voiceContainer: {
    //flexDirection: 'col',
    marginTop: 20,
    alignSelf: 'stretch',
    width: '100%',
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
    paddingBottom: 50,
  },
  infoText: {
    maxWidth: '100%',
    fontSize: 16,
    lineHeight: 20,
    marginTop: 22,
  },
});

//<HTMLView
//value={carrent.description}
//// stylesheet={{width:width}}
///>
