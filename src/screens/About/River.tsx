import React, { useRef, useState } from 'react';
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { images } from '../../../assets/images/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../assets/colors';
import Arrow_right from '../../../assets/icons/Arrow_right';
import Play_btn from '../../../assets/icons/Play_btn';
import WaveForm from 'react-native-audiowaveform';
import CustomHeader from '../../navigation/components/CustomHeader';
import Left_arrow from '../../../assets/icons/Left_arrow';
import AudioPlayer from '../../components/Audio';

interface ExHibitProps {
  image: string;
  images: string[];
  description: string;
}

const River = ({ props }) => {
  const refImage = useRef(null);
  const [active, setActive] = useState(0);
  const [layoutX, setLayoutX] = useState(0);
  //next slider
  const nextSlider = () => {
    if (active === images.imageSlider.length - 1) {
      return;
    } else {
      setActive(prevState => prevState + 1);
      setLayoutX(prev => prev + 320);
      refImage?.current?.scrollTo({ x: layoutX, animated: true });
      console.log(layoutX);
    }
  };

  //prev slider

  const prevSlider = () => {
    if (active === 0) {
      setLayoutX(0);
    } else {
      setActive(prevState => prevState - 1);
      setLayoutX(prev => prev - 320);
      console.log(layoutX);

      refImage?.current?.scrollTo({ x: layoutX, animated: true });
    }
  };

  const onLayoutEvent = (event: { nativeEvent: { layout: { x: number } } }) => {
    const { x } = event.nativeEvent.layout;
    setLayoutX(x / images.imageSlider.length);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
          {/* SLIDER */}
          <View style={styles.slider}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
              ref={refImage}>
              {images.imageSlider.map((image, i) => {
                return (
                  <Image
                    source={image.item}
                    style={styles.imageStyle}
                    resizeMode="cover"
                    key={i}
                    onLayout={onLayoutEvent}
                  />
                );
              })}
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
              {images.imageSlider.map((_, index) => {
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
          {/* VOICE */}
          <View style={styles.voiceContainer}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <AudioPlayer audio={"https://museum.mobility.tw1.ru/assets/a08a1071-5089-4d39-86be-3d9a9b9a962f.wav"} />
            </View>
          </View>

          {/* INFO */}
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Основная идея музейной экспозиции «Мир священной реки Тром-Аган»,
              открывшейся 12 сентября 2016 года, может быть сформулирована как
              «культура в круговоротах реки времени». В течение последних лет
              традиционная культура тром-аганских ханты, гармонично
              вписывающаяся в природный ландшафт и составляющая с ним единое
              целое, претерпевает серьезные изменения: из быта уходят
              традиционные вещи, а вместе с ними и символы культуры народа,
              через которые к ней приобщаются подрастающие поколения. В этих
              условиях важнейшим институтом сохранения, возрождения и передачи
              этнических традиций становится Русскинской музей Природы и
              Человека имени Александра Павловича Ядрошникова, в котором
              традиционная культура ханты воссоздана на основе исключительно
              тром-аганских материалов и отражает локальную специфику, присущую
              данной этнотерриториальной группе, подчёркивает важное значение в
              культуре священной реки Тром-Аган. Сохранённые и возрождённые
              традиции служат связующим звеном между прошлым и настоящим,
              традиционной и современной культурой. Экспозиция «Мир священной
              реки Тром-Аган» призвана не только проникнуть в сокровенные сюжеты
              хантыйского традиционного мировоззрения, но и раскрыть природное
              многообразие реки посредством уникальной таксидермической
              коллекции Александра Павловича Ядрошникова. В ней автором с
              большой любовью и мастерством воссоздан мир зверей и птиц,
              обитающих по берегам реки и так же, как человек, считающих её
              своим домом. Раскрывает экспозиция и роль реки в хозяйственной
              сфере хантыйской культуры, её наполненность традициями речного
              рыболовства. Гости музея получают представление о культуре
              тром-аганских ханты как о живом организме, в котором все части
              взаимосвязаны друг с другом и с окружающей природой. В этом
              взаимопроникновении, выработанном веками, коренится живучесть
              хантыйских традиций. Мир, река, земля, созданные Торумом, красивы
              и достойны восхищения,любви и бережного отношения.
            </Text>
            <Text style={styles.infoText}>
              The concept of the museum exposition The world of the Sacred Trom-Agan River can be defined as "culture in the swirling waters of the River of Time". Traditional culture of the Khanty, which provides a good example of harmonious coexistence and unity of Man and Nature, has undergone dramatic changes in recent years. Traditional household items disappear from everyday life, as well as symbols of people’s culture, through which younger generations acquire it. Under these conditions museums are becoming the most important institution for preservation, revival and transfer of the ethnic traditions, as they keep cultural objects representing material and spiritual aspects of the nation’s culture. The Russkinskoy Museum of Nature and Man named after Yadroshnikov Aleksander Pavlovich reconstructs traditional culture of the Khanty people on the basis of exclusive Trom-Agan items; it reflects the unique features of this ethno-territorial group and underlines its importance in the culture of the Sacred Trom-Agan River.
              The World of the Sacred Trom-Agan River exposition is designed not only to get into the intimate subjects of the Khanty traditional worldview, but also to reveal the natural diversity of the river through the unique taxidermic collection of A.P. Yadroshnikov. Within it, with great love and skill the author recreated the world of animals and birds that live along the banks of the river. He did it just like a man who belongs here. The exposition reveals the role of the river in the economic sphere of the Khanty culture, which is rich in traditions of river fishing with the use of various traps, locks, fishing gear, water vehicles, a dugout boat.
              All in all, the authors of the exposition tried to use it to create an idea of the culture of the Trom-Agan Khanty as a living organism in which all parts are interconnected with each other and the surrounding nature. In this interaction, worked out over centuries, the vitality of the Khanty traditions is rooted. The world, the river, the land created by Torum are beautiful and worthy of admiration, love and care.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default River;

const styles = StyleSheet.create({
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
    width: 300,
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
