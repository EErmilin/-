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
import CustomHeader from '../../navigation/components/CustomHeader';
import AudioPlayer from '../../components/Audio';

interface ExHibitProps {
  image: string;
  images: string[];
  description: string;
}


const AboutPage = () => {
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
          { /*       
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

          <View style={styles.voiceContainer}>
            <View style={styles.play}>
              <Play_btn />
            </View>
          </View>*/}

          {/* INFO */}
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <AudioPlayer audio={"https://museum.mobility.tw1.ru/assets/3541dd36-8d98-468e-8603-158ebcf130a2.mp3"} />
            </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Тысячелетнее наследие прошлого, отраженное в уникальной культуре тром-аганских ханты и природных богатствах Югры бережно хранит наш музей. На создание музея в 1988 году подвигли энтузиаста Александра Павловича Ядрошникова желание показать красоту края, глубокое уважение к ханты и стремление народа к сохранению своих культурных традиций. В основу первой музейной экспозиции легло увлечение Александра Павловича таксидермией – изготовлением муляжей животных. С первых дней существования музей стал популярен среди гостей и коренных жителей. Для пополнения фондов мастер организовывал экспедиции на хантыйские стойбища, оказывал посильную помощь археологам, ученым и журналистам в изучении края.  В начале 1990-х годов на территории музейного парка  создал хантыйское стойбище - комплекс хантыйской традиционной архитектуры. В последующие годы в музейном парке стали проводить мероприятия, фольклорные концерты, снимать фильмы. Дважды музей встречал участников Международного фестиваля финно-угорских народов.
              Экспозиции музея рассказывают о единстве Природы и Человека, гармонично существовавших на протяжении многих тысячелетий. Мир природы Югры представлен уникальной  зоологической коллекцией, все экспонаты которой изготовлены А.П. Ядрошниковым. Большой охотничий опыт, природное чутьё композиции и  таксидермический талант мастера помогли мастеру найти правильные способы творческого воплощения. По насыщенности материалом и эмоциональному восприятию музей отличается от других подобных музеев. Посетители как будто подсматривают  картинки живой природы: ток глухарей, хитрую рысь, росомаху на охоте, полярного волка, напавшего на оленя, неравную схватку медведя с человеком. У каждого экспоната своя история. Год от года природа края претерпевает значительные изменения, поэтому данная коллекция – своего рода энциклопедия животного мира югорского края. Экспозиция этнографического зала  рассказывает о традиционной культуре тром-аганской локальной группы восточных ханты – целом мире взаимодействия таёжного человека с окружающей средой. За последние  десятилетия самобытная хантыйская культура приобрела новые черты, поэтому в экспозиции можно встретить предметы, вышедшие из употребления, так и бытующие  сегодня. Тром-аганские ханты понимают значимость музея, активно пополняют его фонды и приводят в музей подрастающее поколение.
              В музее хранится почти 10 тысяч экспонатов. Помимо зоологической и этнографической коллекций, музей обладает документальными источниками и фотоматериалами. Деятельность музея направлена на сохранение, изучение и популяризацию природного наследия региона, этнической истории и культуры тром-аганских ханты и русского старожильческого населения. Коллектив музея работает в тесной связи с детскими образовательными учреждениями, разрабатывает благотворительные проекты для социальных групп, организует выставки. Большой популярностью у посетителей пользуются экологические праздники, мастер-классы и занятия по музейной педагогике,  научная библиотека и музейный кинотеатр. Ежегодно музей посещают более 20 тысяч экскурсантов.  По итогам народного  голосования в 2009г. музей вошел в число семи наиболее ярких туристических объектов Тюменской области, в 2012г. - в десятку достопримечательностей Уральского федерального округа и в топ - 1000 достопримечательностей России. Русскинской музей Природы и Человека имени Ядрошникова Александра Павловича  всегда рад поделиться со своими гостями багажом накопленных знаний и ждет новых интересных встреч в музейных залах.

            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AboutPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:0,
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
