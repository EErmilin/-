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

const Alexsander = (props) => {
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
      <CustomHeader customTitle="История музея" />
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
          <View style={styles.infoContainer}>
            <Text style={styles.title}>Александр Павлович Ядрошников</Text>
            <Image
              source={require('../../../assets/images/alexander.jpg')}
              style={styles.imageStyle}
              resizeMode="cover"
              onLayout={onLayoutEvent}
            />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <AudioPlayer audio={"https://museum.mobility.tw1.ru/assets/e7dfd520-c25a-4731-a3bb-ba570d7aa55d.mp3"}/>
            </View>
            <Text style={styles.infoText}>
              Александр Павлович Ядрошников родился в 1940 г. в г. НолИнске Кировской области. С детства мечтал связать свою жизнь с лесом, увлекался охотой, рыбалкой, рисованием. В 1967 году после окончания Иркутского заготовительного техникума был направлен в национальный поселок РусскинскИе Сургутского района. Более 20 лет работал охотоведом в промохотхозяйстве, много времени проводил на стойбищах тром-агАнских ханты. Был одним из первых организаторов Слёта рыбаков, охотников и оленеводов. За четверть века проникся глубоким уважением к коренным жителям, изучил традиции их культуры и исследовал законы таежной жизни. Часто ханты делились опасениями, появившимися в связи с промышленным освоением края, сетовали на экологическую проблему, на утрату своего культурного наследия. Стремление маленького народа к сохранению культурных традиций и желание показать красоту югорского края подвигли Александра Павловича на создание музея. Идейным вдохновителем стал друг – Николай Липатов, который помог с первым музейным помещением – маленьким вагончиком во дворе семьи  Ядрошниковых. В основу первой экспозиции легло увлечение Александра Павловича таксидермией – изготовлением муляжей животных. Большой охотничий опыт, природное чутьё композиции и талант мастера помогли найти правильные способы творческого воплощения. Уникальные этнографические предметы были собраны в поездках на стойбища тром-аганских ханты. Ханты понимали значение музея и поэтому приносили мастеру редкие трофеи и предметы. Одним из первых даров от коренных жителей стала священная голова медведя.
              Музей открылся для гостей в 1988 году и с первых дней существования в стал популярным. Первым советчиком и помощником мастера и первым экскурсоводом музея стала жена Людмила Алексеевна. Супруги со временем овладели всеми видами музейной работы, выезжали на выставки. О музее пошла молва за пределами Русскинской. Стали помогать местные власти, поддерживали музейщики. В 1993 году выделили помещение, а на территории  музейного парка  Александр Павлович начал создавать комплекс хантыйской традиционной архитектуры. Музей стал цельным организмом, полным энергии, сил и планов.
              12 сентября 2016 года распахнуло двери просторное здание музея с новой экспозицией «Мир священной реки Тром-Аган». В далекие 1980-е годы разве мог подумать Мастер о том, что его детище станет известным далеко за пределами России, что станет для многотысячных гостей открытием природы и культуры югорского края. За многолетний  труд и популяризацию культуры Югры Александр Павлович Ядрошников удостоен почетных званий «Заслуженный деятель культуры Ханты-Мансийского автономного округа» и «Почетный гражданин Сургутского района». В сентябре 2008 г. постановлением Главы Сургутского района музею было присвоено имя основателя. В ноябре 2014г. Александр Павлович за вклад в отечественную культуру был награжден Почетной грамотой Президента России В.В. Путина.  Жизнь Александра Павловича Ядрошникова – образец большой созидательной деятельности, его творчество – песня югорской земле. Верность родному краю, северной природе и своему музею несет он через годы.

            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Alexsander;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
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
    width: '100%',
    height: 200,
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
  title: {
    fontSize: 20,
    color: 'black',
    marginBottom: 20
  }
});
