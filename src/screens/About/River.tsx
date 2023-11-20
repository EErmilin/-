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

interface ExHibitProps {
  image: string;
  images: string[];
  description: string;
}

const River = () => {
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
      <CustomHeader title="История музея" />
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
            <View style={styles.play}>
              <Play_btn />
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
    fontSize: 16,
    lineHeight: 20,
    marginTop: 22,
  },
});
